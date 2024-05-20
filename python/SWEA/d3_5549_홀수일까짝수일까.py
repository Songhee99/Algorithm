T = int(input())
result = []

for t in range(1, T + 1):
    n = input()
    
    res = "Odd" if int(n[-1]) % 2 != 0 else "Even"

    result.append(f"#{t} {res}")
print("\n".join(result))