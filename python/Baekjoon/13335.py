import sys
from collections import deque

n, w, l = map(int, sys.stdin.readline().strip().split())
input = list(map(int, sys.stdin.readline().strip().split()))

time = 0
total = 0
trucks = deque(input)
queue = deque([0] * w)

while queue:
    time += 1
    total -= queue.popleft()

    if len(trucks) == 0: continue

    if total + trucks[0] <= l:
        truck = trucks.popleft()
        queue.append(truck)
        total += truck
    else: queue.append(0)

print(time)