

/*let currentPuzzle = 0;                                     Me being an idiot and not knowing what I'm doing
let cellsX;
let cellsY;

const cellWidth = 100;
const cellHeight = 25;
const noNotes = 8;

let puzzles = [];
let puzzle= {

    solution:0, song:0, width:0, height:0,

    init(sol, son, wid, hei){
        this.solution = sol;
        this.song = son;
        this.width = wid;
        this.height = hei;
    }
};
puzzles.push(Object.assign({}, puzzle));
puzzles[0].init("LaLa", "WinchesterChimes", 4, 4);


cellsX = puzzles[currentPuzzle].width*2;
cellsY = puzzles[currentPuzzle].height*2+noNotes;
let puzzleDiv = document.querySelector("#puzzle");
puzzleDiv.style.width = (cellsX * cellWidth) + "px";
puzzleDiv.style.height = (cellsY * cellHeight) + "px";

const cells = [];
const span = document.createElement("span");
span.className = "cell";

for(let x=0;x<cellsX;x++)
{
    cells.push([]);
    for(let y=0;x<cellsY;y++)
    {
        let cell = span.cloneNode();
        puzzleDiv.appendChild(cell);
        cells[x][y] = cell;
    }
}*/

class Puzzle{                                                       //A class that holds all the puzzles
    constructor(name, width, height, hints, solution, fontSize){
        this.name = name;
        this.width = width;
        this.height = height;
        this.hints = hints;
        this.solution = solution;
        this.fontSize = fontSize;   //If it's a larger puzzle, the font size may need to shrink to fit
    }
}




let cellWidth = 55;
let cellHeight = 55;

let span = document.createElement("span");
span.className = "cell";

let container = document.querySelector("#puzzle");

let cells = [];

