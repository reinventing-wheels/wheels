import { overwrite } from '../object';
export const element = name => options => overwrite(document.createElement(name), options);
export const append = (parent) => (...children) => children.forEach(child => parent.appendChild(child));
export const prevent = (fn) => (event) => { event.preventDefault(); fn && fn(event); };
export const frame = () => new Promise(resolve => requestAnimationFrame(resolve));
export const context2d = (options) => element('canvas')(options).getContext('2d');
