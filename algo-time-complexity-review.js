/////////// Prompt 1 ///////////
/////////// time complexity: O(n)
function findMax(array){
  var max = -Infinity;
  for (var i = 0; i < array.length; i++){   //n
    if (array[i] > max){                    //1
      max = array[i];                       //1   = 2n
    }
  }
  return max; 
}


/////////// Prompt 2 ///////////
/////////// time complexity: O(n)
  // Array.prototype.indexOf() method returns the first index at which a given
  // element can be found in the array, or -1 if not present
  
function contains(array, target){
  return array.indexOf(target) > -1; // iterating over the entire array to check against target, so n
}


/////////// Prompt 3 ///////////
/////////// time complexity: O(n)
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1; // .slice(start) 1
                                                  // indexOf() n, so 1n
}

/*
var indices = [];
var arr = ['a', 'b', 'a', 'c', 'a', 'd'];
var elem = 'a';
var idx = arr.indexOf(elem);

for(var i = 0; i < arr.length; i++) {   
  if(arr[i] === idx) {
  
    indices.push(idx);
  }
} 

while (idx != -1) {
  indices.push(idx);
  idx = arr.indexOf(elem, idx + 1);
}
console.log(indices); // [0, 2, 4]
*/



/////////// Prompt 4 ///////////
/////////// time complexity: O(n)
function square(array){
  for (var i = 0; i < 3; i++){        // n  = 1n
    array[i] = array[i] * array[i];   // 1  
  }
  return array;
}

/////////// Prompt 5 ///////////
/////////// time complexity: O(n^2) 
function repeat(array){
  var repeat = [];
  for (var j = 0; j < 10; j++){               // n  = 1n    = 1n * 1n   =n^2
    repeat[j] = [];                           // 1
    for (var i = 0; i < array.length; i++){   // n  = 1n
      repeat[j].push(array[i]);               // 1
    }
  }
  return repeat; 
}
//what if we replace 10 with a parameter?     // if param means variable, should not effect n complexity


/////////// Prompt 6 ///////////
/////////// time complexity: O(n)
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number   
    var temp = num1;                                            // 1    = 3 * 1n    = 3n
    num1 = num2;                                                // 1
    num2 = temp;                                                // 1
  }
  for (var i = num1; i > 1; i--){                               // n    = 1n
    if (num1 % i === 0 && num2 % i === 0){                      
      return i;                                                 // 1
    }
  }
  return 1;
}


/////////// Prompt 7 ///////////
/////////// time complexity: O(n^2)
function countChar(string){
  var counts = {};                                
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){        // n    = 3n    = 3n    //slides answer 3n + 1/2(n^2 - n)?
    currChar = string[i];                         // 1
    currCharCount = 1;                            // 1
    for (var j = i+1; j < string.length; j++){    // n    = 1*n
      if (currChar === string[j]){          
        currCharCount++;                          // 1
      }
    }
    if (!counts.hasOwnProperty(currChar)){        
      counts[currChar] = currCharCount;           // 1
    }
  }
  return counts;
}


/////////// Prompt 8 ///////////
/////////// time complexity: 
var factorial = function(num){
  if (num < 0){
    return;                             // 1 
  }
  if (num === 0 || num === 1){
    return 1;                           // 1
  } else {
    return num * factorial(num-1);      // recurses back up so 2^n?
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: O(log n)  
function tournament(players){                               // from the slides, diagram is logarithmic 
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); 
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);
  }
}



/////////// Prompt 10 ///////////
/////////// time complexity: 
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}


/////////// Prompt 11 ///////////
/////////// time complexity: 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity: 
//this will require some math to determine 

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}







