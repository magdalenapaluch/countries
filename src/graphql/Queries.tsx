import { gql } from "@apollo/client";

export const GET_COUNTRIES_QUERY = gql`
	query getCountriesInfo {
		continents {
			code
			name
			countries {
				name
				emoji
				languages {
					name
				}
			}
		}
	}
`;
