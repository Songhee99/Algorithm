import math

T = int(input())
result = []
grade = ["A+", "A0", "A-", "B+", "B0", "B-", "C+", "C0", "C-", "D0"]
gradeDict = dict()

for i in range(1, 11):
    gradeDict[i] = grade[i - 1]

for t in range(T):
    [n, k] = map(int, input().split())
    students = []
    cutline = n // 10
    for i in range(n):
        [mid, final, homework] = map(int, input().split())
        total = (mid * 0.35) + (final * 0.45) + (homework * 0.2)
        students.append(total)

        if i == k - 1: findNum = total

    students.sort(reverse = True)

    rank = students.index(findNum) + 1
    percent = math.ceil(rank / cutline)

    result.append(f"#{t + 1} {gradeDict.get(percent)}")

print("\n".join(result))