// https://stackoverflow.com/questions/51465182/how-to-remove-index-signature-using-mapped-types/66252656#66252656
export type RemoveIndex<T> = {
	[K in keyof T as string extends K
		? never
		: number extends K
		? never
		: symbol extends K
		? never
		: K]: T[K];
};

export type FilterValuePredicate<T, Predicate> = {
	[K in keyof T as T[K] extends Predicate ? K : never]: T[K];
};
