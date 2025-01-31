import heapq

def solution(k, score):
    result = []
    pq = []
    
    for i in score:
        heapq.heappush(pq, i)
        
        if len(pq) > k: heapq.heappop(pq)
        result.append(pq[0])
    
    return result