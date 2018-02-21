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
  const pleaseWait =
  'Great! Please wait while I get you set up...\n\n'
  + '#########################################\n'

  process.stdin.on('data', (chunk) => {
    if (chunk.toUpperCase() === 'YES\n') {
      process.stdout.write(pleaseWait);

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

function startNewGame() {
  process.stdout.write(`${GAME_BOARD}\n`);
  markBoxesForGame();
}

function notifyPlayerTurn(playerNum) {
  process.stdout.write(`PLAYER ${playerNum}'S TURN\n[select a number]\n`);

}

function markBoxesForGame() {
  let currentPlayer = 1;
  let currentMarker = 'X';
  let playing = true;

  while (playing) {
    // store the inputs of player 1
    // store the inputs of player 2
    // each time a player makes a move, switch to next player (may need to abstract to another func)
    // also switch markers

    playing = false;
  }
}

getUserInput();