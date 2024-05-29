const gameboard = (() => {
    const pageBoard = Array.from(document.querySelectorAll(".gameboard .square"));
    const squares = [];
    let numOfSquares = 9;

    //creating empty board


    for(let i = 0; i < numOfSquares; i++){
        const square = {location:i + 1, player:null};
        squares.push(square);
    }

    const occupySquare = (location,player) => {
        if(typeof location !== 'number'){
            console.log(`occupySquare: location value must be a "number"`);
            return;
        }

        if(location < 1 || location > 9){
            console.log(`occupySquare: "${location}" is not a valid square loaction`);
            return;
        }

        if(typeof player !== 'object' || ((!player.id) || (!player.name) || (!player.occupiedSquares))){
            console.log(`occupySquare: "${JSON.stringify(player)}" is not a valid player object`);
            return;
        }

        let currSquare = squares[location - 1];
        let pageSquare = pageBoard[location - 1]

        if(currSquare.player){
            console.log(`occupySquare: square location "${location}" is already occupied`);
            return;
        }
 
        currSquare.player = player;
        player.occupiedSquares.push(location);
        pageSquare.style.backgroundImage = "url(../images/X.png)";

    }


    let playerOne = {id: 1, name: 'player one', occupiedSquares:[]}
    pageBoard.forEach(element => {
        element.addEventListener("click", () => {
            gameboard.occupySquare(pageBoard.indexOf(element) + 1, playerOne);
        });
    });

    const displaySquares = () =>{
        console.log(squares);
        console.log(pageBoard);
    }

    return{occupySquare, displaySquares};

})();

const game = (() => {
    const pageBoard = Array.from(document.querySelectorAll(".gameboard .square"));

    // let keys = Object.keys(currPlayers);
    // personTurn = currPlayers[keys.length * Math.random() << 0];
    



})();

gameboard.displaySquares();

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

