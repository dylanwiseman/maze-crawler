// import React from 'react';

export default function mazeBuilder() {
    const blankMaze = [
        [
            0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
        ],
        [
            0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
    ];
    const startSnake = { row: 1, col: 4, path: { 14: 1 } };
    const endSnake = { row: 1, col: 37, path: { 137: 1 } };

    // const generateCaves = (newMaze) => {
    //     let viableMaze = false;
    //     let generatedMaze = newMaze;
    //     let mazesCreated = 0;

    const searchForOtherSnake = (newMaze) => {
        let counter = 0;
        let startSnakeConnection = 0;
        let endSnakeConnection = 0;
        while (
            // endSnake.path[`${startSnake.row}${startSnake.col}`] !== 1 &&
            // endSnake.path[parseInt(`${startSnake.row}${startSnake.col}`)] !==
            //     1 &&
            // startSnake.path[parseInt(`${endSnake.row}${endSnake.col}`)] !== 1 &&
            newMaze[startSnake.row][startSnake.col] !== 7 &&
            newMaze[endSnake.row][endSnake.col] !== 1 &&
            counter <= 300
        ) {
            // startSnake random movement:
            newMaze[startSnake.row][startSnake.col] = 1;
            let movementArrayStart = ['up', 'down', 'left', 'right'];
            if (
                startSnake.row <= 1
                // startSnake.path[
                //     parseInt(`${startSnake.row - 1}${startSnake.col}`)
                // ] === 1
            ) {
                movementArrayStart.splice(movementArrayStart.indexOf('up'), 1);
            }
            if (
                startSnake.row >=
                newMaze.length - 2
                // startSnake.path[
                //     parseInt(`${startSnake.row + 1}${startSnake.col}`)
                // ] === 1
            ) {
                movementArrayStart.splice(
                    movementArrayStart.indexOf('down'),
                    1
                );
            }
            if (
                startSnake.col <= 1
                // startSnake.path[
                //     parseInt(`${startSnake.row}${startSnake.col - 1}`)
                // ] === 1
            ) {
                movementArrayStart.splice(
                    movementArrayStart.indexOf('left'),
                    1
                );
            }
            if (
                startSnake.col >=
                newMaze[0].length - 2
                // startSnake.path[
                //     parseInt(`${startSnake.row}${startSnake.col + 1}`)
                // ] === 1
            ) {
                movementArrayStart.splice(
                    movementArrayStart.indexOf('right'),
                    1
                );
            }
            if (movementArrayStart.length !== 0) {
                let startSnakeMoveDirection = Math.floor(
                    Math.random() * movementArrayStart.length
                );
                switch (movementArrayStart[startSnakeMoveDirection]) {
                    case 'up':
                        startSnake.row -= 1;
                        break;
                    case 'down':
                        startSnake.row += 1;
                        break;
                    case 'left':
                        startSnake.col -= 1;
                        break;
                    case 'right':
                        startSnake.col += 1;
                        break;
                    default:
                }
                startSnake.path[`${startSnake.row}${startSnake.col}`] = 1;
            }

            // endSnake random movement:
            let movementArrayEnd = ['up', 'down', 'left', 'right'];
            if (
                endSnake.row <= 1
                // newMaze[endSnake.row - 1][endSnake.col] === 1
            ) {
                movementArrayEnd.splice(movementArrayEnd.indexOf('up'), 1);
            }
            if (
                endSnake.row >=
                newMaze.length - 2
                // newMaze[endSnake.row + 1][endSnake.col] === 1
            ) {
                movementArrayEnd.splice(movementArrayEnd.indexOf('down'), 1);
            }
            if (
                endSnake.col <= 1
                // newMaze[endSnake.row][endSnake.col - 1] === 1
            ) {
                movementArrayEnd.splice(movementArrayEnd.indexOf('left'), 1);
            }
            if (
                endSnake.col >=
                newMaze[0].length - 2
                // newMaze[endSnake.row][endSnake.col + 1] === 1
            ) {
                movementArrayEnd.splice(movementArrayEnd.indexOf('right'), 1);
            }
            if (movementArrayEnd.length !== 0) {
                let endSnakeMoveDirection = Math.floor(
                    Math.random() * movementArrayEnd.length
                );
                switch (movementArrayEnd[endSnakeMoveDirection]) {
                    case 'up':
                        endSnake.row -= 1;
                        break;
                    case 'down':
                        endSnake.row += 1;
                        break;
                    case 'left':
                        endSnake.col -= 1;
                        break;
                    case 'right':
                        endSnake.col += 1;
                        break;
                    default:
                }
                endSnake.path[`${endSnake.row}${endSnake.col}`] = 1;
            }
            newMaze[endSnake.row][endSnake.col] = 7;
            counter++;
            // let parseInts = parseInt(`${startSnake.row}${startSnake.col}`);
            if (
                endSnake.path[
                    parseInt(`${startSnake.row}${startSnake.col}`)
                ] === 1
            ) {
                endSnakeConnection = parseInt(`${endSnake.row}${endSnake.col}`);
                console.log('econnect: ', endSnakeConnection);
                // viableMaze = true;
            }
            if (
                startSnake.path[parseInt(`${endSnake.row}${endSnake.col}`)] ===
                1
            ) {
                startSnakeConnection = parseInt(
                    `${endSnake.row}${endSnake.col}`
                );
                console.log('sconnect: ', startSnakeConnection);
                // viableMaze = true;
            }
        }
        console.log(counter);
        console.log('startSnake: ', startSnake);
        console.log('endSnake: ', endSnake);
        // console.log(newMaze);
        return newMaze;
    };
    //     while (viableMaze === false && mazesCreated < 10) {
    //         generatedMaze = searchForOtherSnake(newMaze);
    //         mazesCreated++;
    //         console.log(mazesCreated);
    //     }
    //     return generatedMaze;
    // };

    return searchForOtherSnake(blankMaze);
    // return generateCaves(blankMaze);
}
