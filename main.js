class Shooter {
    constructor(posX, posY, endX, endY, sizeX, sizeY, velX, velY, filler=false) {
        this.posX = posX;
        this.posY = posY;
        this.startX = posX;
        this.startY = posY;
        this.endX = posX + endX;
        this.endY = posY + endY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.velX = velX;
        this.velY = velY;
        this.filler = filler
        this.draw();
    }

    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.posX, this.posY, this.sizeX, this.sizeY);
    }

    update() {
        if (this.filler) {
            if (this.sizeY < this.endY && this.sizeX < this.endX) {
                this.sizeX += this.velX;
                this.sizeY += this.velY;
            }
        } else {
            this.posX += this.velX;
            this.posY += this.velY;
            if (this.posY > this.endY || this.posX > this.endX) {
                this.posX = this.startX;
                this.posY = this.startY;
            }
        }
        this.draw();
    }
}

class Map0 {
    constructor() {
        this.startX = 20;
        this.startR = getDifficulty();
        this.startY = height / 2 - this.startR;
        this.draw();
        this.multiplier = 1;
        timer.innerHTML = 30;
    }
    draw() {
        drawBackground();
        drawCircle(this.startX, this.startY, this.startR);
    }

    update() {
        ctx.lineWidth = this.startR * 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(this.startX - this.startR, this.startY);
        ctx.lineTo(width, height / 2 - this.startR);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(width - this.startR, height / 2 - this.startR * 2, this.startR, this.startR * 2);
        // ctx.fillRect(width / 5 - this.startR, height / 2 - this.startR * 2, this.startR, this.startR * 2);
    }
}

class Map1 {
    constructor() {
        this.startX = 20;
        this.startR = getDifficulty();
        this.startY = height / 2 - this.startR;
        this.draw();
        this.multiplier = 1;
        timer.innerHTML = 30;
    }
    draw() {
        drawBackground();
        drawCircle(this.startX, this.startY, this.startR);
        this.shooter = new Shooter(400, 250, 0, 200, 30, 30, 0, 2);
    }

    update() {
        ctx.lineWidth = this.startR * 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(this.startX - this.startR, this.startY);
        ctx.lineTo(width, height / 2 - this.startR);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(width - this.startR, height / 2 - this.startR * 2, this.startR, this.startR * 2);

        this.shooter.update();
    }
}

class Map2 {
    constructor() {
        this.startR = getDifficulty();
        this.startX = 20;
        this.startY = (height / 2 - this.startR) / 4;
        this.draw();
        this.multiplier = 1;
        timer.innerHTML = 60;
    }
    draw() {
        drawBackground();
        drawCircle(this.startX, this.startY, this.startR);
        this.shooter = new Shooter(400, 250, 0, 200, 30, 30, 0, 2);
    }

    update() {
        ctx.lineWidth = this.startR * 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(this.startX - this.startR, this.startY);
        ctx.lineTo(width / 4, this.startY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 + this.startR, this.startY - this.startR);
        ctx.lineTo(width / 4 + this.startR, this.startY * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4, this.startY * 2 + this.startR);
        ctx.lineTo(width / 2, this.startY * 2 + this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 2 + this.startR, this.startY * 2);
        ctx.lineTo(width / 2 + this.startR, this.startY * 8);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 2 + this.startR * 2, this.startY * 8 - this.startR);
        ctx.lineTo(width / 5 * 4 - this.startR, this.startY * 8 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 5 * 4 - this.startR * 2, this.startY * 8 - this.startR * 2);
        ctx.lineTo(width / 5 * 4 - this.startR * 2, this.startY * 4 - this.startR * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 5 * 4 - this.startR * 3, this.startY * 4 - this.startR * 3);
        ctx.lineTo(width, this.startY * 4 - this.startR * 3);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(width - this.startR, this.startY * 4 - this.startR * 4, this.startR, this.startR * 2);

        this.shooter.update();
    }
}

class Map3 {
    constructor() {
        this.startR = getDifficulty();
        this.startX = 20;
        this.startY = (height - this.startR * 5);
        this.draw();
        this.multiplier = 1;
        timer.innerHTML = 90;
    }
    draw() {
        drawBackground();
        drawCircle(this.startX, this.startY, this.startR);
        this.shooter = new Shooter(170, 360 - this.startR, 190, 0, this.startR * 2, this.startR * 2, 2, 0);
    }

