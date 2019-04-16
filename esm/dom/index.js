import { overwrite } from '../object';
export const context2d = (...attributes) => (...settings) => overwrite(element('canvas')(...attributes).getContext('2d'), ...settings);
export const element = (name) => (...attributes) => overwrite(document.createElement(name), ...attributes);
export const append = (parent) => (...children) => children.forEach(child => parent.appendChild(child));
export const prevent = (fn) => (event) => { event.preventDefault(); fn && fn(event); };
export const raf = () => new Promise(resolve => requestAnimationFrame(resolve));
