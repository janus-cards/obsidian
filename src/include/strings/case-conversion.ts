export class UnstyledSymbol {
	terms: string[];

	constructor(terms: string[]) {
		this.terms = terms;
	}
}

/**
 * Convert a symbol to camelCase
 */
export class CamelCase {
	static style(symbol: UnstyledSymbol): string {
		const eachTermUpper = symbol.terms
			.map((term) => term[0].toUpperCase() + term.slice(1))
			.join("");
		if (eachTermUpper.length === 0) {
			return "";
		}
		return eachTermUpper[0].toLowerCase() + eachTermUpper.slice(1);
	}

	static unstyle(symbol: string): UnstyledSymbol {
		return new UnstyledSymbol(symbol.split(/[_-]/));
	}
}

/**
 * Convert a symbol to kebab-case
 */
export class KebabCase {
	static style(symbol: UnstyledSymbol): string {
		return symbol.terms.join("-").toLowerCase();
	}

	static unstyle(symbol: string): UnstyledSymbol {
		return new UnstyledSymbol(symbol.split("-"));
	}
}
