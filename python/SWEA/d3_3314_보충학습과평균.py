T = int(input())
result = []

for t in range(1, T + 1):
    students = list(map(int, input().split()))
    studNum = len(students)
    goodStud = [i for i in students if i >= 40]
    badStud = studNum - len(goodStud)
    studSum = sum(goodStud) + 40 * badStud

    result.append(f"#{t} {studSum // studNum}")
print("\n".join(result))