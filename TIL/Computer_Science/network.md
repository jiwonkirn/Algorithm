# 네트워크

[강사님 강의자료](https://github.com/ythwork/FDS/tree/master/network)

---

## Network interface

- 물리 계층(Physical Layer)
- 데이터 링크 계층(Data Link Layer)

### 물리 계층

- LAN cable
- Repeater

### 데이터 링크 계층

- NIC (network interface card): 일반적으로 랜 카드라고 불린다. 네트워크 어댑터
- MAC (Media Access Control): NIC의 하드웨어 주소

#### 이더넷 프로토콜

랜에서 데이터를 주고받을 때는 맥 주소(물리주소)만 알면 데이터를 주고 받을 수 있다. 이를 이더넷 프로토콜이라고 하고, 그 데이터를 패킷이라고 한다. (<= 1500 byte)

- Destination MAC Address : 6 bytes, 패킷 수신 NIC
- Source Mac Address : 6 bytes, 패킷 송신 NIC
  - (LAN 안에 존재하는) 보내는 사람의 mac 주소, 받는 사람의 mac 주소
- Data : 0 ~ 1500 bytes, 전송 데이터, MTU(maximum transmission unit) : 1500 bytes

`ifconfig`의 `en0`를 통해 mac 주소를 알 수 있다.

---

## 네트워크 계층

### ARP(Address Resolution Protocol)

브로드캐스트로 어떤 IP를 사용하는 호스트의 MAC 주소를 알아낸다.

```
requset 패킷
  보내는 호스트 (IP, Mac)
  받는 호스트 (IP)
->
라우터가 모든 호스트에 쏴준다.
->
response 패킷
  보내는 호스트 (IP, Mac)
  받는 호스트 (IP, Mac)
```

이렇게 broadcast를 통해 받는 호스트의 mac주소를 알아냈기 때문에 이를 arp table에 쌓이게 되고, 다음부터는 router를 거칠 필요가 없다.

#### 실습

```zsh
>> ifconfig # en0 에 ip주소와 mac주소가 있음

# 혹은
>> ifconfig en0

# 채팅참여
>> python chat_clnt.py 192.168.100.117 6060 jiwonkim

# arp table에 참여한 컴퓨터의 맥주소, ip가 쌓임
>> arp -a

# ping을 3번 보내서 모든 LAN의 컴퓨터의 mac주소를 알아온다. -c 옵션을 빼면 계속 보낸다.
ping -c 3 192.168.100.255
```

> arp는 NI(network interface)와 Internet 사이에 있다. (?)

> arp scoping: A컴퓨터의 mac주소를 알고 있으면 라우터로가 A컴퓨터에 보내는 데이터를 해커 컴퓨터로 우회시킬 수 있다. (특별한 장비를 이용)

> 끝 자리가 255인 ip 주소는 broadcast 주소이다.

> 지금 다루는 ip는 IPv4이다.

```zsh
>> ifconfig en0

en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
ether 60:f8:1d:b8:16:ae
inet6 fe80::498:5bf6:6041:89ff%en0 prefixlen 64 secured scopeid 0x5
inet 192.168.100.231
netmask 0xffffff00
broadcast 192.168.100.255
nd6 options=201<PERFORMNUD,DAD>
media: autoselect
status: active
```

### IP

#### class 단위 주소 지정

1. class A: bit 첫 시작이 0부터

```
|-------|-------|-------|-------|
|network|---------host----------|

network 2^8 할당
host 2^24 할당
```

2. class B: bit 첫 시작이 10부터

```
|-------|-------|-------|-------|
|----network----|-----host------|

network 2^16 할당
host 2^16 할당
```

3. class C: bit 첫 시작이 100부터

```
|-------|-------|-------|-------|
|--------network--------|-host--|

network 2^24 할당
host 2^8 할당 (정확히는 0과 255가 빠진다.)
```

#### 서브넷

어디까지가 네트워크 주소인가..?

호스트 아이디에 할당된 비트를 쪼개서 서브넷 만들 수 있다. 나눠진 각가의 서브넷은 다른 서브넷과 분리된 환경이다. 서브넷마스크를 보고 어떻게 분할됐는지 알 수 있다.

```zsh
>> ifconfig en0

netmask 0xffffff00 # host주소 & 00000000 => 00 # 분할 X
netmask 0xffffffC0 # host주소 & 11000000 => 00, 10, 01, 11 # 4분할
```

#### 공인IP / 사실IP

##### 공인 IP (Public IP) - ISP(Internet Service Provider)

전세계에서 유니크하다.

##### 사설 IP (Private IP)

Private network(사설망, LAN) 상에 존재, 전세계에서 유니크하지 않고 LAN 범위 내에서만 접근이 가능하다. (e.p. `192.168.0.1`)

> 보통 router에 공인 IP가 들어가고, 해당 공인 IP들을 LAN 범위에서 컴퓨터들이 나눠서 쓴다. 이 컴퓨터는 Private network내에 있는 것이며, 사설 IP를 가진다.

공인 IP => DHCP(Dynamic Host Congiguration Protocol): 재연결이 될 때마다 동적으로 IP가 할당된다. => 사설IP
