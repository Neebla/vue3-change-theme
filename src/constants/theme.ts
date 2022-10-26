export interface themeModel {
	[propname: string]: SingleTheme;
}
export interface SingleTheme {
	[propname: string]: string;
}
export const themes: themeModel = {
	light: {
		color: '#fff',
        border:'5px solid red'
	},
	dark: {
		color: '#EAC67C',
        border:'10px solid yellow'
	}
};
