import sys

numList = list(map(int, sys.stdin.readline().strip().split()))

def ascendingList(numList):
    for (idx, i) in enumerate(numList):
        if i != (idx + 1): return False
    return True

def descendingList(numList):
    for (idx, i) in enumerate(numList):
        if i != (8 - idx): return False
    return True

if numList[0] == 1:
    if ascendingList(numList): print("ascending")
    else: print("mixed")
elif numList[0] == 8:
    if descendingList(numList): print("descending")
    else: print("mixed")
else: print("mixed")