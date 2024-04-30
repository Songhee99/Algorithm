def solution(rsp):
    result = ""
    winMethod = dict()
    winMethod["0"] = "5"
    winMethod["2"] = "0"
    winMethod["5"] = "2"

    for i in rsp:
        result += winMethod[i]
        
    return result