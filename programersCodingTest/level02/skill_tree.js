// 정규식 사용
function solution(skill, skill_trees) {
  const reg = new RegExp(`[^${skill}]`, "g");
  return skill_trees
    .map(i => i.replace(reg, ""))
    .filter(i => skill.indexOf(i) === 0 || i === "").length;
}

// 정규식 사용 X
function solution(skill, skill_trees) {
  return skill_trees.filter(i => {
    let str = "";
    for (let item of i) {
      if (skill.includes(item)) str += item;
    }

    let result = true;
    return skill.indexOf(str) === 0 || str === "";
  }).length;
}
