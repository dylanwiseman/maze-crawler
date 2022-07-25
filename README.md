# Sunset Cave Maze

What started as an attempt to visualize a maze-solving algorithm has turned into an art project of sorts.

The Sunset Cave Maze project can be split into 3 parts:

## 1. The Maze Solver

This is where I started. After bombing a coding interview, I set out to master recursive maze solving algorithms. After learning the code, I wanted to create a visualization for it. That was simple enough; the maze is a 2D array of 1s and 0s, so I can render a matrix of tiny divs and assign them classes according to whether they contained a 1 (gray), a 0 (black), or were part of the maze solvers chosen path through the maze (green). The 'explore' button triggers the mazeSolver and shows the path through the maze.

## 2. The Maze Builder

One maze is not enough, I need infinite mazes. Time for a maze building program. For this part, I intentionally did not search for existing solutions on the internet, I wanted to come up with something from my own mind, even if it was not the cleanest or most efficient. The solution I decided on was to have two "snakes", one starting at the start, one at the end. The 'startSnake' leaves a trail of 1s and is twice as likely to move right, and the 'endSnake' leaves a trail of 7s and is twice as likely to move left. The two snakes move through a matrix of blank 0s until they find each other (or take too long). The result looks less like a maze, and more like a cave. The 'new cave' button generates a new, random cave.

## 3. The Sunset :')

If it's a cave, might as well add some landscape around it. Some trees and mountains made in Photoshop, a CSS sunset, and a randomly generated starry night sky. Keep an eye out for the shooting star right after dusk, and the animal in the woods at midnight.
