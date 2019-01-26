# You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

def counting_votes(votes):
  candidates = {}
  winner = ''
  max_votes = 0
  for name in votes:
    if name in candidates:
      candidates[name] += 1
    elif name not in candidates:
      candidates[name] = 1

    if candidates[name] >= max_votes:
      max_votes = candidates[name]
      winner = name
      # if candidates[name] == candidates[winner] and name < winner:
        
        
  print(candidates)
  return winner



votes = ['mary', 'veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael']

print(counting_votes(votes))  #should return 'michael'