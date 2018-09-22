"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.h = (tag, props, ...children) => util_1.isComponent(tag)
    ? tag({ children, ...props })
    : { tag, children, props: props || {} };
