def solution(price, money, count):
    sigmaSum = (count * (count + 1)) // 2
    totalMoney = sigmaSum * price

    return totalMoney - money if totalMoney > money else 0