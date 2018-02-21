process.stdin.setEncoding('utf8');

const GAME_NAME = `
 _______  ___  _______   _______  _______  _______   _______  _______  _______
|       ||   ||       | |       ||   _   ||       | |       ||       ||       |
|_     _||   ||       | |_     _||  |_|  ||       | |_     _||   _   ||    ___|
  |   |  |   ||       |   |   |  |       ||       |   |   |  |  | |  ||   |___
  |   |  |   ||      _|   |   |  |       ||      _|   |   |  |  |_|  ||    ___|
  |   |  |   ||     |_    |   |  |   _   ||     |_    |   |  |       ||   |___
  |___|  |___||_______|   |___|  |__| |__||_______|   |___|  |_______||_______|
`

const GAME_BOARD = `
   .______.______.______.
   |      |      |      |
   |   1  |   2  |   3  |
   |______|______|______|
   |      |      |      |
   |   4  |   5  |   6  |
   |______|______|______|
   |      |      |      |
   |   7  |   8  |   9  |
   |______|______|______|
`

process.stdout.write('Would you like to play a game? [YES/NO]\n');
