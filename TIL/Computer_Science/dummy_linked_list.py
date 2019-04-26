"""
배열과 연결리스트의 차이점

- 배열
    - 장점
        - 검색, 참조가 빠르다 (indexing, O(1)), 주소값에 연산을 해서 접근할 수 있다. arr[3] === (0x11 + (4 * 3))
    - 단점
        - insert, delete 하는 데에 비용이 많이 든다. (O(n))

- 연결리스트
    - 장점
        - inser, delete 하는 데에 비용이 적다. (O(1))
    - 단점
        - 검색이 배열에 비해 느리다. (O(n))
"""


class Node:
    def __init__(self, data=None):
        self.prev = None
        self.data = data
        self.next = None

    # 객체가 소멸될 때
    # 반드시 한번 호출된다.
    def __del__(self):
        print(f'{self} is deleted')

# double linked list
# dummy node 데이터가 없다 => 구현 편의성이 높아진다.
# head와 tail을 가진다.


class DoubleLinkedList:
    def __init__(self):
        self.head = Node()  # 데이터는 없지만 엄연한 node이다.
        self.tail = Node()
        self.d_size = 0

        self.head.next = self.tail
        self.tail.prev = self.head

    def empty(self):
        if self.d_size == 0:
            return True
        return False

    def size(self):
        return self.d_size

    def add_first(self, data):
        new_node = Node(data)

        # 일단 new_node 기준에서 연결
        new_node.prev = self.head
        new_node.next = self.head.next

        # tail에 바로 접근하기 위해서..
        self.head.next.prev = new_node
        self.head.next = new_node

        self.d_size += 1

    def add_last(self, data):
        new_node = Node(data)

        # 일단 new_node 기준에서 연결
        new_node.next = self.tail
        new_node.prev = self.tail.prev

        # tail에 바로 접근하기 위해서..
        self.tail.prev.next = new_node
        self.tail.prev = new_node

        self.d_size += 1

    def insert_after(self, data, node):
        new_node = Node(data)

        new_node.prev = node
        new_node.next = node.next

        node.next.prev = new_node
        node.next = new_node

        self.d_size += 1

    def insert_before(self, data, node):
        new_node = Node(data)

        new_node.next = node
        new_node.prev = node.prev

        node.prev.next = new_node
        node.prev = new_node

        self.d_size += 1

    # search, iterator의 첫번째 데이터는 head.next 마지막은 tail.prev
    def search_forword(self, target):
        cur = self.head.next

        # 객테 자체가 다른지?
        while cur is not self.tail:
            if cur.data == target:
                return cur
            cur = cur.next

        return None

    def search_backword(self, target):
        cur = self.tail.prev

        while cur is not self.head:
            if cur.data == target:
                return cur
            cur = cur.prev

        return None

    def delete_first(self):
        if self.empty():
            return
        self.head.next = self.head.next.next
        self.head.next.prev = self.head
        self.d_size -= 1

    def delete_last(self):
        if self.empty():
            return
        self.tail.prev = self.tail.prev.prev
        self.tail.prev.next = self.tail
        self.d_size -= 1

    def delete_node(self, node):
        if self.empty():
            return
        node.next.prev = node.prev
        node.prev.next = node.prev.next.next
        self.d_size -= 1

# generator


def show_list(dlist):
    cur = dlist.head.next
    while cur is not dlist.tail:
        yield cur.data
        cur = cur.next


def show(li):
    for elem in show_list(li):
        print(elem, end="   ")


# linekdList 생성
li = DoubleLinkedList()

# node 추가
li.add_first(1)
li.add_first(2)
li.add_last(3)
li.add_last(5)
li.add_last(7)
li.add_last(9)

# 노드 찾기
searched_node = li.search_forword(10)

# 찾았는지 확인
if searched_node:
    print(searched_node.data)
else:
    print("There is no such data")

# 3 뒤에 요소 추가
node = li.search_backword(3)
if node:
    li.insert_after(10, node)

show(li)  # 2   1   3   10   5   7   9

# 첫 요소 지움
li.delete_first()

show(li)  # 1   3   10   5   7   9

# 10을 찾아서 지움
li.delete_node(li.search_backword(10))

show(li)  # 1   3   5   7   9

# 마지막 요소 지움
li.delete_last()

show(li)  # 1   3   5   7