let puzzles = [];
/*puzzles.push(new Puzzle("Heart", 6,6,        //Yup, have to hard code each of the parts of the puzzle by hand
    [["2", "1<br>1", "1<br>1","1<br>1","2"],
    ["1 1", "1 1 1","1 1","1 1","1"]], 
    [
        [false, true,false,true,false],
        [true,false,true,false,true],
        [true,false,false,false,true],
        [false, true, false, true, false],
        [false, false, true, false, false]
    ], 100)); */


    puzzles.push(new Puzzle("Mushroom", 17, 17, 
    [["6","4<br>1","1<br>3<br>4","1<br>8<br>1","1<br>2<br>3<br>1","4<br>2<br>1","4<br>4<br>1","4<br>2<br>1","4<br>2<br>1","1<br>2<br>4 <br>1","1<br>8<br>1","1<br>2<br>2<br>1","1<br>1<br>2<br>1","1<br>1<br>4","4<br>3","6"],
     ["6","6 2","1 1","1 6 1","1 2 2 1","4 4","4 2 2","1 2 1 1","1 2 1 1","1 9 2","1 14","3 1 1 3","1 1 1 1","1 1","1 1","8"]
    ],
    [
        [false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, false],     //This was fun
        [false, false, false, true, true, true, true, true, true, false, false, true, true, false, false, false],
        [false, false, true, false, false, true, true, true, true, false, false, false, false, true, false, false],
        [false, true, false, false, true, true, true, true, true, true, false, false, false, false, true, false],
        [false, true, false, true, true, false, false, false, false, true, true, false, false, false, true, false],
        [true, true, true, true, false, false, false, false, false, false, true, true, true, true, true, true],
        [true, true, true, true, false, false, false, false, false, false, true, true, false, false, true, true],
        [true, false, true, true, false, false, false, false, false, false, true, false, false, false, false, true],
        [true, false, false, true, true, false, false, false, false, false, true, false, false, false, false, true],
        [true, false, false, true, true, true, true, true, true, true, true, true, false, false, true, true],
        [true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [false, true, true, true, false, false, true, false, false, true, false, false, true, true, true, false],
        [false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false],
        [false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false],
        [false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false],
        [false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false]
    ], 65
    ));

    /*
    puzzles.push(new Puzzle("Triforce", 13,13,
        [
            ["2",'4','6','2<br>4','4<br>2','6<br>1','4<br>2','2<br>4','6','4','2', '0'],
            ['1','1','3','3','5','5','1 1','1 1','3 3','3 3', '5 5', '12' ]
    
        ],

        [
            [false, false, false, false, false, true, false, false, false, false, false, false],
            [false, false, false, false, false, true, false, false, false, false, false, false],
            [false, false, false, false, true, true, true, false, false, false, false, false],
            [false, false, false, false, true, true, true, false, false, false, false, false],
            [false, false, false, true, true, true, true, true, false, false, false, false],
            [false, false, false, true, true, true, true, true, false, false, false, false],
            [false, false, true, false, false, false, false, false, true, false, false, false],
            [false, false, true, false, false, false, false, false, true, false, false, false],
            [false, true, true, true, false, false, false, true, true, true, false, false],
            [false, true, true, true, false, false, false, true, true, true, false, false],
            [true, true, true, true, true, false, true, true, true, true, true, false],
            [true, true, true, true, true, true, true, true, true, true, true, false],

        ], 100
        
    )); */

   /* puzzles.push(new Puzzle(  //:)
        "Loss", 14,14,
        [
            ['1', '1<br>4','4<br>1','1<br>4','1','1','13','1','4<br>1<br>4','1','1<br>1','4<br>1<br>1','1<br>1'],
            ['1','1 1 1 1', '1 1 1 1','1 1 1 1','1 1 1 1', '1', '13', '1', '1 1 1 1', '1 1 1 1', '1 1 1 1', '1 1 1 1 3', '1']
        ],
        [
           [false, false, false, false, false, false, true, false, false, false, false, false, false],
           [false, false, true, false, false, false, true, false, true, false, false,true, false],
           [false, false, true, false, false, false, true, false, true, false, false,true, false],
           [false, false, true, false, false, false, true, false, true, false, false,true, false],
           [false, false, true, false, false, false, true, false, true, false, false,true, false],
           [false, false, false, false, false, false, true, false, false, false, false, false, false],
           [true, true, true, true, true, true, true, true, true, true, true, true, true],
           [false, false, false, false, false, false, true, false, false, false, false, false, false],
           [false, true, false, true, false, false, true, false, true, false, false, false, false],
           [false, true, false, true, false, false, true, false, true, false, false, false, false],
           [false, true, false, true, false, false, true, false, true, false, false, false, false],
           [false, true, false, true, false, false, true, false, true, false, true, true, true],
           [false, false, false, false, false, false, true, false, false, false, false, false, false],
        ], 60

    ));*/

    let currentPuzzle = Math.floor(Math.random() * puzzles.length);

    let solutionDone = false; 

for(let x=0;x<puzzles[currentPuzzle].width;x++)
{
    cells.push([]);
    for(let y=0;y<puzzles[currentPuzzle].height;y++)  //Essentailly copying the Pixel Art homework...
    {
        let cell = span.cloneNode();
        cell.style.left = x * 55 + "px";
        cell.style.top = y * 55 + "px";
        cell.style.zIndex = "0";
        cell.style.position = "absolute";
        container.appendChild(cell);

        if(x != 0 && y != 0){ //The outer ring is special.  They get special styles & no event listeners.
        cell.addEventListener("contextmenu", function (e) {   //Google tells me this disables the context menu on right click
            e.preventDefault();
        }, false)
        
        cell.addEventListener("mousedown", fill); //Makes sure the others do the "fill" function when clicked
        cell.style.backgroundColor = "ivory";
        cell.style.borderColor = "black";
    }
        

        else //Set up the outer ring
        {
        cell.style.backgroundColor = "snow";
        cell.style.borderColor = "crimson";
        cell.style.borderStyle = "groove";
        cell.style.fontFamily = "jpComicSans";
         }

         cells[x][y] = cell;
    
    }
        
}

for(let x=1;x<puzzles[currentPuzzle].width;x++)  //Fill in the hints on the outer ring
{
    cells[x][0].innerHTML = "<p>" + puzzles[currentPuzzle].hints[0][x-1]+ "</p>";
    cells[x][0].style.fontSize = puzzles[currentPuzzle].fontSize + "%";
}

for(let x=1;x<puzzles[currentPuzzle].height;x++)
{
    cells[0][x].innerHTML = "<p>" +  puzzles[currentPuzzle].hints[1][x-1] + "</p>";
    cells[0][x].style.fontSize = puzzles[currentPuzzle].fontSize + "%";
}



function fill(e)
{

    let cell = e.target;

    if(e.button == 0)  //If it's the left mouse button...
    {

        if(cell.className == "cell x")
        {
            cell.className = "cell"
            cell.style.backgroundImage = "none";
        } else if(cell.className == "cell filled")
        {
            cell.className = "cell x";
            cell.style.backgroundImage = "url('Images/x.gif')"
        }
          else if(cell.className == "cell")
        {
            cell.className = "cell filled"; //Otherwise, fill it.
        cell.style.backgroundImage = "url('Images/fill.gif')";
        }

        

      /*if(cell.className == "cell filled"){ //And the cell is already filled, then "unfill" it.
        cell.style.backgroundImage = "none";
        cell.className = "cell";
    }
      else{
        cell.className = "cell filled"; //Otherwise, fill it.
        cell.style.backgroundImage = "url('Images/fill.gif')";
      }
    }

    if(e.button == 2) //If it's the right mouse button...
    {
        if(cell.className == "cell x"){ //If it's in the X class, remove it
            cell.style.backgroundImage = "none";
            cell.className = "cell";
        }
          else{                       //If not, X it.
            cell.className = "cell x";
            cell.style.backgroundImage = "url('Images/x.gif')";
          }*/
    }

    solutionCheck(); //Check for solution on every click

}

function solutionCheck()
{
    let currentFill = getCurrentFill();

    console.log(currentFill);

    let pass = true;

    for(let x=0;x<puzzles[currentPuzzle].width-1;x++)
    {
        for(let y=0;y<puzzles[currentPuzzle].height-1;y++) //If there are any discrepencies between the array of currently filled tiles & the solution array,
        {                                                  //Then obviously, you don't have the solution
            if(currentFill[x][y] != puzzles[currentPuzzle].solution[x][y])
            pass = false;
        }
    }

    if(pass)  //But if you do...
    {
        if(!solutionDone){   //Makes sure it only happens once
        let jingle = new Audio("Music/LaytonPuzzleSolved.mp3");
        jingle.play();
        let confetti = document.createElement("img");
        confetti.src = "Images/Chris Cubellis Sticker-source.gif";
        confetti.style.width = window.width;
        confetti.style.height = window.height;
        let body = document.querySelector("body");
        body.appendChild(confetti);

        for(let x=0;x<cells.length;x++) //Annoying thing I have to do to get the confetti (Or anything else) on top, also handly stops the mouse events
        {
            for(let y=0;y<cells[x].length;y++ )
            {
                cells[x][y].style.zIndex = -1;
            }
        }

        solutionDone = true; //Don't do this again

        setTimeout(function(){
            window.location.href="https://hyliabook.github.io/joy/";
        }, 5000);
    }

    }

    return pass;
}

function getCurrentFill()
{

    let currentFill = [];
    
    for(let x=1;x<puzzles[currentPuzzle].width;x++) //Checking which cells are currently filled and crafting an array based on so
    { 
        currentFill.push([]);
        for(let y=1;y<puzzles[currentPuzzle].height;y++)
        {
            let filled = (cells[y][x].className == "cell filled"); //Doing it y x magically fixes everything for some godforsaken reason, but only lets me have
            currentFill[x-1].push(filled);                         //square puzzles...
        }
    }

    return currentFill;

}

let instrucButton = document.querySelector("#instructions");
instrucButton.addEventListener("click", clickInstruct); //Add the instruction button's events

function clickInstruct(e)
{
    let instruct = document.createElement("div"); //Create the Instructions window
    e.target.removeEventListener("click", clickInstruct); //Remove the listener, causes issues when clicked while the window is open

    instruct.style.width = "700px";  //Set all the style up...
    instruct.style.height = "510px";
    instruct.style.position = "absoulte";
    instruct.style.top = 0;
    instruct.style.bottom = 0; //center it
    instruct.style.left = 0;
    instruct.style.right = 0;
    instruct.style.margin = "auto";
    instruct.style.zIndex = "100"; //Does nothing because f me
    instruct.id = "instrucBox";
    instruct.style.border = "ridge";
    instruct.style.borderColor = "brown";
    instruct.style.borderWidth = "10px";
    instruct.style.backgroundSize = "cover";
    instruct.style.backgroundImage = "url(\"./Images/wrinkledPaper.gif\")";
    instruct.fontFamily = "architex";
    

    instruct.innerHTML = "<img id=\"instructX\" src= \"./Images/x.gif\">" + //Slyly insert the "X" button while setting up the instructions...
    "<h1>Instructions</h1>1. A group is defined as a string of tiles seperated by <i>at least</i> one space"+
    "<br>2. The hints around the puzzle tell what groups are in each row/collumn, and the size of each group."+
    "<br>3. They are in order of left to right;top to bottom"+
    "<br>4. Click to place/remove a tile.  Click again to place an \"X\"."+
    "<br>5. X's are to be placed in locations where a tile cannot possibly exist."+
    "<br><i>X's are not neccesary to complete the puzzle, but solving a puzzle without them is very difficult." +
    "<br>6.The puzzle is solved when all the hints correctly match the filled in tiles.";
    let body = document.querySelector("body");
    body.appendChild(instruct); //Add the window

    

    let xBut = document.querySelector("#instructX");
    xBut.onclick = clickInstructX; //Set up the event on the X button I just created

    for(let x=0;x<cells.length;x++) //...I have to do it this way.  ANY other zIndex value makes the grid appear on top no matter what...
    {                               //...And at -1, the mouse events aren't triggered, so I can't have it -1 by default...
        for(let y=0;y<cells[x].length;y++)
        {
            try{
            cells[x][y].style.zIndex = -1;
            }
            catch(e){      
                debugger;
            }
        }
    }
    

}

function clickInstructX(e)
{
    e.target.parentNode.parentNode.removeChild(e.target.parentNode); //Close the window when the X is clicked
    for(let x=0;x<cells.length;x++)
    {
        for(let y=0;y<cells[x].length;y++) //Send the cell's zIndex back to normal so you can click
        {
            try{
            cells[x][y].style.zIndex = 0;
            }
            catch(e){      
                debugger;
            }
        }
    }

    instrucButton.addEventListener("click", clickInstruct); //Restore the event on the Instructions Button
}

function hintFill()
{
    let hit = false;

   while(!hit)    //Essentailly, get a random filled tile from the solution, and check if it's already been filled in on the puzzle.
   {              //If so, just go throw the loop again until you do.  Once you find one that's in the solution but not filled in, fill it in and move on.
        let solution = puzzles[currentPuzzle].solution;
        let randoFillX = Math.floor(Math.random() * solution.length);
        let randoFillY = Math.floor(Math.random() * solution[0].length);
        let randoFill = solution[randoFillX][randoFillY];
        if(randoFill)
        {
            let randoCell = cells[randoFillY+1][randoFillX+1];
            if(randoCell.className != "cell filled")
            {
                hit = true;
                randoCell.className = "cell filled";
                randoCell.style.backgroundImage = "url('Images/perm.gif')";
            }
        }

        let pass = solutionCheck(); //But if the puzzle is finished when this is called, that could cause problems- so just stop if the puzzle is finished

        if(pass)
        hit = true;
   }
}

let hint1 = document.querySelector("#hint1"); //Set up Hint 1
hint1.addEventListener("click", clickHint1)

function clickHint1(e)  //Strike through the text when clicked, remove the listener, and set up the next Hint button- then do the hintFill
{
    e.target.innerHTML = "<strike>Hint 1</strike>";
    e.target.removeEventListener("click", clickHint1);
    let hint2= document.createElement("span");
    hint2.id = "hint2";
    hint2.className = "hint";
    hint2.innerHTML = "Hint 2";
    let body = document.querySelector("body");
    body.appendChild(hint2);
    hint2.addEventListener("click", clickHint2);

   hintFill();

}



function clickHint2(e) //Ditto
{
    e.target.innerHTML = "<strike>Hint 2</strike>";
    e.target.removeEventListener("click", clickHint2);
    let hint3= document.createElement("span");
    hint3.id = "hint3";
    hint3.className = "hint";
    hint3.innerHTML = "Hint 3";
    let body = document.querySelector("body");
    body.appendChild(hint3);
    hint3.addEventListener("click", clickHint3);

    hintFill();
}

function clickHint3(e) //Ditto
{
    e.target.innerHTML = "<strike>Hint 3</strike>";
    e.target.removeEventListener("click", clickHint3);
    let superHint= document.createElement("span");
    superHint.id = "superHint";
    superHint.className = "hint";
    superHint.innerHTML = "<b>Super Hint</b>";
    let body = document.querySelector("body");
    body.appendChild(superHint);
    superHint.addEventListener("click", clickSuperHint);

    hintFill();
}

function clickSuperHint(e) //Super Ditto
{
    e.target.innerHTML = "<strike><b>Super Hint<b></strike>";
    e.target.removeEventListener("click", clickSuperHint);
    let solution = document.createElement("span");
    solution.id = "solutionText";
    solution.className = "hint";
    solution.innerHTML = "<b><i>Solution<i></b>";
    let body = document.querySelector("body");
    body.appendChild(solution);
    solution.addEventListener("click", clickSolution);
    doSuperHint();
}

function doSuperHint() //Super hint is special, it does 5.  (It was originally supposed to do a whole row, but that proved difficult.)
{
   hintFill();
   hintFill();
   hintFill();
   hintFill();
   hintFill();
}

function clickSolution(e){             
                                //Just makes the solution image appear, fairly straightforward
    window.alert("lol lazily disabled this");
    /*
    e.target.innerHTML = "<strike><b><i>Solution<i></b><strike>";
    e.target.removeEventListener("click", clickSolution);

    let solutionImage = document.createElement("img");
    solutionImage.src = "Solution/" + puzzles[currentPuzzle].name + ".jpg";
    solutionImage.style.position = "absolute";
    solutionImage.style.right = "0px";
    solutionImage.style.top = "400px";
    solutionImage.style.width = "200px";
    solutionImage.style.height = "200px";
    let body = document.querySelector("body");
    body.appendChild(solutionImage); */
}



