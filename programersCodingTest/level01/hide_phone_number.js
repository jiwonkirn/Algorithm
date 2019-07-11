function solution(phone) {
  const a = phone.slice(0, phone.length - 4);
  return phone.replace(a, "*".repeat(a.length));
}

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s) {
  return "*".repeat(s.length - 4) + s.slice(-4);
}
