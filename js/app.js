const gameboard = (() => {
    board = [];
    let boardWidth = 3;

    for(let i = 0; i < (boardWidth ** 2); i++){
        const squareState = {
            player1: false,
            player2: false
        };

        const square = {
            state: squareState
        }

        board.push(square);
    }

    const fillSquare = (squareLocation, state) => {

    };

    return {fillSquare};
})();

const players = (() => {
    let player1;
    let player2;

});