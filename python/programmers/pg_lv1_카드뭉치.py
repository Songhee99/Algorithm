def solution(cards1, cards2, goal):
    idx1 = 0
    idx2 = 0
    goalIdx = 0
    
    while idx1 <= len(cards1) and idx2 <= len(cards2) and goalIdx < len(goal):
        if idx1 < len(cards1) and cards1[idx1] == goal[goalIdx]:
            idx1 += 1
            goalIdx += 1
        elif idx2 < len(cards2) and cards2[idx2] == goal[goalIdx]:
            idx2 += 1
            goalIdx += 1
        else: return "No"
    return "Yes"