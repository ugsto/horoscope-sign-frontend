import React, {type PropsWithChildren} from 'react';

export type AuthorProperties = {
	name: string;
	email: string;
	className?: string;
} & PropsWithChildren;

export function Author({name, email, className}: AuthorProperties) {
	return (
		<p className={className}>
			{name} {'<'}
			{<a href={`mailto:${email}`}>{email}</a>}
			{'>'}
		</p>
	);
}
