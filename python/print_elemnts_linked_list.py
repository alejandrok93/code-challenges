def printLinkedList(head):
    curr_node = head
    while curr_node is not None:
        print(curr_node.data)
        curr_node = curr_node.next


class  SinglyLinkedListNode:
  def __init__(self, data, next=None):
    self.data = data
    self.next = next


class SinglyLinkedList:
  def __init__(self, head=None, tail=None):
    self.head = head
    self.tail = tail

  def add_to_tail(self, value):
    new_node = SinglyLinkedListNode(value)
    if self.head == None:
      self.head = new_node
      self.tail = new_node
    else:
      self.tail.next = new_node
      self.tail = new_node


list = SinglyLinkedList()
list.add_to_tail(2)
list.add_to_tail(200)
list.add_to_tail(250)
list.add_to_tail(300)
list.add_to_tail(350)

printLinkedList(list.head)