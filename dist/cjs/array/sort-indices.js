"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortIndicesByValues = void 0;
const defaultComparator = (a, b) => (a > b) - (a < b);
exports.sortIndicesByValues = (arr, cmp = defaultComparator) => [...arr.keys()].sort((i, j) => cmp(arr[i], arr[j]));
