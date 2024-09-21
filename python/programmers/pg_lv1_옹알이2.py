def solution(babbling):
    words = {"aya", "ye", "woo", "ma"}
    count = 0
    
    for i in babbling:
        if i in words: 
            count += 1
            continue
        else:
            tmpList = []
            tmpIdx = 0
            curState = True
            while tmpIdx < len(i):
                tmpWord = ""
                if tmpList: tmpWord = tmpList.pop()
                
                if i[tmpIdx:tmpIdx + 3] in words:
                    if tmpWord == i[tmpIdx:tmpIdx + 3]: 
                        curState = False
                        break
                    tmpList.append(i[tmpIdx:tmpIdx + 3])
                    tmpIdx += 3
                    continue
                elif i[tmpIdx:tmpIdx + 2] in words:
                    if tmpWord == i[tmpIdx:tmpIdx + 2]: 
                        curState = False
                        break
                    tmpList.append(i[tmpIdx:tmpIdx + 2])
                    tmpIdx += 2
                    continue
                else:
                    curState = False
                    break
            if curState == True: count += 1
            
    return count
            