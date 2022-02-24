class Stack:
    def __init__(self, initial=None):
        if initial is None:
            initial = []
        self.stack = []
        self.initial = initial

    def __str__(self):
        return f'data={self.stack}'

    def __repr__(self):
        return f'<Stack (data = {self.stack})>'

    def size(self):
        return len(self.stack)

    def push(self, data):
        self.stack.append(data)

    def pop(self):
        if not self.is_empty:
            return self.stack.pop()

    @property
    def is_empty(self):
        return len(self.stack) == 0


stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)
print(stack)
print(stack.size())

print(stack.pop())      # remove 3
print(stack)
print(stack.size())     # size = 2
