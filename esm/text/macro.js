import { and, or } from '../re';
import { proto } from '../object';
export const compiler = (exprʹ = '{', exprʺ = '}', ctrlʹ = '{#', ctrlʺ = '#}') => {
    const expr = and()(exprʹ, /(?<expr>[^]*?)/, exprʺ);
    const ctrl = and()(ctrlʹ, /(?<ctrl>[^]*?)/, ctrlʺ);
    const re = exprʹ.length > ctrlʹ.length
        ? or('ug')(expr, ctrl)
        : or('ug')(ctrl, expr);
    return (macro, scope = {}, ref = '$', acc = 'Σ') => {
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
        const fn = new Function(`{${[...proto(scope)]}}`, ref, body);
        return fn.bind(null, scope);
    };
};
export const compile = compiler();