    update() {
        ctx.lineWidth = this.startR * 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(this.startX - this.startR, this.startY);
        ctx.lineTo(width - this.startR * 2, this.startY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width - this.startR * 3, this.startY - this.startR);
        ctx.lineTo(width - this.startR * 3, this.startR * 6);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width - this.startR * 2, this.startR * 5);
        ctx.lineTo(this.startR * 8, this.startR * 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.startR * 7, this.startR * 4);
        ctx.lineTo(this.startR * 7, height / 4 * 3);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.startR * 6, height / 4 * 3 + this.startR);
        ctx.lineTo(width / 4 * 3, height / 4 * 3 + this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 * 3 + this.startR, height / 4 * 3 + this.startR * 2);
        ctx.lineTo(width / 4 * 3 + this.startR, height / 4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 * 3 + this.startR * 2, height / 4 - this.startR);
        ctx.lineTo(width / 4 + this.startR, height / 4 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 + this.startR * 2, height / 4);
        ctx.lineTo(width / 4 + this.startR * 2, height / 4 * 2 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 + this.startR, height / 4 * 2);
        ctx.lineTo(width / 4 * 2 + this.startR * 2, height / 4 * 2);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(width / 4 * 2 + this.startR * 2, height / 4 * 2 - this.startR, this.startR * 2, this.startR * 2);

        this.shooter.update();
    }
}

class Map4 {
    constructor() {
        this.startX = 10;
        this.startR = getDifficulty();
        this.startY = height / 2 - this.startR;
        this.shooters = new Array();
        this.draw();
        this.multiplier = 15;
        timer.innerHTML = 10;
    }
    draw() {
        drawBackground();
        drawCircle(this.startX, this.startY, this.startR);
        this.shooters.push(new Shooter(0 - this.startR * 4, height / 2 - this.startR * 2, width * 2, 0,
            this.startR * 2, this.startR * 4, 2, 0, true));
    }

    update() {
        ctx.lineWidth = this.startR * 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(0, this.startY);
        ctx.lineTo(width / 4, height / 2 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 - this.startR * 2, height / 2 + this.startR);
        ctx.lineTo(width / 2, height / 2 + this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 2 - this.startR * 2, height / 2 - this.startR);
        ctx.lineTo(width / 4 * 3, height / 2 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 * 3 - this.startR * 2, height / 2 + this.startR);
        ctx.lineTo(width, height / 2 + this.startR);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(width - this.startR, height / 2, this.startR, this.startR * 2);

        for (let i = 0, l = this.shooters.length; i < l; ++i) {
            this.shooters[i].update();
        }
    }
}

class Map5 {
    constructor() {
        this.startX = 10;
        this.startR = getDifficulty();
        this.startY = height / 2 - this.startR;
        this.shooters = new Array();
        this.draw();
        this.multiplier = 15;
        timer.innerHTML = 10;
    }
    draw() {
        drawBackground();
        drawCircle(this.startX, this.startY, this.startR);
        this.shooters.push(new Shooter(0 - this.startR * 4, height / 2 - this.startR * 2, 180 + this.startR * 2, 0,
            this.startR * 2, this.startR * 2, 2, 0));
        this.shooters.push(new Shooter(width / 2 - this.startR * 4, height / 2 - this.startR * 2, 180 + this.startR * 2, 0,
            this.startR * 2, this.startR * 2, 2, 0));
        this.shooters.push(new Shooter(width / 4 * 3 - this.startR * 4, height / 2, 180 + this.startR * 2, 0,
            this.startR * 2, this.startR * 2, 2, 0));
        this.shooters.push(new Shooter(width / 4 - this.startR * 4, height / 2, 180 + this.startR * 2, 0,
            this.startR * 2, this.startR * 2, 2, 0));
    }

    update() {
        ctx.lineWidth = this.startR * 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(0, this.startY);
        ctx.lineTo(width / 4, height / 2 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 - this.startR * 2, height / 2 + this.startR);
        ctx.lineTo(width / 2, height / 2 + this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 2 - this.startR * 2, height / 2 - this.startR);
        ctx.lineTo(width / 4 * 3, height / 2 - this.startR);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width / 4 * 3 - this.startR * 2, height / 2 + this.startR);
        ctx.lineTo(width, height / 2 + this.startR);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(width - this.startR, height / 2, this.startR, this.startR * 2);

        for (let i = 0, l = this.shooters.length; i < l; ++i) {
            this.shooters[i].update();
        }
    }
}

var canvas = document.getElementById('canvas');
var timer = document.getElementById('timer');
var score = document.getElementById('score');
var textContainer = document.getElementById('text-container');
var ctx = canvas.getContext('2d');

window.ontouchstart = function(event) {
    touchDevice = true;
}

const width = 720;
const height = 720;
const animSpeed = 750;
var mousePosition = {x: -1, y: -1};
var level = 0
var maxlevel = 5
var difficulty = 'm'
var state = 'main menu';
var touchDevice = false;
var invulerable = false;
var first = true;

function getDifficulty() {
    switch (difficulty) {
        case "e":
            return 15;
        case "m":
            return 10;
        case "d":
            return 5;
    }
}

function getDMultiplier() {
    switch (difficulty) {
        case "e":
            return 0.5;
        case "m":
            return 1;
        case "d":
            return 2;
    }
}

