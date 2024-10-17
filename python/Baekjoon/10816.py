import sys
from collections import Counter

n = int(sys.stdin.readline().strip())
cards = list(map(int, sys.stdin.readline().strip().split()))
m = int(sys.stdin.readline().strip())
mNums = list(map(int, sys.stdin.readline().strip().split()))

cardsDict = Counter(cards)
result = [cardsDict.get(i, 0) for i in mNums]

print(" ".join(map(str, result)))