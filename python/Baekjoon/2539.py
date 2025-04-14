import sys

h, w = map(int, sys.stdin.readline().split())
sheets = int(sys.stdin.readline())
count = int(sys.stdin.readline())
locations = []
cols = []
maxH = -1
for _ in range(count):
    cH, cW = tuple(map(int, sys.stdin.readline().split()))
    locations.append((cH, cW))
    cols.append(cW)
    maxH = max(maxH, cH)
cols.sort()
start, end = maxH, max(h, w)
result = 0

def coverPaper(mid):
    curCount = 0
    idx = 0
    while idx < count and curCount < sheets:
        startW = cols[idx]
        endW = startW + mid - 1

        while idx < count and cols[idx] <= endW:
            idx += 1
        curCount += 1
    return idx == count

while start <= end:
    mid = (start + end) // 2
    if coverPaper(mid):
        result = mid
        end = mid - 1
    else: start = mid + 1

print(result)
