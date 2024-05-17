T = int(input())
result = []

for t in range(1, T + 1):
    week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    str = input()

    result.append(f"#{t} {7 - week.index(str)}")
print("\n".join(result))