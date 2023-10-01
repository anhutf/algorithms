const list = [12, 7, 21, 67, 16, 1, 18, 35, 99, 50];

for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i] < list[j]) {
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
}

// list.sort((a, b) => b - a);

console.log(list);
