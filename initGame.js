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


function getUserInput() {
  process.stdin.on('data', (chunk) => {
    if (chunk.toUpperCase() === 'YES\n') {
      process.stdout.write(`Great! Please wait while I get you set up...\n\n#########################################\n`);

      setTimeout(() => {
        process.stdout.write(GAME_NAME + '\n');
        startNewGame();
      }, 1500);
    } else if (chunk.toUpperCase() === 'NO\n') {
      process.stdout.write('Aw, maybe next time then.\n');
    } else {
      process.stdout.write('Please answer yes or no\n');
    }
  });
}

getUserInput();