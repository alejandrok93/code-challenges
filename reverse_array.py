def reverseArray(a):
    reversedArr = []
    for i in range(len(a)-1, -1, -1):
        print('index', i)
        print('value',arr[i])
        reversedArr.append(str(a[i]))
    return " ".join(reversedArr)



arr = [6676, 3216, 4063, 8373, 423, 586, 8850, 6762]
print(reverseArray(arr))