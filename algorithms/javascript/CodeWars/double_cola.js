// first practice
function whoIsNext(names, r) {
  const [sub, turn] = goal(r, names.length);
  return names[Math.floor(sub / turn)];
}

function goal(r, len, acc = 0, turn = 1) {
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
