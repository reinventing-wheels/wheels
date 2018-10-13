"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../object");
exports.element = name => options => object_1.overwrite(document.createElement(name), options);
exports.append = (parent) => (...children) => children.forEach(child => parent.appendChild(child));
exports.prevent = (fn) => (event) => { event.preventDefault(); fn && fn(event); };
exports.frame = () => new Promise(resolve => requestAnimationFrame(resolve));
exports.context2d = (options) => exports.element('canvas')(options).getContext('2d');
