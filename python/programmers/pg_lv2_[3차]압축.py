def solution(msg):
    n = len(msg)
    result = []
    dictionary = dict()
    for a in range(1, 27):
        alp = chr(64 + a)
        dictionary[alp] = a
    
    idx = 0
    while idx < n:
        curStr = msg[idx]
        idx += 1
        if idx == n:
            result.append(dictionary[curStr])
            break
        nextStr = curStr + msg[idx]
        
        while nextStr in dictionary:
            curStr = nextStr
            idx += 1
            if idx == n: break
            nextStr = curStr + msg[idx]
        
        result.append(dictionary[curStr])
        dictionary[nextStr] = len(dictionary) + 1
    
    return result