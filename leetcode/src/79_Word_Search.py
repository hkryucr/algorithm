'''
79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

'''

class Solution(object):
    def exist(self, board, word):
        for i, row in enumerate(board):
            for j, cur_char in enumerate(row):
                if cur_char == word[0]:
                    visited = set()
                    visited.add((i,j))
                    if self.traverse(i, j, board, word, 0, visited) == True:
                        return True
        return False

    def traverse(self, x, y, board, word, word_idx, visited):
        if board[x][y] != word[word_idx]:
            return False
        if board[x][y] == word[word_idx] and word_idx == len(word) - 1:
            return True
        for (dir_x, dir_y) in [(0,1), (0,-1), (1,0),(-1,0)]:
            cur_x, cur_y = dir_x + x, dir_y + y
            if 0 <= cur_x < len(board) and 0 <= cur_y < len(board[0]) and not (cur_x, cur_y) in visited:
                visited.add((cur_x, cur_y))
                if self.traverse(cur_x, cur_y, board, word, word_idx+1, visited) == True:
                    return True
                visited.remove((cur_x, cur_y))

        return False
