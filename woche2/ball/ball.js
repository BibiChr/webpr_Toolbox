const radius = 10;
const ball = {x: 20, y: 0, dx: 5, dy: 1};
let old = {x: ball.x, y: ball.y};

const maxX = 400;
const maxY = 400;
let gravity = {x: 5, y: 20, steps: maxY/2, jumps: 0};

function start() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}


function changeGravity() {
    if (ball.x === maxX || ball.x === 0) {
        gravity.x *= -1;
    }
    if (ball.y > maxY) {
        gravity.y /= 2;
        gravity.y *= -1;
    }

    if (gravity.steps === 0) {
        gravity.y *= -1;
        gravity.jumps++;
        gravity.steps = maxY / (gravity.jumps * 4);
    }

}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old = {x: ball.x, y: ball.y};

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    if(gravity.y <0) {
        gravity.steps -= gravity.y;
    }
    changeGravity();

    // calculate new position
    ball.x = old.x + gravity.x;
    ball.y = old.y + gravity.y;

    // calculate any changes in velocity due to gravitational pull or medium resistance
}

function display(context) {
    context.clearRect(old.x - radius - 1, old.y - radius - 1, 22, 22);
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


