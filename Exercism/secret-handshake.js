// mine
const toHandshake = (item, index) => {
  if (item === "1") {
    return index === 0
      ? "wink"
      : index === 1
      ? "double blink"
      : index === 2
      ? "close your eyes"
      : "jump";
  } else {
    return item;
  }
};

const secretHandshake = input => {
  if (typeof input !== "number") {
    throw new Error("Handshake must be a number");
  }
  const binary = input.toString(2);
  if (binary.length < 5) {
    return binary
      .split("")
      .reverse()
      .map(toHandshake)
      .filter(item => item !== "0");
  } else {
    return binary
      .match(/\d{1,4}$/)[0]
      .split("")
      .reverse()
      .map(toHandshake)
      .reverse()
      .filter(item => item !== "0");
  }
};

// refer to another's
const secretHandshake = input => {
  if (typeof input !== "number") {
    throw new Error("Handshake must be a number");
  }
  const result = [];
  if (input & 1) result.push("wink");
  if (input & 2) result.push("double blink");
  if (input & 4) result.push("close your eyes");
  if (input & 8) result.push("jump");
  return input > 16 ? result.reverse() : result;
};

export { secretHandshake };
