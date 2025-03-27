import sys
input = sys.stdin.readline

n, score, p = map(int, input().split())
ps = list(map(int, input().split()))
ps.append(score)
ps.sort(reverse = True)

if score == ps[-1] and n + 1 > p: print(-1)
else:
    result = -1
    for (idx, s) in enumerate(ps[:p]):
        if s == score:
            result = idx + 1
            break
    print(result)
