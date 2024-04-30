def solution(slice, n):
    dividing, remain = divmod(n, slice)
    return dividing if remain == 0 else dividing + 1