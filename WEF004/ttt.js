window.onload = function() {



    console.log("Window Onload")



    let huPlayer = "O"
    let aiPlayer = "X";

    let huImg = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>`
    let aiImg = `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="140" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`
    let coverHuImg = `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="cover_bi_o" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>`
    let coverAiImg = `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="cover_bi_x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`
    let humTurn = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="turn_bi_o" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>`
    let aiTurn = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="turn_bi_x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`

    let huScore = 0;
    let aiScore = 0;
    let fc = 0;
    let turn = 1
    let state = "open"
    let origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    let cells = document.querySelectorAll('.cells');
    let modes = document.querySelector('#mode');
    let covers = document.querySelector('#cover');


    function play() {

        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i]
            cell.addEventListener('click', function() {
                if (typeof(origBoard[i]) === 'number' && turn % 2 == 1 && state == "open") {
                    //human move
                    cells[i].innerHTML = huImg
                    origBoard[i] = "O"
                    turn++;

                    document.querySelector('#Ai_Mark').style.borderBottom = `3px solid #12bdac`;
                    document.querySelector('#Human_Mark').style.borderBottom = `2px solid gray`;
                    document.querySelector('#turn').innerHTML = aiTurn;


                    if (winning(origBoard, huPlayer)) {
                        state = "closed"
                        huScore += 1
                        document.querySelector('#hu_score').innerHTML = huScore;
                        document.querySelector('#cover_img').innerHTML = coverHuImg;
                        document.querySelector('#win_text').innerHTML = "WINNER"
                        console.log('human win')
                        setTimeout(next, 1001)

                    } else if (emptyIndexes(origBoard).length == 0) {
                        state = "closed"
                        document.querySelector('#cover_img').innerHTML = coverHuImg;
                        document.querySelector('#cover_img').innerHTML += coverAiImg;
                        document.querySelector('#win_text').innerHTML = "DRAW!";
                        console.log('Draw')
                        setTimeout(next, 1001)

                    }

                    if (modes.value == "play_ai") {
                        //AI move
                        setTimeout(function() {
                            let bestSpot = minimax(origBoard, aiPlayer);
                            if (cells[bestSpot.index]) {
                                cells[bestSpot.index].innerHTML = aiImg;
                            }
                            document.querySelector('#Human_Mark').style.borderBottom = `3px solid #12bdac`;
                            document.querySelector('#Ai_Mark').style.borderBottom = `2px solid gray`;
                            document.querySelector('#turn').innerHTML = humTurn;
                            origBoard[bestSpot.index] = "X";
                            turn++;
                            if (winning(origBoard, aiPlayer)) {
                                aiScore += 1
                                state = "closed"
                                document.querySelector('#ai_score').innerHTML = aiScore;
                                document.querySelector('#cover_img').innerHTML = coverAiImg;
                                document.querySelector('#win_text').innerHTML = "WINNER"
                                console.log('ai win')
                                setTimeout(next, 1001)
                            }
                        }, 1000)

                    }
                    // console.log("index: " + bestSpot.index);
                    // console.log("function calls: " + fc);

                } else if (modes.value == "play_friend") {
                    //player2 move

                    if (typeof(origBoard[i]) === 'number' && turn % 2 == 0 && state == "open") {
                        cells[i].innerHTML = aiImg;
                        document.querySelector('#Human_Mark').style.borderBottom = `3px solid #12bdac`;
                        document.querySelector('#Ai_Mark').style.borderBottom = `2px solid gray`;
                        document.querySelector('#turn').innerHTML = humTurn;
                        origBoard[i] = "X"
                        turn++;
                        if (winning(origBoard, aiPlayer)) {
                            aiScore += 1
                            state = "closed"
                            document.querySelector('#ai_score').innerHTML = aiScore;
                            document.querySelector('#cover_img').innerHTML = coverAiImg;
                            document.querySelector('#win_text').innerHTML = "WINNER"
                            console.log('Player2 win')
                            setTimeout(next, 1001)
                        }
                    }
                }
            })
        }
    }





    modes.addEventListener('change', reset)



    function minimax(newBoard, player) {
        //add one to function calls
        fc++;

        //available spots
        let availSpots = emptyIndexes(newBoard);


        // checks for the terminal states such as win, lose, and tie and returning a value accordingly
        if (winning(newBoard, huPlayer)) {
            return { score: -10 };
        } else if (winning(newBoard, aiPlayer)) {
            return { score: 10 };
        } else if (availSpots.length === 0) {
            return { score: 0 };
        }

        // an array to collect all the objects
        let moves = [];

        // loop through available spots
        for (let i = 0; i < availSpots.length; i++) {
            //create an object for each and store the index of that spot that was stored as a number in the object's index key
            let move = {};
            move.index = newBoard[availSpots[i]];

            // set the empty spot to the current player
            newBoard[availSpots[i]] = player;

            //if collect the score resulted from calling minimax on the opponent of the current player
            if (player == aiPlayer) {
                let result = minimax(newBoard, huPlayer);
                move.score = result.score;
            } else {
                let result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }

            //reset the spot to empty
            newBoard[availSpots[i]] = move.index;

            // push the object to the array
            moves.push(move);
        }

        // if it is the computer's turn loop over the moves and choose the move with the highest score
        let bestMove;
        if (player === aiPlayer) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {

            // else loop over the moves and choose the move with the lowest score
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        // return the chosen move (object) from the array to the higher depth
        return moves[bestMove];
    }


    function emptyIndexes(board) {
        return board.filter(s => s != "O" && s != "X");
    }

    function winning(board, player) {
        if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
        ) {
            return true;
        } else {
            return false;
        }
    }

    document.querySelector('#button').onclick = reset



    function reset() {
        document.querySelector("#cover").style.visibility = "hidden";
        origBoard = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
        setTimeout(function() {
            fc = 0;
            turn = 1
            origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            huScore = 0;
            aiScore = 0;
            state = "open"
            document.querySelector('#ai_score').innerHTML = aiScore;;
            document.querySelector('#hu_score').innerHTML = huScore;
            for (let cell of cells) {
                cell.innerHTML = ""
            }
        }, 600)
    }



    function next() {
        document.querySelector("#cover").style.visibility = "visible";
        fc = 0;
        turn = 1
        origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        setTimeout(function() {
            for (let cell of cells) {
                cell.innerHTML = ""
            }
            state = "open"
            document.querySelector("#cover").style.visibility = "hidden";
        }, 2000)

    }

    play()


}