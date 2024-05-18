T = int(input())
result = []

for t in range(1, T + 1):
    n = int(input())
    curSpeed = 0
    totalDistance = 0

    for i in range(n):
        case = input()
        if len(case) == 1:
            totalDistance += curSpeed
            continue
            
        state, value = map(int, case.split())

        if state == 1: curSpeed += value
        elif state == 2: curSpeed -= value

        if curSpeed < 0: curSpeed = 0

        totalDistance += curSpeed
    result.append(f"#{t} {totalDistance}")
print("\n".join(result))