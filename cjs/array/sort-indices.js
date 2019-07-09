"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultComparator = (a, b) => (a > b) - (a < b);
exports.sortIndicesByValues = (arr, cmp = defaultComparator) => [...arr.keys()].sort((i, j) => cmp(arr[i], arr[j]));
