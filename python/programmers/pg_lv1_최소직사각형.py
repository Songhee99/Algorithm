def solution(sizes):
    sorted_sizes = [sorted(i) for i in sizes]

    maxRow = 0
    maxCol = 0
    for i in sorted_sizes:
        maxRow = max(i[0], maxRow)
        maxCol = max(i[1], maxCol)
        
    return maxRow * maxCol