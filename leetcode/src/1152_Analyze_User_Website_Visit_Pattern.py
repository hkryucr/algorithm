
'''
1152. Analyze User Website Visit Pattern
We are given some website visits: the user with name username[i] visited the website website[i] at time timestamp[i].

A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  
(The websites in a 3-sequence are not necessarily distinct.)

Find the 3-sequence visited by the largest number of users. If there is more than one solution, 
return the lexicographically smallest such 3-sequence.

Example 1:
Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], 
timestamp = [1,2,3,4,5,6,7,8,9,10], 
website = ["home","about","career","home","cart","maps","home","home","about","career"]
Output: ["home","about","career"]
Explanation: 
The tuples in this example are:
["joe", 1, "home"]
["joe", 2, "about"]
["joe", 3, "career"]
["james", 4, "home"]
["james", 5, "cart"]
["james", 6, "maps"]
["james", 7, "home"]
["mary", 8, "home"]
["mary", 9, "about"]
["mary", 10, "career"]

{home: 3, about: 2, career: 2}

user_visited_dict = { username: set([name of websties])}
number_visited_websited_by_users = {home: 1, about: 1, }

The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.
 
Note:
3 <= N = username.length = timestamp.length = website.length <= 50
1 <= username[i].length <= 10
0 <= timestamp[i] <= 10^9
1 <= website[i].length <= 10
Both username[i] and website[i] contain only lowercase characters.
It is guaranteed that there is at least one user who visited at least 3 websites.
No user visits two websites at the same time.
'''
from collections import defaultdict

class Solution:
    def mostVisitedPattern(self, username: List[str], timestamp: List[int], website: List[str]) -> List[str]:
        user_dict = defaultdict(lambda: list())
        for i, name in enumerate(username):
            user_dict[name].append((timestamp[i], website[i]))
        
        sequence_dict = defaultdict(lambda: 0)

        for user, user_list in user_dict.items():
            if len(user_list) < 3: continue
            arr = sorted(user_list)
            visited = set()
            for i in range(0, len(arr) - 2):
                for j in range(i+1, len(arr) - 1):
                    for k in range(j+1, len(arr)):
                        cur_tuple = (arr[i][1], arr[j][1], arr[k][1])
                        if cur_tuple in visited:
                            continue
                        visited.add(cur_tuple)
                        sequence_dict[cur_tuple] += 1

        return sorted(sequence_dict, key=lambda x: (-sequence_dict[x], x))[0]
 
                















