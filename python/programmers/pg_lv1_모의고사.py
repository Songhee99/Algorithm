def solution(answers):
    person_1 = [1, 2, 3, 4, 5] 
    person_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    person_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    correct = [0, 0, 0, 0]

    for idx, i in enumerate(answers):
        if person_1[idx % len(person_1)] == i: correct[1] += 1
        
        if person_2[idx % len(person_2)] == i: correct[2] += 1
        
        if person_3[idx % len(person_3)] == i: correct[3] += 1

    maxCount = max(correct)
    
    return list(filter(lambda x: correct[x] == maxCount, range(len(correct))))