def solution(survey, choices):
    result = ""
    answerDict = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0,
    }
    
    for idx, i in enumerate(choices):
        if i > 4: answerDict[survey[idx][1]] += i - 4
        else: answerDict[survey[idx][0]] += 4 - i
        
    result += "T" if answerDict["R"] < answerDict["T"] else "R"
    result += "F" if answerDict["C"] < answerDict["F"] else "C"    
    result += "M" if answerDict["J"] < answerDict["M"] else "J"    
    result += "N" if answerDict["A"] < answerDict["N"] else "A"    
    
    return result