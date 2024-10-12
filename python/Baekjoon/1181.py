import sys

n = int(sys.stdin.readline().strip())
wordsSet = set()
for _ in range(n):
    wordsSet.add(sys.stdin.readline().strip())

wordsList = sorted(list(wordsSet), key = lambda x: (len(x), x))

print("\n".join(wordsList))
