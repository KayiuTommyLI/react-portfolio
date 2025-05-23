import React, {useState, useEffect, useMemo} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
//   Contact,
  Certifications,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    // Create MUI theme based on the current mode
    const muiTheme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: mode as 'light' | 'dark', // Cast mode to 'light' | 'dark'
            // You can further customize the MUI palette here if needed
            // For example, to make card backgrounds specific shades:
            background: {
              paper: mode === 'dark' ? '#1c2128' : '#ffffff', // Card background
              default: mode === 'dark' ? '#0d1116' : '#f8f9fa', // Page background
            },
            text: {
              primary: mode === 'dark' ? '#e6edf3' : '#24292f',
              secondary: mode === 'dark' ? '#768390' : '#57606a',
            },
          },
          typography: { // Ensure your global font styles from index.scss are somewhat matched or defined here for MUI components
            fontFamily: '"Lato", sans-serif', // Matching your index.scss
            // You can define h1, h2, etc. styles here too if MUI components are used for them elsewhere
          },
        }),
      [mode]
    );

    return (
      // Apply the MUI theme
      <ThemeProvider theme={muiTheme}>
        <CssBaseline /> {/* MUI's baseline normalizer, helpful with ThemeProvider */}
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Certifications/> {/* Certifications component will now correctly get theme mode */}
            </FadeIn>
            <Footer />
        </div>
      </ThemeProvider>
    );
}

export default App;