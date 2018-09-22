export declare type Predicate<A> = (arg: A) => boolean;
export declare const not: <A>(predicate: Predicate<A>) => Predicate<A>;
export declare const and: <A>(...predicates: Predicate<A>[]) => Predicate<A>;
export declare const or: <A>(...predicates: Predicate<A>[]) => Predicate<A>;
