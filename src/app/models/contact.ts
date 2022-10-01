export interface Contact {
	gender: string,
	name: any,
	location: any, // TODO strongly type
	email: string,
	login: any // TODO strongly type
	dob: any // TODO strongly type
	registered: any // TODO strongly type
	phone: string,
	cell: string,
	id: ContactId 
	picture: any // TODO strongly type,
	nat: string,
}

interface ContactName {
	title: string,
	first: string,
	last: string,
}

interface ContactId {
	name: string,
	value: string,
}

interface ContactPicture {
	large: string,
	medium: string,
	thumbnail: string,
}