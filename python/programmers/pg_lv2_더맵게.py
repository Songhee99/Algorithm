import heapq

def solution(scoville, K):
    result = 0
    heapq.heapify(scoville)
    
    while len(scoville) > 1:
        prev = heapq.heappop(scoville)
        next = heapq.heappop(scoville)
        
        if prev < K:
            cur = prev + next * 2
            heapq.heappush(scoville, cur)
            result += 1
        else:
            heapq.heappush(scoville, prev)
            heapq.heappush(scoville, next)
            break
    
    return -1 if scoville[0] < K else result