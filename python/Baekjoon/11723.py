import sys

m = int(sys.stdin.readline().rstrip())
s = set()
fullS = set(range(1, 21))

for _ in range(m):
    command = sys.stdin.readline().rstrip().split()
    if command[0] == "all": s = fullS.copy()
    elif command[0] == "empty": s.clear()
    else:
        comm, x = command[0], int(command[1])

        if comm == "add": s.add(x)
        elif comm == "remove": s.discard(x)
        elif comm == "toggle": s.remove(x) if x in s else s.add(x)
        elif comm == "check": print("1" if x in s else "0")
