import sys

n = int(sys.stdin.readline().rstrip())
stresses = [tuple(map(int, sys.stdin.readline().rstrip().split())) for _ in range(n)]
stack = [stresses[0]]
total = 0
result = ""

for i in range(1, n):
    pA, pB = stack[-1]
    nA, nB = stresses[i]

    if nA > pB: stack.append((nA, nA))
    elif nB < pA: stack.append((nB, nB))
    elif nA >= pA:
        if nB >= pB: stack.append((nA, pB))
        else: stack.append((nA, nB))
    else:
        if nB <= pB: stack.append((pA, nB))
        else: stack.append((pA, pB))

prevNum = 0
for (a, b) in stack[::-1]:
    if not result:
        prevNum = a
        curNum = a
    else:
        if a <= prevNum and prevNum <= b: curNum = prevNum
        elif abs(prevNum - a) < abs(prevNum - b): curNum = a
        else: curNum = b

    total += abs(prevNum - curNum)
    prevNum = curNum
    result = "\n" + f"{curNum}" + result

result = f"{total}" + result
print(result)
