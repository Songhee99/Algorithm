import sys
input = sys.stdin.readline

m = int(input())
events = list(map(int, input().split()))
wants = list(map(int, input().split()))
result = []

def check(mid, event, want):
    total = mid
    gift = mid // event
    total += gift
    remain = (mid % event) + gift

    while remain >= event and total < want:
        newGift = remain // event
        total += newGift
        remain = (remain % event) + newGift

    return total >= want

for i in range(m):
    event = events[i]
    want = wants[i]

    if want == 0:
        result.append("0")
        continue
    elif event == 1:
        result.append("1")
        continue
    elif event == 0 or event >= want:
        result.append(f"{want}")
        continue

    count = want
    start = 1
    end = want * 2

    while start <= end:
        mid = (start + end) // 2

        if check(mid, event, want):
            count = mid
            end = mid - 1
        else: start = mid + 1

    result.append(str(count))
print(" ".join(result))