function getMap() {
    switch (level) {
        case 0:
            return new Map0();
        case 1:
            return new Map1();
        case 2:
            return new Map2();
        case 3:
            return new Map3();
        case 4:
            return new Map4();
        case 5:
            return new Map5();
        default:
            return new Map0();
    }
}

function setLevelText() {
    switch (level) {
        case 0:
            setText("AVOID THE DARKNESS", "REACH THE RED");
            break;
        case 1:
            setText("AVOID THE DARK LEAK");
            break;
        case 2:
            setText("A LONGER PATH...");
            break;
        case 3:
            setText("A LONGER LEAKY PATH...");
            break;
        case 4:
            setText("THE DARKNESS CHASES");
            break;
        case 5:
            setText("THE DARKNESS IMPROVES");
            break;
        default:
            setText();
    }
}

function init() {
    lastx = undefined;
    lasty = undefined;
    map = getMap();
    animate();
}

//document.addEventListener('contextmenu', event => event.preventDefault());
animate();
setHighscore();
setInfo();

$('#maintext').click(function (){
    if ($(this).text() == "NEW GAME") {
        if (!touchDevice) {
            $("#text-container").fadeOut(animSpeed, function () {
                score.innerHTML = 0;
                level = 0;
                state = 'level load';
                init();
            });
        } else {
            setText("Not available for touch devices.")
        }
    }
});

function setText(text1, text2, click1 = false) {
    if (click1) {
        $("#maintext").css('cursor', 'pointer');
        $("#maintext").addClass('ahover');
        $("#difficulty").show();
    } else {
        $("#maintext").css('cursor', 'default');
        $("#maintext").removeClass('ahover');
        $("#difficulty").hide();
    }
    $("#maintext").text(text1);
    $("#subtext").html(text2);
    let rect = canvas.getBoundingClientRect();
    textContainer.style.left = rect.left + width / 2 - realWidth($("#text-container")) / 2 + 'px';
    textContainer.style.top = height / 2 - realHeight($("#text-container")) / 2 + 'px';
    $("#text-container").fadeIn(animSpeed);
}

function animate() {
    var game = requestAnimationFrame(animate);
    if($("#timer").text() == 0) {
        state = 'game over'
    }
    if (state == 'main menu') {
        cancelAnimationFrame(game);
        drawBackground();
        let hs = 0
        if (localStorage.getItem("highscore") != null) {
            hs = localStorage.getItem("highscore")
        }
        setText("NEW GAME", "High Score: " + hs, true);
    } else if (state == 'start') {
        if (pointInCircle(mousePosition.x, mousePosition.y, map.startX, map.startY, map.startR)) {
            $("#text-container").fadeOut(animSpeed / 6);
            state = 'playing';
            startTimer();
            $("#score-container").fadeIn(animSpeed);
        }
    } else if (state == 'playing') {
        map.update();

        if (mousePosition.x >= 0 && mousePosition.x < width
            && mousePosition.y >= 0 && mousePosition.y < height) {

            let currentColor = getMouseColor(canvas);
            if (currentColor == "#000000") {
                if (!invulerable) {
                    state = 'game over';
                }
            } else if (currentColor == "#ff0000") {
                state = 'level won';
            }
            drawPlayer();
        }
    } else if (state == 'level won') {
        score.innerHTML = Number(score.innerHTML) + Number(timer.innerHTML) * getDMultiplier() * map.multiplier;
        clearInterval(timerInterval);
        if (level == maxlevel) {
            state = 'game won';
        } else {
            level = level + 1;
            state = 'level load';
        }
    } else if (state == 'level load') {
        cancelAnimationFrame(game);
        drawBackground();
        $("#score-container").fadeOut(animSpeed * 2);
        setLevelText();
        $("#text-container").fadeOut(animSpeed, function () {
            state = 'start';
            init();
            setText('ENTER THE CIRCLE', "");
        });
    } else if (state == 'game over') {
        drawBackground();
        clearInterval(timerInterval);
        cancelAnimationFrame(game);
        $("#score-container").fadeOut(animSpeed * 2);
        if($("#timer").text() == 0) {
            setText('TIME UP');
        } else {
            setText('GAME OVER');
        }
        $("#text-container").fadeOut(animSpeed, function () {
            setHighscore();
            setTries();
            setLevels();
            setDiffInfo();
            setInfo();
            setText('NEW GAME', "Score: " + score.innerHTML + "<br>High Score: " + localStorage.getItem("highscore"), true);
        });
    } else if (state == 'game won') {
        drawBackground();
        cancelAnimationFrame(game);
        $("#score-container").fadeOut(animSpeed * 2);
        setText('CONGRATULATIONS', 'YOU HAVE WON');
        setHighscore();
        setTries();
        setDiffInfo();
        setWon();
        setInfo();
    }
}


