import React, { useState } from 'react';
import mazeBuilder from './mazeBuilder';
import Trees from './trees.png';
import Mountains from './mountains1.png';
import MountainsR from './mountainsright.png';
import exploreCave from './exploreCave';

export default function MazeCrawler() {
    const [maze, setMaze] = useState(mazeBuilder());

    const starGenerator = () => {
        let starArray = [];
        for (let i = 0; i < 300; i++) {
            let x = Math.random() * 100;
            let y = Math.random() * 300;
            starArray.push(
                <div
                    className="star"
                    style={{
                        width: `${Math.floor(y) % 2 === 0 ? '1px' : '2px'}`,
                        height: `${Math.floor(y) % 2 === 0 ? '1px' : '2px'}`,
                        top: `${y}px`,
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

            <svg width="100" height="100" className="sun">
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="yellow"
                    // className="setColor"
                />
            </svg>
            <div className="shooting-star"></div>
            {/* <h1>It's getting late... you should probably head home...</h1> */}
            <div className="mountains-one">
                <img src={MountainsR} alt="" width="400" height="100" />
            </div>
            <div className="mountains-two">
                <img src={Mountains} alt="" width="460" height="130" />
            </div>
            <div className="trees">
                <img src={Trees} alt="" width="200" height="100" />
            </div>
            <div className="trees-two">
                <img src={Trees} alt="" width="200" height="100" />
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
                            exploreCave([0, 4], maze);
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
            </div>
        </div>
    );
}
