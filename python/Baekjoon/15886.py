import sys

n = int(sys.stdin.readline().rstrip())
boards = [i for i in sys.stdin.readline().strip()]
result = 1

curAlp = boards[0]
for i in boards[1:]:
    if curAlp == "W" and i == "E":
        result += 1
        curAlp = i
    elif i == "W": curAlp = i

print(result)