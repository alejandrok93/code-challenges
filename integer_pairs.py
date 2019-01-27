
#Write a function integerPairs to find and print out all pairs of integers within an input array which sum up to a specified input value k.
def integer_pairs(arr, k):
  numbers = {}
  result = []
  for i in range(0, len(arr)):
    if k-arr[i] in numbers:
      result.append(str(arr[i]) +  " " + str(k-arr[i]))
    else:
      numbers[arr[i]] = i + 1
  return result



# Brute force , flawed solution
  # for number in arr:
  #   for i in range(0,len(arr)):
  #     if number + arr[i] == k:
  #       numbers.append(str(number) + " " + str(arr[i]))



arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(integer_pairs(arr, 11))