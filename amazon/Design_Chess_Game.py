# '''
# Clarifying Questions
# - How many human players are playing the game? 
# - Do we also need an AI machine?
#     - do we care about the game strategy
# - How do we want to display ? what would be the right graphical environment?
# - Do we want to support network gamining?
#   ** websocket for the game room // talk about this later


Game Design

CLASSES
1) Game
    - instance_variables
        @players: list[black/ white]
        @current_player
        @board
        
    - methods
        # @move??
        # + display
        + run 
          while not game_over:
            takes in two inputs
            board.move(cur_pos, next_pos):
                @current_player
            + switch_turn

2) Board
    - instance_variables
      @grid: 2d array (-> Piece Instances)
    - methods
      - valid_moves(i, j): return an array of possible positions
      - move(cur_pos, next_pos): true/ false
      - checkmate: 
      - game_over: return true if in checkmate & no valid moves
      
    - #

3) Piece
    - instance_variables
        @type: different type
        @move_type: horizontal/ diagonal/ vertical
        @color: p1 or p2

4) Player
    - instance_variables
        @name
    - methods