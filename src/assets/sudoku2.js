let grid = [];

function generateFirstNine() {
	let nums = [];
	while(true) {
		let randomNum = Math.floor(Math.random() * 9) + 1;
		if (nums.length < 9 && !nums.includes(randomNum)) {
			nums.push(randomNum);
		} else if(nums.length == 9) {
			break;
		}

	}
	return nums;
}

function generate(){
	grid.push(generateFirstNine());
	for(let i = 0; i < 8; i++){
		if (i == 2 || i == 5) {
			grid.push(shift(grid[i], 1));
		} else {
			grid.push(shift(grid[i], 3));
		}
	}

	grid = shuffleRows(grid);
	grid = shuffleColumn(grid);
}

function shift(arr, by){
	const numsToShift = arr.filter((num, i) => i < by);
	const numsLeft = arr.filter((num, i) => i >= by);
	return [...numsLeft, ...numsToShift];
}

function shuffleRows(grid){
	let newGrid = [];
	grid.forEach((row, i) => {
		if (i % 3 == 0) {
			newGrid.push([row]);
		} else {
			newGrid[Math.trunc(i / 3)].push(row);
		}
	});
	newGrid = newGrid.sort(() => Math.random() - 0.5);
	return newGrid.flat();

}

function shuffleColumn(arr){
	let cols = rowsToCols(arr);
	cols = cols.sort(() => Math.random() - 0.5);
	return colsToRow(cols);
}

function rowsToCols(arr){
	var newArr = [[],[],[]];
	arr.forEach(row => {
		row.forEach((cell, j) => {
			newArr[Math.trunc(j / 3)].push(cell);
		});
	});
	return newArr;
}

function colsToRow(arr){
	var newArr = [];
	arr.forEach((cols, i) => {
		cols.forEach((row, j) => {
			if(i == 0 && j % 3 == 0) {
				newArr.push([row])
			} else {
				newArr[Math.trunc(j / 3)].push(row);
			}
		});
	});
	return newArr;
}

// this func is not nessesery
function rowsToSections(grid){
	let newArr = [];
	grid.forEach((row, i) => {
		if(i % 3 == 0) {
			newArr.push([]);
			newArr.push([]);
			newArr.push([]);
		}
		row.forEach((cell, j) => {
			newArr[Math.trunc(j / 3) + (Math.trunc(i / 3) * 3)].push(cell);
		});
	});

	return newArr;
}

function numbersToShowByDifficulty(grid, level){
	let newArr = [];
	let difficultyLevels = [[3,5], [2,4], [1,3]];

	grid.forEach(section => {
		let qty = getrandomFromRange(difficultyLevels[level]);
		newArr.push(hideNumbers(section, qty));
	});
	return newArr;
}

function createSudoku(grid, diffLevel){
	const numsToShow = numbersToShowByDifficulty(grid, diffLevel);
	return grid.map((row, i) => row.map((cell, j)=> {
		if (numsToShow[i].includes(j)) {
			return { number: cell, show: true, valid: true};
		} else {
			return { number: cell, show: false, valid: true};
		}
	}))
}

function getrandomFromRange(range) {
	const [min, max] = range;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideNumbers(section, qty){
	let temp = [];
	let random = getrandomFromRange([0,8]);
	while(temp.length < qty){
		if (!temp.includes(random)) {
			temp.push(random);
		}
		random = getrandomFromRange([0,8]);
	}
	return temp;
}


function draw(sudoku){
	let html = "<table>";
	sudoku.forEach((section, i) => {
			html += "<tr>";
		section.forEach(cell => {
			if (cell.show) {
				html += `<td>${cell.number}</td>`;
			} else {
				html += "<td></td>"
			}
		})
			html += "</tr>";
		})
	html += "</table>";
	document.write(html);
}

generate();

let difficulty = prompt("choose difficulty");
const sudoku = createSudoku(grid, difficulty);
draw(sudoku);
