// right angled triangle
for( let i = 0; i<=5; i++){
    let str ="*";
    console.log(str.repeat(i));
}

// solid rectangle patter
for( let i = 0; i<=5; i++){
    let str ="*";
    console.log(str.repeat(5));
    }

// inverted triangle patter 
let rows = 5;
for (let i = rows; i > 0; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// pyramid patter 
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}


// inverted pyramid
let rows = 5;
for (let i = rows; i > 0; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// hollow rectangle
let rows = 5, columns = 7;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= columns; j++) {
    if (i === 1 || i === rows || j === 1 || j === columns) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

// cross
let rows = 5;
const mid = Math.floor(rows / 2);
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= rows; j++) {
    if (i === mid || j === mid) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

// X
let rows = 5;
const mid = Math.floor(rows / 2); 

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= rows; j++) {
    
    if (i === j || i + j === rows + 1) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

// number triangle 
let rows = 5, count = 1;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += count + " ";
    count++;
  }
  console.log(line.trim()); // Remove trailing space
}

// repeated number
let rows = 4, number = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= rows; j++) {
    line += number + " ";
  }
  console.log(line.trim());
}

// inverted number triangle
let rows = 5, count = rows * rows;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += count + " ";
    count--;
  }
  console.log(line.trim());
}

// inverted number square
let rows = 5, count = rows * rows;
for (let i = 1; i <= rows; i++) {
  let line = " ";
  for (let j = 1; j <= rows; j++) {
    line += count + "";
    count--;
  }
  console.log(line.trim());
}

// right alligned triangle
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  
  for (let j = 1; j <= rows - i; j++) {
    line += " ";
  }
  
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// inverted number ladder 
let rows = 5;
for (let i = rows; i > 0; i--) {
  let line = "";
 
  for (let j = 1; j <= rows - i; j++) {
    line += " ";
  }
  
  for (let j = i; j >= 1; j--) {
    line += j;
  }
  console.log(line);
}

// alphabet triangle
let rows = 5;
let char = 'A';
for (let i = 1; i <= rows; i++) {
  let line = " ";
  
  for (let j = 1; j <= rows - i; j++) {
    line += "";
  }
  
  for (let j = 1; j <= i; j++) {
    line += char;
    char = String.fromCharCode(char.charCodeAt(0) + 1); // Increment character
  }
  console.log(line);
}
