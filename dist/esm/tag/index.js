export const mapArgs = (fn, tag) => (strings, ...args) => tag(strings, ...args.map(fn));
export const mapStrings = (fn, tag) => (strings, ...args) => tag(strings.map(fn), ...args);
export const mapResult = (fn, tag) => (strings, ...args) => fn(tag(strings, ...args));
export const raw = (tag) => (strings, ...args) => tag(strings.raw, ...args);
export const tag = (fnArg, fnStr, fnRes) => mapResult(fnRes, mapStrings(fnStr, mapArgs(fnArg, identity)));
export const identity = ([first, ...rest], ...args) => args.reduce((acc, arg, i) => acc + arg + rest[i], first);
