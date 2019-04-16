"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../object");
exports.context2d = (...attributes) => (...settings) => object_1.overwrite(exports.element('canvas')(...attributes).getContext('2d'), ...settings);
exports.element = (name) => (...attributes) => object_1.overwrite(document.createElement(name), ...attributes);
exports.append = (parent) => (...children) => children.forEach(child => parent.appendChild(child));
exports.prevent = (fn) => (event) => { event.preventDefault(); fn && fn(event); };
exports.raf = () => new Promise(resolve => requestAnimationFrame(resolve));
