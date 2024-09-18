def solution(s):
    sArr = s.split(" ")
    result = ""
    
    for i in sArr:
        for (idx, j) in enumerate(i):
            if idx % 2 == 0: result += j.upper()
            else: result += j.lower()
                
        result += " "
    return result[:-1]