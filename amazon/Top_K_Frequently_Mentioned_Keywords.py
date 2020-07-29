'''
Given a list of reviews, a list of keywords and an integer k. Find the most popular k keywords in order of most to least frequently mentioned.

The comparison of strings is case-insensitive.
Multiple occurances of a keyword in a review should be considred as a single mention.
If keywords are mentioned an equal number of times in reviews, sort alphabetically.

Example 1:

Input:
k = 2
keywords = ["anacell", "cetracular", "betacellular"]
reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]

Output:
["anacell", "betacellular"]

Explanation:
"anacell" is occuring in 2 different reviews and "betacellular" is only occuring in 1 review.

Example 2:
Input:
k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]

Output:
["betacellular", "anacell"]

Explanation:
"betacellular" is occuring in 3 different reviews. "anacell" and "deltacellular" are occuring in 2 reviews, but "anacell" is lexicographically smaller.
'''

from collections import defaultdict
import re 
import heapq

def topKFrequent(k, keywords, reviews):
    word_set = set(keywords)
    word_dict = defaultdict(lambda: 0)

    for review in reviews:    
        review_words = review.split(" ")
        review_set = set()
        for word in review_words:
            new_word = re.sub("[^a-zA-Z]", "", word)
            review_set.add(new_word.lower())
        for word in review_set:
            if word in word_set:
                word_dict[word] += 1 

    heap = []

    for key in word_dict:
        heapq.heappush(heap, (-word_dict[key], key))
    res = []
    while len(res) != k and len(heap) > 0:
        cur = heapq.heappop(heap)
        res.append(cur[1])

    return res

k = 2
keywords = ["anacell", "cetracular", "betacellular"]
reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]
# print topKFrequent(k, keywords, reviews)


k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]

char = "ab)c abc("
newchar = char.replace('[^a-z0-9]', '')

print re.sub('[^a-z0-9]', '', char)

print char
print newchar