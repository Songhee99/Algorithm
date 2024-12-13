from collections import deque

def solution(bridge_length, weight, truck_weights):
    result = 0
    bridge = deque([0] * bridge_length)
    trucks = deque(truck_weights)
    curWeight = 0
    
    while trucks or curWeight > 0:
        result += 1
        curWeight -= bridge.popleft()
        
        if trucks:
            if curWeight + trucks[0] <= weight:
                inTruck = trucks.popleft()
                bridge.append(inTruck)
                curWeight += inTruck
            else: bridge.append(0)

    return result