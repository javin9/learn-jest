declare const concat: {
	(value1: string, value2: string): string;
	(value1: number, value2: number): number;
};

declare const one: {
	(foo: string, bar: string): Promise<string>;
	(foo: number, bar: number): Promise<number>;
};

export {concat, one};