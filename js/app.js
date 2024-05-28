const gameboard = (() => {
    const squares = [];
    const emptySquares = [];
    let numOfSquares = 9;

    //creating empty board

    for(let i = 0; i < numOfSquares; i++){
        const square = {player:null};
        emptySquares.push(square);
        squares.push(square);
    }

    const occupySquare = (location,player) => {
        if(typeof location !== 'number'){
            console.log(`occupySquare: location value must be a "number"`)
        }

        if(location > 9){
            console.log(`occupySquare: "${location}" is not a valid square loaction`);
            return;
        }

        let arrayPos = location - 1;
        let currSquare = squares[arrayPos];
        if(currSquare.player){
            console.log(`occupySquare: square location "${location}" is already occupied`);
            return;
        }

        emptySquares.splice(arrayPos,1);
        currSquare.player = player;
    }

    const displaySquares = () =>{
        console.log(squares);
        console.log(emptySquares);
    }

    return{occupySquare, displaySquares};

})();

// const bot = (() => {
//      let randSquarePos = (gameboard.avaliableSquares().length * Math.random()) << 0;
//      let randSquare = gameboard.avaliableSquares()[randSquarePos];
//      let selectedSquare = Array.ine

//      console.log(randSquare);
// })();

const players = (() => {
    let playerOne = {id: 1, name: 'player one', occupiedSquares:[]};
    let playerTwo = {id: 2, name:'player two',occupiedSquares:[]};

    return{playerOne,playerTwo};
})();

    // const game = (() => {
    //     const currTurn;
    //     while(true)P

    // })();

