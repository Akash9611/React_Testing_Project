import './App.css';
import Applications from './components/applications/Applications';
import Count from './components/counter/Count';
import MuiMode from './components/mui/MuiMode';
import Skill from './components/skills/Skill';
import AppProvider from './provider/app-provider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* 
        <Applications/>
        <Skill/>
        <Count/> 
     */}
        <MuiMode />
      </div>
    </AppProvider>
  );
}

export default App;
