export const theme = {
	colors: {
		primary: '#a67c00',
		secondary: '#ffffff',
		error: '#ff0000',

		textDark: '#333333',
		textLight: '#f8f8f8',
		key: '#ffd700',

		popupBackground: '#291b3e',
		cardBackground: '#291b3e',
	},
	fontSize: {
		title: '2rem',
		default: '1rem',

		cardTitle: '1.25rem',
	},
	sizes: {
		headerMargin: '1rem',

		cardPadding: '1.25rem',
		cardGap: '0.5rem',

		popupPadding: '1rem',
		popupTitleMargin: '0 0 1rem 0',
		popupSectionGap: '.25rem',

		buttonPadding: '0.25rem .5rem',
	},
	borderRadius: {
		default: '0',
	},
	boxShadow: {
		default:
            '0 0 2px rgba(166, 124, 0, 0.4), inset 0 0 2px rgba(166, 124, 0, 0.4)',
	},
};

export type Theme = typeof theme;
