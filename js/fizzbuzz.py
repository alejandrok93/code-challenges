def fizbuzz(num):
  string = ''
  if num % 3 == 0:
    string = string + 'Fizz'
  elif num % 5 == 0:
    string = string + "Buzz"
  elif num % 3 == 0 and num % 5 == 0:
    string = string + 'Fizz Buzz'
return string
  