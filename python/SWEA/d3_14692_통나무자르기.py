T = int(input())
result = []

for t in range(1, T + 1):
    n = int(input())

    winner = "Alice" if n % 2 == 0 else "Bob"

    result.append(f"#{t} {winner}")
print("\n".join(result))