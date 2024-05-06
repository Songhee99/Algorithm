def solution(answers):
    person_1 = [1, 2, 3, 4, 5] 
    person_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    person_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    idx_1 = 0
    idx_2 = 0
    idx_3 = 0
    correct = [0, 0, 0, 0]

    for i in answers:
        if person_1[idx_1] == i: correct[1] += 1
        if idx_1 % len(person_1) == len(person_1) - 1: idx_1 = 0
        else: idx_1 += 1
        
        if person_2[idx_2] == i: correct[2] += 1
        if idx_2 % len(person_2) == len(person_2) - 1: idx_2 = 0
        else: idx_2 += 1
        
        if person_3[idx_3] == i: correct[3] += 1
        if idx_3 % len(person_3) == len(person_3) - 1: idx_3 = 0
        else: idx_3 += 1

    maxCount = max(correct)
    if correct.count(maxCount) == 1: return [correct.index(maxCount)]
    else: return list(filter(lambda x: correct[x] == maxCount, range(len(correct))))