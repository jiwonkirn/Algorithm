// first
process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(new Array(b).fill("*".repeat(a)).join("\n"));
});

// second
process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
