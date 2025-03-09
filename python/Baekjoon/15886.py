import sys

n = int(sys.stdin.readline().rstrip())
boards = [i for i in sys.stdin.readline().rstrip()]
result = 0

def dfs(i, start):
    global result
    direction = boards[i]
    boards[i] = start

    if direction == "E":
        if (i + 1) >= n or boards[i + 1] == start: return
        if type(boards[i + 1]) != str:
            result -= 1
            return
        else: dfs(i + 1, start)
    else:
        if (i - 1) < 0 or boards[i - 1] == start: return
        if type(boards[i - 1]) != str:
            result -= 1
            return
        else:
            dfs(i - 1, start)

for i in range(n):
    if type(boards[i]) == str:
        result += 1
        dfs(i, i)

print(result)