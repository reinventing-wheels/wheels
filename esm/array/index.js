import { random } from '../math';
export const pick = (items) => items[items.length * random() | 0];
export const shuffle = (items) => {
    for (let i = items.length; i > 0;) {
        const j = Math.floor(Math.random() * i--);
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
};
