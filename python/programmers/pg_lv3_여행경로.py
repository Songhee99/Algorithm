def solution(tickets):
    result = []
    airportDict = dict()
    for (a, b) in tickets:
        if a in airportDict: airportDict.get(a).append(b)
        else: airportDict[a] = [b]
        
    for (key, value) in airportDict.items():
        value.sort(reverse = True)
        
    stack = ["ICN"]
    while stack:
        if stack[-1] not in airportDict or len(airportDict.get(stack[-1])) == 0: result.append(stack.pop())
        else: stack.append(airportDict.get(stack[-1]).pop())
    
    result.reverse()
    return result