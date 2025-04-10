import heapq

def solution(operations):
    pq = []
    
    for oper in operations:
        prev, next = oper.split()
        next = int(next)
        
        if prev == "I": heapq.heappush(pq, next)
        else:
            if len(pq) == 0: continue
            if next == -1: heapq.heappop(pq)
            else:
                maxNum = max(pq)
                pq.remove(maxNum)
                heapq.heapify(pq)

    if len(pq) == 0: return [0, 0]
    else:
        maxNum = max(pq)
        minNum = heapq.heappop(pq)
        return [maxNum, minNum]