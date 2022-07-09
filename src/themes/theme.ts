import { createTheme } from '@mui/material';
import {
	blue,
	indigo,
	// deepPurple,
	// lightBlue,
	// cyan,
	// teal,
	// grey,
	// blueGrey,
} from '@mui/material/colors';

const theme = createTheme({
	typography: {
		fontFamily: 'Roboto',
	},
	palette: {
		primary: {
			light: blue[300],
			main: blue[500],
			dark: blue[700],
		},
		secondary: {
			light: indigo[300],
			main: indigo[500],
			dark: indigo[700],
		},
	},
});

export default theme;
