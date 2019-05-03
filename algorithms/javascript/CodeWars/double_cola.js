// first practice
function whoIsNext(names, r) {
  if (r <= names.length) {
    return names[r - 1];
  }
  const [sub, turn] = goal(r, names.length);
  return names[Math.floor(sub / turn)];
}

function goal(r, len, acc = len, turn = 2) {
  if (r <= acc + len * turn) {
    return [r - acc - 1, turn];
  }
  return goal(r, len, acc + len * turn, turn * 2);
}

// other's
function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) {
    r -= l;
    l *= 2;
  }
  return names[Math.ceil((names.length * r) / l) - 1];
}
