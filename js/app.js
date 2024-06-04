// const bot = (() => {
//      let randSquarePos = (gameboard.avaliableSquares().length * Math.random()) << 0;
//      let randSquare = gameboard.avaliableSquares()[randSquarePos];
//      let selectedSquare = Array.ine

//      console.log(randSquare);
// })();

const players = (() => {
    let playerOne = {id: 1, name: 'player one', occupiedSquares:[], icon:'./images/O.png'};
    let playerTwo = {id: 2, name:'player two',occupiedSquares:[], icon: './images/X.png'};
    let currPlayer;

    return{playerOne,playerTwo};
})();

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

        if(typeof player !== 'object' || ((!player.id) || (!player.name) || (!player.occupiedSquares) || (!player.icon))){
            console.log(`occupySquare: "${JSON.stringify(player)}" is not a valid player object`);
            return;
        }

        let icon = document.createElement('img');
        let currSquare = squares[location - 1];
        let pageSquare = pageBoard[location - 1]

        if(currSquare.player){
            console.log(`occupySquare: square location "${location}" is already occupied`);
            return;
        }
        icon.src = player.icon;
        currSquare.player = player;
        player.occupiedSquares.push(location);
        pageSquare.appendChild(icon);
    }
    
    const checkWin = (player) => {
        if(typeof player !== 'object' || ((!player.id) || (!player.name) || (!player.occupiedSquares) || (!player.icon))){
            console.log(`checkWin: "${JSON.stringify(player)}" is not a valid player object`);
            return;
        };

        const occupant = (player,square) =>{
            return JSON.stringify(player) === JSON.stringify(square.player);
        }

        const checkLine = (step,jumpNum) =>{
            let i = 0;
            let result
            while((i + (step * 2)) <= squares.length){
                result = occupant(player, squares[i]) && occupant(player, squares[i+step]) && occupant(player, squares[i+(step*2)]);
                i += jumpNum;
                if(result) return result;
            }
        }

        const checkHor = () => {
            let horStep = 1;
            let rowJump = 3;
            return checkLine(horStep, rowJump)
        }

        const checkVer = () => {
            let verStep = 3;
            let colJump = 1;
            return checkLine(verStep, colJump);
        }

        const checkDia = () => {
            let diaStep = 4;
            let diaJump = 2;
            let result = checkLine(diaStep,diaJump);
            let tempResult = (occupant(player, squares[diaJump]) && occupant(player, squares[diaJump+(diaStep/2)]) && occupant(player, squares[diaJump+(diaStep/2)*2]));
            return result || tempResult;
        }

        return checkVer() || checkHor() || checkDia();
    }

    const displayChoice = (player,func) => {
        let currPlayer = player;
        pageBoard.forEach(element => {
            element.addEventListener("click", () => {
                occupySquare(pageBoard.indexOf(element) + 1, currPlayer);
                currPlayer = func();
            });
            element.addEventListener("mouseover", () => {
                let currPageSquare = squares[pageBoard.indexOf(element)];
                if(currPageSquare.player) element.style = "opacity: 1"
            })
        })
    }

    return{occupySquare, checkWin, displayChoice};

})();

const game = (() => {
    let currPlayer = players.playerOne;
    const turn = () => {
        
        const winCon = (() => {
            if(players.playerOne.occupiedSquares.length >= 3 || players.playerTwo.occupiedSquares.length >= 3){
                if(gameboard.checkWin(players.playerOne)){
                    alert('Player One won');
                    location.reload();
                }
                else if(gameboard.checkWin(players.playerTwo)){
                    alert('Player Two Won');
                    location.reload();
                }
            }
        })();

        let totalSquares = 9;
        let occupiedSquares = players.playerOne.occupiedSquares.length + players.playerOne.occupiedSquares.length;
        if(occupiedSquares >= totalSquares){
            alert('Game Was a tie!')
        }

        if(currPlayer === players.playerOne) currPlayer = players.playerTwo;
        else{
            currPlayer = players.playerOne
        }
        return currPlayer
    };
    gameboard.displayChoice(currPlayer, turn);

})();

