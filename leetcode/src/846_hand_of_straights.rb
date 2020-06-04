# 846. Hand of Straights

# Alice has a hand of cards, given as an array of integers.

# Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

# Return true if and only if she can.

 

# Example 1:

# Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
# Output: true
# Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].
# Example 2:

# Input: hand = [1,2,3,4,5], W = 4
# Output: false
# Explanation: Alice's hand can't be rearranged into groups of 4.
 

# Constraints:

# 1 <= hand.length <= 10000
# 0 <= hand[i] <= 10^9
# 1 <= W <= hand.length
# Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

# @param {Integer[]} hand
# @param {Integer} w
# @return {Boolean}
def is_n_straight_hand(hand, w)
    return false if(hand.length % w != 0)
    hash = {}
    
    hand.each do |ele|
        hash[ele] = 0 if hash[ele] == nil
        hash[ele] += 1
    end
    
    # hash_keys = hash.keys
    hand = hand.sort{ |a, b| a <=> b }

    hand.each_with_index do |ele, idx1|
        next if(hash[ele] == 0)

        (ele...(ele+w)).each do |ele2|
            return false if(hash[ele2] == 0 || hash[ele2] == nil)
            hash[ele2] -= 1
        end
    end
    return true
end
