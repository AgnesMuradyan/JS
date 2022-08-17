/*
Since the game was created so, that matrix size is 9,
accordingly I implemented the game my way.
Thus, if there are two spare cells, my random functions will fill those two cells
 */

const prompt = require('prompt-sync');
const input = prompt();

let score = 0;
let count = 0;
let boolForCount = true;
let theEnd = true;
let n;
while (true) {
    n = Number.parseInt(input("Please Enter N(It must be greater than 9:  "));
    if (n >= 9)
        break;
}

/**
 * cell
 */
class Cell {
    constructor(x, y) {
        this.row = x;
        this.col = y;
    }
}

const colors = {
    p: 'purple',
    b: 'black',
    y: 'yellow',
    o: 'orange',
    g: 'green',
    r: 'red'
};

/**
 * is path
 */
function isPath(start, end, map) {
    if (map[start.row][start.col] === '*' || map[end.row][end.col] !== '*')
        return -1;

    let visited = Array.from(Array(n), () => Array(n).fill(true));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (map[i][j] === '*')
                visited[i][j] = false;
        }
    }

    visited[end.row][end.col] = false;
    visited[start.row][start.col] = false;

    let queue = [];
    queue.push(start);
    visited[start.row][start.col] = true;

    while (queue.length !== 0) {
        let curr = queue[0];
        queue.shift();

        // found;
        if (curr.row === end.row && curr.col === end.col) {
            map[end.row][end.col] = map[start.row][start.col];
            map[start.row][start.col] = '*';
            return 1;
        }


        // up
        if (curr.row - 1 >= 0 && visited[curr.row - 1][curr.col] === false) {
            queue.push(new Cell(curr.row - 1, curr.col));
            visited[curr.row - 1][curr.col] = true;
        }

        // down
        if (curr.row + 1 < n && visited[curr.row + 1][curr.col] === false) {
            queue.push(new Cell(curr.row + 1, curr.col));
            visited[curr.row + 1][curr.col] = true;
        }

        // left
        if (curr.col - 1 >= 0 && visited[curr.row][curr.col - 1] === false) {
            queue.push(new Cell(curr.row, curr.col - 1));
            visited[curr.row][curr.col - 1] = true;
        }

        // right
        if (curr.col + 1 < n && visited[curr.row][curr.col + 1] === false) {
            queue.push(new Cell(curr.row, curr.col + 1));
            visited[curr.row][curr.col + 1] = true;
        }
    }
    return -1;
}


/**
 * Checkh
 */

function horizontal(map, x, y) {
    let count1 = 1;
    let right = y - 1;
    let left = y + 1;
    while (right >= 0 && map[x][right] === map[x][y]) {
        count1++;
        right--;
    }
    while (left < map.length && map[x][left] === map[x][y]) {
        count1++;
        left++;
    }
    if (count1 >= 5) {
        for (let i = right + 1; i <= left - 1; i++) {
            if (i !== y) {
                map[x][i] = '*';
                count--;
            }
        }
        return true;
    }
    return false;
}
/**
 * Checkv
 */
function vertical(map, x, y) {
    let up = x - 1;
    let down = x + 1;
    let count1 = 1;
    while (up >= 0 && map[up][y] === map[x][y]) {
        count1++;
        up--;
    }
    while (down < map.length && map[down][y] === map[x][y]) {
        down++;
        count1++;
    }
    if (count1 >= 5) {
        for (let i = up + 1; i <= down - 1; i++) {
            if (i !== x) {
                map[i][y] = '*';
                count--;
            }
        }
        return true;
    }
    return false;
}

/**
 * checkd
 */
