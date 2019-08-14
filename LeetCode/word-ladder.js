// mine
var ladderLength = function(beginWord, endWord, wordList) {
  const queue = [beginWord];
  let depth = 1;
  while (queue.length) {
    const len = queue.length;
    for (var j = 0; j < len; j++) {
      const cur = queue.shift();
      for (var i = 0; i < wordList.length; i++) {
        if (compare(cur, wordList[i])) {
          if (wordList[i] === endWord) {
            return ++depth;
          }
          queue.push(wordList.splice(i--, 1)[0]);
        }
      }
    }
    depth++;
  }
  return 0;
};

function compare(word1, word2) {
  let count = 0;
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
  }
  return count === 1;
}

// other's
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0; //input 2

  var currentLevel = new Set([beginWord]);
  var endLevel = new Set([endWord]);
  var dict = new Set(wordList);
  var steps = 1;

  while (currentLevel.size && endLevel.size) {
    steps++;

    if (currentLevel.size > endLevel.size) {
      [currentLevel, endLevel] = [endLevel, currentLevel];
    }

    var nextLevel = new Set();

    for (var word of currentLevel) {
      for (var i = 0; i < word.length; i++) {
        for (var ch = 97; ch < 122; ch++) {
          var newWord =
            word.slice(0, i) + String.fromCharCode(ch) + word.slice(i + 1);

          if (endLevel.has(newWord)) {
            return steps;
          }

          if (dict.has(newWord)) {
            nextLevel.add(newWord);
            dict.delete(newWord);
          }
        }
      }
    }

    currentLevel = nextLevel;
  }

  return 0;
};
