const pair = {
  "house that Jack built.": "lay in",
  malt: "ate",
  rat: "killed",
  cat: "worried",
  dog: "tossed",
  "cow with the crumpled horn": "milked",
  "maiden all forlorn": "kissed",
  "man all tattered and torn": "married",
  "priest all shaven and shorn": "woke",
  "rooster that crowed in the morn": "kept",
  "farmer sowing his corn": "belonged to",
  "horse and the hound and the horn": "kept"
};

const list = Object.keys(pair);

function make(input, first) {
  if (first) return `This is the ${input}`;
  return `that ${pair[input]} the ${input}`;
}

export default class House {
  static verse(start) {
    const arr = [];
    for (let i = start - 1; i >= 0; i--) {
      arr.push(make(list[i], i === start - 1));
    }
    return arr;
  }

  static verses(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      if (arr[0]) arr.push("");
      arr.push(...House.verse(i));
    }
    return arr;
  }
}
