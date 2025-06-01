import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
	files: ['*.ts', '*.tsx'],
	parserOptions: {
	project: ['./tsconfig.json'],
	},
		rules: {
			semi: ["warn", "always"],
			'no-console': 'warn',
			'@typescript-eslint/no-floating-promises': 'warn'
            
		},
	},
];