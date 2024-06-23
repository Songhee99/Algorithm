import sys
import math

x, y = map(int, sys.stdin.readline().rstrip().split())
z = math.floor(y * 100 / x)

if z >= 99: print(-1)
else:
    wantedZ = (z + 1)
    newY = math.ceil(((wantedZ * x) - y * 100) / (100 - wantedZ))
    print(newY)