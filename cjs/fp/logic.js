"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iter_1 = require("./iter");
exports.not = (predicate) => arg => !predicate(arg);
exports.and = (...predicates) => arg => iter_1.reduce((acc, p) => acc && p(arg))(true)(predicates);
exports.or = (...predicates) => arg => iter_1.reduce((acc, p) => acc || p(arg))(false)(predicates);
