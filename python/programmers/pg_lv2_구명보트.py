def solution(people, limit):
    result = 0
    people.sort()
    
    for (idx, i) in enumerate(people):
        flag = False
        while idx != (len(people) - 1):
            result += 1
            if i + people.pop() <= limit:
                flag = True
                break
        if not flag and idx == (len(people) - 1): result += 1
    
    return result