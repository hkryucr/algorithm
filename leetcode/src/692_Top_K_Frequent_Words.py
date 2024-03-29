'''
692. Top K Frequent Words
Medium

1913

146

Add to List

Share
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.

'''
import collections 
from collections import defaultdict

# class Solution(object):
#     def topKFrequent(self, words, k):
#         word_dict = defaultdict(lambda: 0)
#         for word in words:
#             word_dict[word] += 1
        
#         bucket = defaultdict(lambda: [])
#         for word in word_dict:
#             bucket[word_dict[word]].append(word)
        
#         result = []
        
#         for key in sorted(bucket, reverse=True):
#             result.extend(sorted(bucket[key]))

#         return result[:k]

class Solution(object):
    def topKFrequent(self, words, k):
        count = collections.Counter(words)
        heap = [(-freq, word) for word, freq in count.items()]
        heapq.heapify(heap)
        return [heapq.heappop(heap)[1] for _ in xrange(k)]
