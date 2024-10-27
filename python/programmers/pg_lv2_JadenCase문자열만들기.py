def solution(s):
    result = []
    tmpStr = ""
    
    for i in s:
        if i == " ": 
            result.append(tmpStr)
            tmpStr = ""
            result.append(" ")
        elif len(tmpStr) == 0: tmpStr += i.upper()
        else: tmpStr += i.lower()
        
    if len(tmpStr) != 0: result.append(tmpStr)
    
    return "".join(result)