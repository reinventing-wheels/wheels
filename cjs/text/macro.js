"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const re_1 = require("../re");
const object_1 = require("../object");
exports.compiler = (exprʹ = '{', exprʺ = '}', ctrlʹ = '{#', ctrlʺ = '#}') => {
    const expr = re_1.and()(exprʹ, /(?<expr>[^]*?)/, exprʺ);
    const ctrl = re_1.and()(ctrlʹ, /(?<ctrl>[^]*?)/, ctrlʺ);
    const re = exprʹ.length > ctrlʹ.length
        ? re_1.or('ug')(expr, ctrl)
        : re_1.or('ug')(ctrl, expr);
    return (macro, locals = {}, ref = '$', acc = 'Σ') => {
        let ops = '';
        for (let op = '=', cursor = 0;;) {
            const match = re.exec(macro);
            const part = match
                ? macro.slice(cursor, cursor = match.index)
                : macro.slice(cursor);
            ops += op + JSON.stringify(part);
            if (!match)
                break;
            const { expr, ctrl } = match.groups;
            ops += ctrl ? `;${ctrl};` : `+(${expr})`;
            op = ctrl ? `${acc}+=` : '+';
            cursor += match[0].length;
        }
        const body = `let ${acc}${ops};return ${acc}`;
        const fn = new Function(`{${[...object_1.proto(locals)]}}`, ref, body);
        return fn.bind(null, locals);
    };
};
exports.compile = exports.compiler();