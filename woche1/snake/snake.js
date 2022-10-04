const north = {dx: 0, dy: -1};
const east = {dx: 1, dy: 0};
const south = {dx: 0, dy: 1};
const west = {dx: -1, dy: 0};

let direction = north;

const clockwise = [north, east, south, west, north];
const countercw = [north, west, south, east, north];

var intervalID;

let snake = [
    {x: 10, y: 5},
    {x: 10, y: 6},
    {x: 10, y: 7},
    {x: 10, y: 8},
];
let food = {x: 15, y: 15};

function snakeEquals(a, b) {
    return a.x === b.x && a.y === b.y;
}

function changeDirection(orientation) {
    const actualIndexOfOrientation = orientation.indexOf(direction);
    direction = orientation[actualIndexOfOrientation + 1];
}

function start() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    document.getElementById("loose").style.display = 'none';
    document.getElementById("canvas").style.display = 'block';
    
    const rightArrow = 39;
    const leftArrow = 37;
    window.onkeydown = evt => {
        const orientation = (evt.keyCode === rightArrow) ? clockwise : countercw;
        changeDirection(orientation);
    };
    
    intervalID = setInterval(() => {
        if (nextBoard() === 0) {
            stop();
        }
        display(context);
    }, 1000 / 5);
}

function stop() {
    clearInterval(intervalID);
    document.getElementById("canvas").style.display = 'none';
    document.getElementById("loose").style.display = 'block';
    document.getElementById("reloadButton").onclick = () => location.reload();
}

function nextBoard() {
    const maxX = 20;
    const maxY = 20;
    const oldHead = snake[0];
    
    function inBounds(x, max) {
        if (x < 0) { return max - 1 }
        if (x > max) { return 0 }
        return x
    }
    
    const head = {
        x: inBounds(oldHead.x + direction.dx, maxX),
        y: inBounds(oldHead.y + direction.dy, maxY)
    };
    
    if (snakeEquals(food, head)) {  // have we found any food?
        food.x = Math.floor(Math.random() * 20);   // place new food at random location
        food.y = Math.floor(Math.random() * 20);
    } else {
        for (let i = 0; i < snake.length - 1; i++) {
            if (snakeEquals(snake[i], head)) {
                return 0;
            }
        }
        
        // no food found => no growth despite new head => remove last element
        snake.pop();
    }
    
    
    snake.unshift(head);// put head at front of the list
    return 1;
}

function display(context) {
    // clear
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw all elements
    context.fillStyle = "cyan";
    snake.forEach(element =>
        fillBox(context, element)
    );
    context.fillStyle = "green";
    fillBox(context, snake[0]);
    // draw food
    context.fillStyle = "red";
    fillBox(context, food);
}

function fillBox(context, element) {
    context.fillRect(element.x * 20 + 1, element.y * 20 + 1, 18, 18);
}

