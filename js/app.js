const gameboard = (() => {
    const squares = [];
    let boardWidth = 3;

    for(let i = 0; i < (boardWidth**2); i++){
        const square = {player:null};
        squares.push(square);
    }

    const occupySquare = (location,player) => {
        squares[location].player = player;
    }

    const log = () =>{
        console.log(squares);
    }

    return{occupySquare, log};

})();

const players = (() => {
    let playerOne = {id: 1, name: 'player one'};
    let playerTwo = {id: 2, name:'player two'};

    return{playerOne,playerTwo};
})();

