// Trie 자료구조

// Javascript Object
class Trie {
  constructor() {
    this.next = {};
    this.isEnd = false;
  }

  insert(word) {
    let cur = this;
    for (const l of word) {
      if (!cur.next[l]) cur.next[l] = new Trie();
      cur = cur.next[l];
    }
    cur.isEnd = true;
  }

  search(word) {
    const cur = this.searchHelper(word);
    return cur && cur.isEnd;
  }

  startsWith(prefix) {
    const cur = this.searchHelper(prefix);
    return cur && true;
  }

  searchHelper(word) {
    let cur = this;
    for (const l of word) {
      const next = cur.next[l];
      if (!next) return false;
      cur = next;
    }
    return cur;
  }
}

// Javascript Map
// Leetcode 결과상 Map이 평균적으로 메모리를 덜 잡아먹고 더 빠르더라 (아주 조금)
class Trie {
  constructor() {
    this.next = new Map();
    this.isEnd = false;
  }

  insert(word) {
    let cur = this;
    for (const l of word) {
      if (!cur.next.has(l)) cur.next.set(l, new Trie());
      cur = cur.next.get(l);
    }
    cur.isEnd = true;
  }

  search(word) {
    const cur = this.searchHelper(word);
    return cur && cur.isEnd;
  }

  startsWith(prefix) {
    const cur = this.searchHelper(prefix);
    return cur && true;
  }

  searchHelper(word) {
    let cur = this;
    for (const l of word) {
      const next = cur.next.get(l);
      if (!next) return false;
      cur = next;
    }
    return cur;
  }
}
