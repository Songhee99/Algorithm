t = int(input())
result = []

daysDict = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
}

for k in range(1, t+1):
    prevMonth, prevDay, nextMonth, nextDay = map(int, input().split())
    totalDay = 0

    if prevMonth == nextMonth: totalDay = nextDay - prevDay + 1
    elif prevMonth == nextMonth - 1: totalDay = (daysDict[prevMonth] - prevDay + 1) + nextDay
    else:
        for i in range(prevMonth + 1, nextMonth):
            totalDay += daysDict[i]
        totalDay += (daysDict[prevMonth] - prevDay + 1) + nextDay

    result.append(f"#{k} {totalDay}")

print("\n".join(result))