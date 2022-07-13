import React, { useState } from 'react';
import maze from './maze';

export default function MazeCrawler() {
    // const messages = [];
    const [messages, setMessages] = useState([]);

    function crawl(start) {
        const path = [];
        let solved = false;
        const traverse = (row, col) => {
            if (maze[row][col] === 2) {
                path.push([row, col]);
                solved = true;
                messages.push(
                    `MazeCrawler finished the maze at Row: ${row}, Col: ${col}`
                );

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
            } else if (maze[row][col] === 1 && !solved) {
                messages.push(`Traversed to: (Row: ${row}, Col: ${col})`);
                path.push([row, col]);
                maze[row][col] = 9;
                if (row < maze.length - 1 && !solved) {
                    traverse(row + 1, col);
                }
                if (row > 0 && !solved) {
                    traverse(row - 1, col);
                }
                if (col < maze[row].length && !solved) {
                    traverse(row, col + 1);
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

    return (
        <div className="container">
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
                                            box === 1 ? 'one' : ''
                                        } ${box === 9 ? 'nine' : ''} ${
                                            box === 2 ? 'two' : ''
                                        }`}
                                        key={index}
                                        id={`box-${index}`}
                                    ></div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <button
                className="start-button"
                onClick={() => {
                    crawl([3, 0]);
                }}
            >
                start
            </button>
            <div>
                {
                    <div>
                        {messages.map((message, index) => {
                            return <h6 key={index}>{message}</h6>;
                        })}
                    </div>
                }
            </div>
        </div>
    );
}
