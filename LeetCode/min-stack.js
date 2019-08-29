/**
 * Min Stack
 * @level { EASY }
 */

// mine
var MinStack = function() {
  this.stack = [];
  this.min = Infinity;
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min > x) this.min = x;
};

MinStack.prototype.pop = function() {
  if (!this.stack.length) return;
  const cur = this.stack.pop();
  if (this.min === cur)
    this.min = this.stack.length ? Math.min(...this.stack) : Infinity;
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min;
};

// other's
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.minStack.length) {
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
  } else {
    this.minStack.push(x);
  }
};

MinStack.prototype.pop = function() {
  if (!this.stack.length) return;
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
