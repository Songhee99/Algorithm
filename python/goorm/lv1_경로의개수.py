# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
from functools import reduce

n = sys.stdin.readline()
bList = list(map(int, sys.stdin.readline().split()))

print(reduce(lambda acc, cur: acc * cur, bList))