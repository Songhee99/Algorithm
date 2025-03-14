import sys

n, r, c = map(int, sys.stdin.readline().strip().split())
result = 0

def checkPart(total, cN, col, row):
    if cN == 1:
        global result
        if r >= col + 1:
            if c >= row + 1: result = total + 3
            else: result = total + 2
        else:
            if c >= row + 1: result = total + 1
            else: result = total
        return

    half = 2 ** (cN - 1)

    if r >= col + half:
        if c >= row + half:
            curTotal = total + (4 ** (cN - 1)) * 3
            checkPart(curTotal, cN - 1, col + half, row + half)
        else:
            curTotal = total + (4 ** (cN - 1)) * 2
            checkPart(curTotal, cN - 1, col + half, row)
    else:
        if c >= row + half:
            curTotal = total + (4 ** (cN - 1)) * 1
            checkPart(curTotal, cN - 1, col, row + half)
        else:
            checkPart(total, cN - 1, col, row)

checkPart(0, n, 0, 0)
print(result)