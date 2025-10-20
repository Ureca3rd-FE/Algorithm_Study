const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = input[0];
const sequence = input.slice(1);

const stack = [];
const result = [];
let current = 1;
let possible = true;