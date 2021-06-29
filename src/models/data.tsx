type Continents = {
	code: string;
	name: string;
	countries: CountryType[];
}

export type CountryType = {
	name: string;
	emoji: string;
	languages: Language[];
}

type Language = {
	name: string;
}

export type Data = {
	continents: Continents[];
}
