import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6b35',
    },
    secondary: {
      main: '#a6a6a6',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a6a6a6',
    },
  },
  typography: {
    fontFamily: [
      'JetBrains Mono',
      'Fira Code',
      'Roboto Mono',
      'monospace',
    ].join(','),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.7)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This ensures the dark background is applied globally */}
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
