from itertools import product

def solution(word):
    alphabet = ["A", "E", "I", "O", "U"]
    words = []
    for i in range(1, 6):
        curList = ["".join(w) for w in list(product(alphabet, repeat = i))]
        words += curList
        
    words.sort()
    
    return words.index(word) + 1