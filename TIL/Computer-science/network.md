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

특정 호스트에 데이터(패킷)을 보내기 위해서 IP를 관리하는 계층. (IP routing을 하는 계층)

- 데이터를 보내고자 하는 상대 호스트 (IP) 주소

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

TCP/IP 4계층을 사용하고있다.

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

#### routing table

어떤 네트워크로 향할 때는 어떤 라우터를 거쳐야 빠르다는 것을 정리한 테이블

- routing table 확인하기: `netstat -r`, `netstat -rn`

[tcp/ip - NaverD2](https://d2.naver.com/helloworld/47667): 네트워크 스택 발전 방향 전까지 읽는 것을 추천

### NAT (network address translation)

private ip만으로는 서버가 누가 보냈는지 알 수 없기 때문에 변환테이블이라는 것을 생성한다. 요청 private ip에 공인 ip 주소(랜카드) 하나를 할당하여 공인ip를 전송하고, 데이터를 받아오면 변환 테이블을 보고 데이터를 private ip에 전달해준다.

### NAPT (network address port translation)

공인 ip (NIC, 랜카드)의 갯수에 한계가 있기 때문에 라우터가 각각 port 번호를 할당하여 변환테이블을 생성하고 서버에 요청을 보낸다.

---

## 전송 계층 (Translate) - TCP / UDP

### port

port는 컴퓨터 내의 프로세스 내의 *socket에 부여된 2byte 정수*이다. (0 ~ 2^16-1)

> socket도 메모리이다.

여러개의 프로세스가 돌고 있을때 패킷(데이터)이 어떤 프로세스로 주어져야하는지 알아야 하기 위해 할당된 주소를 *포트(port)*라고 한다. 즉 소켓에 할당된 주소로,
특정 프로세스로 데이터를 전달할 수 있다. 이러한 port를 관리하는 계층이 전송계층이다.

- well-known port : 0~1023 (server, listening socket)

  - Well-known port Service

    - 21 FTP
    - 22 ssh
    - 23 Telnet
    - 25 SMTP
    - 53 DNS
    - 80 http
    - 443 https

- dynamic port : 49152~65535 (client)

#### socket

컴퓨터 네트워크를 경유하는 프로세스 간 통신의 종착점이다.

- listening socket: 클라이언트로부터 request를 받는데 필요한 socket (접속)
- data socket: 접속 후에 데이터를 송수신하는 socket

### TCP / UDP

#### TCP (Transmission Control Protocol)

- 연결 지향형 프로토콜, 접속 후에 연결이 돼있어야한다.
- 신뢰도가 높다.
- 패킷이 유실되면 재전송을 해준다.
- 패킷을 관리하기 때문에 다소 무겁다 느리다.
- Http / TCP / IP
- 파일 전송 등

#### UDP

- 비연결 지향형 프로토콜, 접속하고 특정 단위 작업이 끝나면 연결이 끊긴다.
- 신뢰도가 떨어진다
- 패킷 전송 후 재전송 해주지 않는다.
- 전송된 데이터 일부가 손실될 수 있다.
- 패킷을 관리하지 않기 때문에 가볍고 빠르다.
- 동영상(Stream), 게임 등

> Sliding Window 후에 공부하기

---

## 응용 계층 (Application)

- **DNS** : Domain Name System(53) : 도메인 이름을 IP 주소로 변환하는 프로토콜

  - host: (naver.co,kr)
  - DNS server: (kr 담당하는 서버에 request), (co 담당하는 서버 request), (naver가 있는지 requset) => IP주소 알아냄
  - 한번 알아낸 DNS Ip 주소는 cache에 저장한다.

  ```zsh
  > nslookup # name server lookup
  > google.com
  Server:		168.126.63.1
  Address:	168.126.63.1#53

  Non-authoritative answer:
  Name:	google.com
  Address: 172.217.25.206 # google.com에 접속할 수 있다.
  ```

- **HTTP** : HyperText Transfer Protocol(80) : 웹에서 데이터를 주고 받을 수 있는 프로토콜

  - 메세지, 문자열 기반 (html, js 모두 문자열)
  - Mac주소(라우터) : IP(요청 클라이언트) : port : 데이터 : port : IP(서버) : Mac주소(라우터)
  - http -> port -> ip -> mac address, lic -> 서버의 mac address, lic -> ip -> port -> data, 다시 거꾸로 반복

- **HTTPS** : HTTP over Secure Socket Layer(443), 텍스트를 SSL/TLS로 암호화해 보안을 강화했다.

- Telnet : 23번 포트, 유저가 원격에 있는 서버에 로그인

- SSH : 22번 포트, 텔넷과 유사하나 암호화를 통해 보안을 강화했다.

- SMTP : Simple Mail Transfer Protocol(25) : 메일 서비스

- FTP : File Transfer Protocol(20, 21), 파일 전송을 위한 프로토콜

### http (Hyper Text Tranfer Protocol)

- HTTP/1.0
  - 일시적 연결, TCP 연결 후 하나의 요청/응답 후 연결을 끊는다
- HTTP/1.1
  - 지속적 연결(Persistent Connection), TCP 연결을 그대로 유지한다.
    - header에 connection: close 설정을 하면 연결을 닫아버린다.
  - 효율적인 캐싱과 프록싱
  - 컨텐트 협상

#### 컨텐츠 협상

ex) Accept : text/html, text/_;q=0.5, _/\*;q=0.2 (text/hmtl / 없으면 text형식 아무거나, 0.5의 확률, 비중으로 / 아무거나 0.2의 확률, 비중으로)

- 서버 주도(Server-driven) 협상: 최선 추측(best guess) → 항상 클라이언트가 원하는 형식 데이터를 받는 것은 아님.
- 에이전트 주도(Agent-driven) 협상: 클라이언트가 자원을 고를 수 있다.
  - 자료에 접근하는데 두번의 요청과 응답이 필요 → 효율성이 떨어짐
  - Accept(매체 유형)
  - Accept-Charset(문자 집합)
  - Accept-Encoding(컨텐트 인코딩)
  - Accept-Language(언어)
  - Accept-Language: en, sp
