import React, { useState } from 'react';
// import maze from './maze';
import mazeBuilder from './mazeBuilder';
// import blankMaze from './maze';
import Trees from './trees.png';
import Mountains from './mountains1.png';
import MountainsR from './mountainsright.png';

export default function MazeCrawler() {
    // const maze = mazeBuilder();
    // const messages = [];
    const [messages, setMessages] = useState([]);
    const [maze, setMaze] = useState(mazeBuilder());

    function crawl(start) {
        // console.log('starting crawl');
        console.log(maze);
        const path = [];
        let solved = false;
        const traverse = (row, col) => {
            if (maze[row][col] === 2) {
                path.push([row, col]);
                solved = true;
                messages.push(
                    `MazeCrawler finished the maze at Row: ${row}, Col: ${col}`
                );
                // console.log('solved!');

                path.forEach((step) => {
                    document
                        .querySelector(`#row-${step[0]}`)
                        ?.querySelector(`#box-${step[1]}`)
                        .classList.add('path');
                });
                // setMessages([
                //     ...messages,
                //     `MazeCrawler finished the maze at Row: ${row}, Col: ${col}`,
                // ]);
                return path;
            } else if (
                (maze[row][col] === 1 || maze[row][col] === 7) &&
                !solved
            ) {
                // console.log('traversing');
                messages.push(`Traversed to: (Row: ${row}, Col: ${col})`);
                path.push([row, col]);
                maze[row][col] = 9;
                if (row < maze.length - 1 && !solved) {
                    traverse(row + 1, col);
                }
                if (col < maze[row].length && !solved) {
                    traverse(row, col + 1);
                }
                if (row > 0 && !solved) {
                    traverse(row - 1, col);
                }
                if (col > 0 && !solved) {
                    traverse(row, col - 1);
                }
                if (!solved) {
                    messages.push('backtracking from: ', row, col);
                    path.pop();
                }
            }
        };

        traverse(...start);
        return messages;
    }
    const starGenerator = () => {
        let starArray = [];
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * 100;
            let y = Math.random() * 24;
            starArray.push(
                <div
                    className="star"
                    style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        backgroundColor: `${
                            Math.floor(x) % 2 === 0
                                ? 'white'
                                : Math.floor(x) % 3 === 0
                                ? 'pink'
                                : 'yellow'
                        }`,
                    }}
                ></div>
            );
        }
        return starArray;
    };

    return (
        <div className="container" id="gradient">
            {starGenerator()}
            <h1>It's getting late... you should probably head home...</h1>
            <div className="trees">
                <img src={Trees} alt="" width="200" height="100" />
            </div>
            <div className="trees-two">
                <img src={Trees} alt="" width="200" height="100" />
            </div>
            <div className="mountains-one">
                <img src={MountainsR} alt="" width="400" height="100" />
            </div>
            <div className="mountains-two">
                <img src={Mountains} alt="" width="460" height="130" />
            </div>
            <div className="eyeone"></div>
            <div className="eyetwo"></div>
            <div className="environment">
                <div className="maze-container">
                    {maze.map((row, index) => {
                        return (
                            <div
                                className="box-container"
                                id={`row-${index}`}
                                key={index}
                            >
                                {row.map((box, index) => {
                                    return (
                                        <div
                                            className={`box ${
                                                box === 1 ||
                                                box === 2 ||
                                                box === 7
                                                    ? 'one'
                                                    : ''
                                            } ${box === 9 ? 'nine' : ''} 
                                         ${box === 2 ? 'two' : ''}`}
                                            key={index}
                                            id={`box-${index}`}
                                        ></div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div>
                    <button
                        className="start-button"
                        onClick={() => {
                            crawl([0, 4]);
                        }}
                    >
                        explore
                    </button>
                    <button
                        className="new-button"
                        onClick={() => {
                            setMaze(mazeBuilder());
                        }}
                    >
                        new cave
                    </button>
                </div>
                {/* <div>
                    {
                        <div>
                            {messages.map((message, index) => {
                                return <h6 key={index}>{message}</h6>;
                            })}
                        </div>
                    }
                </div> */}
            </div>
        </div>
    );
}
