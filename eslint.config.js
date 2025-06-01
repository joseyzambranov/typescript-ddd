import eslintConfigCodely from 'eslint-config-codely'; 

export default [//{
	//extends: ['eslint-config-codely/typescript'],
	//rules: {
	//	'no-console': 'warn'
	//},
	//overrides: [
    ...eslintConfigCodely.ts,
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
	//]
//};
]
