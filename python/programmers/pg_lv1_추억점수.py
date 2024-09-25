def solution(name, yearning, photo):
    result = []
    memories = dict()
    
    for i in range(len(name)):
        memories[name[i]] = yearning[i]
    
    for j in photo:
        sum = 0
        for k in j:
            if k in memories: sum += memories.get(k)
        result.append(sum)
        
    return result