# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

n = int(sys.stdin.readline())
ingredients = list(map(int, sys.stdin.readline().split()))
maxIdx = ingredients.index(max(ingredients))

prevList = ingredients[:maxIdx + 1]
sortPrevList = sorted(prevList)

if prevList != sortPrevList: print(0)
else: 
	nextList = ingredients[maxIdx:]
	sortNextList = sorted(nextList, reverse = True)

	if nextList != sortNextList: print(0)
	else: print(sum(ingredients))
