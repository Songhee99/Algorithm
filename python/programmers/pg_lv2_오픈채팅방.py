def solution(record):
    result = []
    history = []
    uidDict = dict()
    
    for i in record:
        splitI = i.split()
        
        if splitI[0] == "Enter":
            history.append([splitI[0], splitI[1]])
            uidDict[splitI[1]] = splitI[2]
        elif splitI[0] == "Change": uidDict[splitI[1]] = splitI[2]
        else: history.append([splitI[0], splitI[1]])
        
    for j in history:
        if j[0] == "Enter": result.append("{}님이 들어왔습니다.".format(uidDict.get(j[1])))
        else: result.append("{}님이 나갔습니다.".format(uidDict.get(j[1])))
        
    return result