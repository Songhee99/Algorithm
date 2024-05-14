def solution(participant, completion):
    partSet = set(participant)
    compSet = set(completion)
    
    if len(partSet) != len(compSet): return "".join(list(partSet - compSet))
    else:
        partDict = {}
        compDict = {}
        
        for i in participant:
            try: partDict[i] += 1
            except: partDict[i] = 1
        
        for i in completion:
            try: compDict[i] += 1
            except: compDict[i] = 1
        
        result = filter(lambda x: partDict[x] != compDict[x], partSet)
        return "".join(list(result))