module.exports = {
	//extends: ['eslint-config-codely/typescript'],
	//rules: {
	//	'no-console': 'warn'
	//},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json']
			},
			rules: {
                'no-console': 'warn',
				'@typescript-eslint/no-floating-promises': 'warn'
			}
		}
	]
};
