def solution(n, arr1, arr2):
    arr1Map = [(str(bin(i)[2:])).zfill(n) for i in arr1]
    arr2Map = [(str(bin(i)[2:])).zfill(n) for i in arr2]
    newMap = []

    for i in range(n):
        curLine = ""
        for j in range(n):
            if arr1Map[i][j] == arr2Map[i][j]:
                curWord = " " if arr1Map[i][j] == "0" else "#"
                curLine += curWord
            else: curLine += "#"
        newMap.append(curLine)
    return newMap