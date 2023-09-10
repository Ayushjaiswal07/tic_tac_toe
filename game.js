let r1c1 = document.querySelector('#r1c1');
let r1c2 = document.querySelector('#r1c2');
let r1c3 = document.querySelector('#r1c3');
let r2c1 = document.querySelector('#r2c1');
let r2c2 = document.querySelector('#r2c2');
let r2c3 = document.querySelector('#r2c3');
let r3c1 = document.querySelector('#r3c1');
let r3c2 = document.querySelector('#r3c2');
let r3c3 = document.querySelector('#r3c3');

let matrix = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];

let user = "X";
let computer = "0";

matrix.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML === user || cell.innerHTML === computer) 
        {
            alert("Invalid Input");
        } 
        else 
        {
            cell.innerHTML = user;

            // Check if the user won
            if (checkWinner(user)) 
            {
                alert("You win!");
                return;
            }

            // Check if it's a draw
            // .every will check all the conditions are settified or not. return true or false
            if (matrix.every(cell => cell.innerHTML === user || cell.innerHTML === computer)) 
            {
                alert("It's a draw!");
                return;
            }

            // Computer's turn
            setTimeout(() => {
                computerMove();
                // Check if the computer won
                if (checkWinner(computer)) {
                    alert("Computer wins!");
                    return;
                }
            }, 200);
        }
    });
});

function computerMove() {
    let availableCells = matrix.filter(cell => cell.innerHTML !== user && cell.innerHTML !== computer);
    if (availableCells.length === 0) {
        return;
    }

    let ind = Math.floor(Math.random() * availableCells.length);
    availableCells[ind].innerHTML = computer;
}

function checkWinner(player) 
{

    // list of combinations of winnings

    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combo of winCombos) 
    {
        const [a, b, c] = combo;
        if ( matrix[a].innerHTML === player && matrix[b].innerHTML === player && matrix[c].innerHTML === player ) 
        {
            return true;
        }
    }

    return false;
}