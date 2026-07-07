export const tokens = {
	colors: {
		accent: '#ededec',
		accentDark: '#c7c7c5',
		background: '#0a0a0b',
		backgroundPaper: '#121214',
		textPrimary: '#ededec',
		textSecondary: '#8a8a8d',
		textTertiary: '#5a5a5d',
		border: 'rgba(255,255,255,0.11)',
		status: '#5ce08a',
	},
	radius: {
		sm: 8,
		md: 16,
		lg: 24,
		pill: 999,
	},
	fontFamily: "'Hanken Grotesk', system-ui, Avenir, Helvetica, Arial, sans-serif",
	fontFamilyHeading: "'Space Grotesk', system-ui, sans-serif",
	fontFamilyMono: "'JetBrains Mono', ui-monospace, monospace",
};

export const monoLabelSx = {
	fontFamily: tokens.fontFamilyMono,
	fontSize: '12px',
	letterSpacing: '0.04em',
	color: tokens.colors.textSecondary,
	textTransform: 'uppercase' as const,
};
