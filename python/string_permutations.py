#geeksforgeeks.com answer

def string_permutations(a,left,right):
  if left == right:
    print(toString(a))

  else:
    for i in range(left, right+1):
      a[left], a[i] = a[i], a[left]
      string_permutations(a, left+1, right)
      a[left], a[i] = a[i], a[left]


def toString(List):
  return ''.join(List)



str = 'log'
print(string_permutations(list(str), 0, len(str)-1))
# def string_permutations(str):
#   if len(str) == 1:
#     return str

#   if len(str) == 2:
#     a=str[0]
#     b=str[1]
#     return a+b, b+a

#   if len(str) == 3:
#     return string_permutations(str) + str[2]

# print(string_permutations('wit'))




# print(str)
#   print(len(str))
#   perms = []
#   for i in range(0, len(str)):
#     print(str[i])
#     for j in range(i+1, len(str)-1):
#       perms.append(str[j:])
#   return perms