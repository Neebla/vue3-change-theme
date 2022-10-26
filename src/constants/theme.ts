export interface themeModel {
	[propname: string]: SingleTheme;
}
export interface SingleTheme {
	[propname: string]: string;
}
export const themes: themeModel = {
	light: {
		color: '#fff'
	},
	dark: {
		color: '#EAC67C'
	}
};
