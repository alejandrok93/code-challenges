def magic_index(arr, low , high):
  # for i in range(0, len(arr)): -> Runtime: # O(n)
  #   if arr[i] == i:
  #     return arr[i]
  print(arr)
  print('low', low)
  print('high', high)
  if high >= low:
    mid = (low + high) // 2
    if mid is arr[mid]:
      return mid
    if mid > arr[mid]:
      return magic_index(arr, mid+1, high)
    else:
      return magic_index(arr, low, mid-1)
  return -1

arr = [-1, 1,2,3,4,5, 7, 8, 9]
# arr = [-10, -1, 0, 3, 10, 11, 30, 50, 100] 

print(magic_index(arr, 0, len(arr)-1))