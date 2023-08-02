import './App.css';
import Applications from './components/applications/Applications';
import Count from './components/counter/Count';
import MuiMode from './components/mui/MuiMode';
import Skill from './components/skills/Skill';
import Users from './components/users/Users';
import AppProvider from './provider/app-provider';

function App() {
  return (
       
      <div className="App">
        {/* <Applications/>
        <Skill/>
        <Count/>  */}
        <Users/>
     </div>
      //! ### Testing with App providers
    // <AppProvider>
    //   <div className="App">
    //     <MuiMode />
    //   </div>
    // </AppProvider>
  );
}

export default App;
