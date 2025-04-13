def solution(skill, skill_trees):
    result = 0
    skillDict = {i:idx for (idx, i) in enumerate(skill)}
    
    for skillTree in skill_trees:
        idx = 0
        for j in skillTree:
            if j not in skillDict: continue
            elif skillDict[j] != idx: break
            else: idx += 1
        else: result += 1
    return result