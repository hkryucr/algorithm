'''
1105. Filling Bookcase Shelves

We have a sequence of books: the i-th book has thickness books[i][0] and height books[i][1].

We want to place these books in order onto bookcase shelves that have total width shelf_width.

We choose some of the books to place on this shelf (such that the sum of their thickness is <= shelf_width), then build another level of shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down.  We repeat this process until there are no more books to place.

Note again that at each step of the above process, the order of the books we place is the same order as the given sequence of books.  For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.

Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

'''

class Solution(object):
    def minHeightShelves(self, books, shelf_width):        
        dp = [0] * (len(books)+1)
        
        for i in range(1, len(dp)):
            book_idx = i-1
            if i == 1:
                dp[i] = books[book_idx][1]
                continue
                
            width, height = books[book_idx]
            dp[i] = dp[i-1] + height
            
            j = i-1 # starts from 1
            
            while j > 0 and (width + books[j-1][0]) <= shelf_width:
                book_idx = j-1
                cur_width, cur_height = books[book_idx]
                width += cur_width 
                
                height = max(height, cur_height)
                dp[i] = min(dp[i], dp[j-1] + height)
                j -= 1  
            
        return dp[-1]
