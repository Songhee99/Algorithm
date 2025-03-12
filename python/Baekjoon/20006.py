import sys

p, m = map(int, sys.stdin.readline().split())
players = []
for _ in range(p):
    l, n = sys.stdin.readline().split()
    players.append((int(l), n))
groups = []
result = []

for l, n in players:
    flag = False
    for i in range(len(groups)):
        mid, g = groups[i]
        if (mid - 10) <= l and l <= (mid + 10) and len(g) < m:
            g.append((l, n))
            flag = True
            break
    if not flag: groups.append((l, [(l, n)]))

for (mid, g) in groups:
    g.sort(key = lambda x: x[1])
    if len(g) == m: result.append("Started!")
    else: result.append("Waiting!")
    for l, n in g: result.append(f"{l} {n}")

print("\n".join(result))