T = int(input())
result = []

for t in range(1, T + 1):
    n = input()
    juice = f"1/{n} "

    result.append(f"#{t} {juice * int(n)}".strip())
print("\n".join(result))