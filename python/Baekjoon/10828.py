import sys

n = int(sys.stdin.readline().strip())
stack = []

for _ in range(n):
    command = sys.stdin.readline().strip().split()
    if command[0] == "push": stack.append(command[1])
    else:
        stackSize = len(stack)
        if command[0] == "size": print(stackSize)
        elif stackSize == 0:
            if command[0] == "empty": print(1)
            else: print(-1)
        else:
            if command[0] == "empty": print(0)
            elif command[0] == "pop": print(stack.pop())
            else: print(stack[-1])