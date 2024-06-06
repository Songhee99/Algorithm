import sys

nA, nB = sys.stdin.readline().rstrip().split()
a = set(list(sys.stdin.readline().rstrip().split()))
b = set(list(sys.stdin.readline().rstrip().split()))

result = list(a - b)

if len(result) == 0: print(0)
else:
    print(len(result))
    numResult = sorted(map(int, result))
    print(" ".join(list(map(str, numResult))))
