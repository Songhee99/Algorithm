def solution(schedules, timelogs, startday):
    n = len(schedules)
    result = 0
    
    for i in range(n):
        target = int(schedules[i]) + 10
        if target % 100 >= 60: target += 40
        
        flag = True
        curday = startday
        for j in timelogs[i]:
            curday += 1
            if (curday - 1) % 7 == 6 or (curday - 1) % 7 == 0: continue
            if int(j) > target:
                flag = False
                break
        
        if flag: result += 1
    
    return result
        