function diagonal1(map, x, y) {
    let count1 = 1;
    let first1 = x - 1;
    let first2 = y - 1;
    let second1 = x + 1;
    let second2 = y + 1;
    while (first1 >= 0 && first2 >= 0 && map[first1][first2] === map[x][y]) {
        first1--;
        first2--;
        count1++;
    }
    while (second1 < map.length && second2 < map.length && map[second1][second2] === map[x][y]) {
        second1++;
        second2++;
        count1++;
    }
    if (count1 >= 5) {
        for (let i = first1 + 1, j = first2 + 1; i <= second1 - 1, j <= second2 - 1; i++, j++) {
            if (i !== x && j !== y) {
                map[i][j] = '*';
                count--;
            }
        }
        return true;
    }
    return false;
}

/**
 * checkd2
 */
function diagonal2(map, x, y) {
    let count1 = 1;
    let first1 = x - 1;
    let first2 = y + 1;
    let second1 = x + 1;
    let second2 = y - 1;
    while (first1 >= 0 && first2 < map.length && map[first1][first2] === map[x][y]) {
        first1--;
        first2++;
        count1++;
    }
    while (second1 < map.length && second2 >= 0 && map[second1][second2] === map[x][y]) {
        second1++;
        second2--;
        count1++;
    }
    if (count1 >= 5) {
        for (let i = first1 + 1, j = first2 - 1; i <= second1 - 1, j >= second2 + 1; i++, j--) {
            if (i !== x && j !== y) {
                map[i][j] = '*';
                count--;

            }
        }
        return true;
    }
    return false;
}

/**
 * check
 */
function checkingCombinations(map, x, y) {
    let h = horizontal(map, x, y);
    let v = vertical(map, x, y);
    let d1 = diagonal1(map, x, y);
    let d2 = diagonal2(map, x, y);
    if (h || v || d1 || d2) {
        map[x][y] = '*';
        score += 100;
        count --;
    }
}

/**
 * random
 */
function random(map) {
    let curr = 0;
    if(n * n - count >= 3)
        curr = 3;
    else if(n * n - count === 2)
        curr = 2;

    if (curr >= 2) {
        count += curr;
        for (let i = 0; i < curr; ++i) {
            while (true) {
                let x = Math.floor(Math.random() * map.length);
                let y = Math.floor(Math.random() * map[0].length);
                if (map[x][y] === '*') {
                    const keys = Object.keys(colors);
                    map[x][y] = keys[Math.floor(Math.random() * keys.length)];
                    checkingCombinations(map, x, y);
                    break;
                }
            }
        }
    }
}

/**
 * print
 */
function print(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            process.stdout.write(map[i][j] + "  ");
        }
        console.log();
    }
}



function repeat() {
    if(theEnd) {
        let startX = parseInt(input("Please Enter Start x:  "));
        let startY = parseInt(input("Please Enter Start y:  "));
        let endX = parseInt(input("Please Enter Destination x:  "));
        let endY = parseInt(input("Please Enter Destination y:  "));
        if (isNaN(startX) || isNaN(startY) || isNaN(endX) || isNaN(endY)) {
            console.log(`Please enter only number that is less than ${n - 1}`);
            return repeat();
        }
        if (startX >= n || endX >= n || startY >= n || endY >= n) {
            console.log(`Index must be <= ${n - 1}`);
            return repeat();
        }
        let start = new Cell(startX, startY);
        let end = new Cell(endX, endY);
        if (isPath(start, end, map) === -1) {
            console.log("Ilegal move, try again");
            return repeat();
        }
        isPath(start, end, map);
        checkingCombinations(map, endX, endY);
        random(map);
        console.log(score);
        print(map);
        let crush = (input("If you want to stop game type yes:  "));
        if (crush === 'yes')
            theEnd = false;
        if ((n * n - count) === 1) {
            if (boolForCount === false)
                theEnd = false;
            else
                boolForCount = false;
        }
        if((n * n - count) === 0)
            theEnd = false;
        return repeat();
    }

}

let map = Array.from(Array(n), () => Array(n).fill('*'));
random(map);
print(map);

repeat();

console.log(`Game is over. Your score is ${score}. Hope to see you again soon.`);
