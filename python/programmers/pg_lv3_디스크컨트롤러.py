import heapq

def solution(jobs):
    n = len(jobs)
    avg = 0
    total = 0
    pq = []
    
    jobs.sort(key = lambda x: (x[0], x[1]))
    
    for (s, l) in jobs:
        s, l = int(s), int(l)
        
        while total < s and len(pq) > 0:
            curL, curS = heapq.heappop(pq)
            total += curL
            avg += (total - curS)

        heapq.heappush(pq, (l, s))
        if total <= s:
            curL, curS = heapq.heappop(pq)
            if total < curS: total += (curS - total)
            total += curL
            avg += (total - curS)

    while len(pq) > 0:
        curL, curS = heapq.heappop(pq)
        total += curL
        avg += (total - curS)
        
    return avg // n
