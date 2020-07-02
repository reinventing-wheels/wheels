import { random } from '../math';
export const pick = (items) => items[items.length * random() | 0];
export const shuffle = (items) => {
    for (let i = items.length; i > 0;) {
        const j = Math.floor(Math.random() * i--);
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
};
export const weighted = (items) => {
    const total = items.reduce((acc, [w]) => acc + w, 0);
    return () => {
        const r = Math.random() * total;
        let acc = 0;
        for (const [w, item] of items) {
            if ((acc += w) > r)
                return item;
        }
        throw new Error();
    };
};
export * from './sort-indices';
