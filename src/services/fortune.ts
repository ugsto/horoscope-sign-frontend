import {getEnvironment} from '@/utils/get-environment';
import axios from 'axios';

export type Fortune = {
	colorName: string;
	colorHex: string;
	number: number;
	event: string;
};

const signApiUrl = getEnvironment(
	'API_URL',
	'https://horoscope-sign.herokuapp.com',
);
const signApiEndpoint = '/api/v1/sign';

export async function getFortune(signName: string) {
	const url = `${signApiUrl}${signApiEndpoint}/${signName}`;

	try {
		const response = await axios.get(url);

		return response.data as Fortune;
	} catch (error) {
		throw error;
	}
}
