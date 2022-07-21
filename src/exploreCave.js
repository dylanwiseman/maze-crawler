function exploreCave(start, maze) {
    const path = [];
    let solved = false;
    const traverse = (row, col) => {
        if (maze[row][col] === 2) {
            path.push([row, col]);
            solved = true;

            path.forEach((step) => {
                document
                    .querySelector(`#row-${step[0]}`)
                    ?.querySelector(`#box-${step[1]}`)
                    .classList.add('path');
            });
            return path;
        } else if ((maze[row][col] === 1 || maze[row][col] === 7) && !solved) {
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
                path.pop();
            }
        }
    };

    traverse(...start);
}

export default exploreCave;
