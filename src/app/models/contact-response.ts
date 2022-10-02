import { Contact } from "./contact";

export interface ContactResponse {
	results: Contact[],
	info: ContactResponseInfo,
}

export interface ContactResponseInfo {
	seed: string,
	results: number,
	page: number,
	version: string,
}