$("#canvas").mousemove(function (e){
    let rect = canvas.getBoundingClientRect();
    mousePosition.x = event.clientX - rect.left;
    mousePosition.y = event.clientY- rect.top;
})

function getMouseColor(canvas) {
    let p = ctx.getImageData(mousePosition.x, mousePosition.y, 1, 1).data;
    let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    return hex;

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
}

function realWidth(obj){
    let clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    let width = clone.outerWidth();
    clone.remove();
    return width;
}

function realHeight(obj){
    let clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    let height = clone.outerHeight();
    clone.remove();
    return height;
}

var timerInterval
function startTimer() {
    timerInterval = setInterval(function () {
        let cur = timer.innerHTML;
        if (cur == 0) {
            clearInterval(timerInterval);
        } else {
            cur -= 1;
            timer.innerHTML = cur;
        }
    }, 1000)
}

function drawPlayer() {
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(mousePosition.x, mousePosition.y);
    ctx.lineTo(lastx, lasty);
    ctx.stroke();
    lastx = mousePosition.x;
    lasty = mousePosition.y;
}

function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
}

function pointInCircle(x, y, cx, cy, radius) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
}

function drawBackground() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
}

function setInfo() {
    text = "Additional info:<br>"
    text += "Total Tries: "
    if (localStorage.getItem("tries") == null) {
        text += 0
    } else {
        text += localStorage.getItem("tries")
    }
    $("#difficulty").find("button").each(function () {
        text += "<br>" + $(this).text() + " Tries: ";
        if (localStorage.getItem($(this).text()) == null) {
            text += 0
        } else {
            text += localStorage.getItem($(this).text());
        }
    });
    for (let i = 0; i <= maxlevel; i++) {
        text += "<br>Lost at Level " + i + ": ";
        if (localStorage.getItem("level" + i) == null) {
            text += 0
        } else {
            text += localStorage.getItem("level" + i)
        }
    }
    text += "<br>Won: "
    if (localStorage.getItem("won") == null) {
        text += 0
    } else {
        text += localStorage.getItem("won")
    }
    text += "<br>{Instructions:<br>Move mouse cursor<br>to red rect without<br> touching black}"
    $("#info").html(text)
}

function setTries() {
    if (localStorage.getItem("tries") == null) {
        localStorage.setItem("tries", 1);
    } else {
        localStorage.setItem("tries", parseInt(localStorage.getItem("tries")) + 1);
    }
}

function setWon() {
    if (localStorage.getItem("won") == null) {
        localStorage.setItem("won", 1);
    } else {
        localStorage.setItem("won", parseInt(localStorage.getItem("won")) + 1);
    }
}

function setLevels() {
    if (localStorage.getItem("level" + level) == null) {
        localStorage.setItem("level" + level, 1);
    } else {
        localStorage.setItem("level" + level,
            parseInt(parseInt(localStorage.getItem("level" + level)) + 1)
        )
    }
}

function setDiffInfo() {
    let key = "Easy";
    switch (difficulty) {
        case "m":
            key = "Medium";
            break;
        case "d":
            key = "Difficult";
            break;
    }
    if (localStorage.getItem(key) == null) {
        localStorage.setItem(key, 1);
    } else {
        localStorage.setItem(key,
            parseInt(parseInt(localStorage.getItem(key)) + 1)
        )
    }
}

function setHighscore() {
    if (localStorage.getItem("highscore") == null) {
        localStorage.setItem("highscore", 0);
    } else {
        if (parseInt(localStorage.getItem("highscore")) < parseInt(score.innerHTML)) {
            localStorage.setItem("highscore", score.innerHTML);
        }
    }
}

$("#info-btn").click(function () {
    if ($(this).text() == "Hide") {
        $("#info").hide(animSpeed / 5);
        $(this).text('Show');
    } else {
        $("#info").show(animSpeed / 5);
        $(this).text('Hide');
    }
})

$("#difficulty").find("button").click(function () {
    $("#difficulty").find("button").removeClass('active');
    $(this).addClass('active');
    switch ($(this).text()) {
        case "Easy":
            difficulty = 'e';
            break
        case "Medium":
            difficulty = 'm';
            break
        case "Hard":
            difficulty = 'd';
            break
        default:
            difficulty = 'e';
    }
});

$("#cheat-btn").click(function () {
    if ($(this).text() == "Cheat: OFF") {
        if (first) {
            //alert("Game is most fun when played without cheating. This function is just to explore the entire game. :)");
            first = false;
        }
        invulerable = true;
        $(this).text("Cheat: ON")
    } else {
        invulerable = false;
        $(this).text("Cheat: OFF")
    }
})

/**
 * Cheat toggle on shift
 * @param e The keyboard event
 */
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 16) {
        $("#cheat-btn").click();
    }
}, true);
