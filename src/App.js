import Header from './components/Header/Header'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/profile/profile'
import Main from './components/Main/main'

function App() {
  return (
     <div className="app__header">
       <Header />
       <div className="app__body">
       <div className="app__body-navbar">
       <Navbar />
       </div>

       <div className="app__body-main">
       <div className="app__body-main_1">
       <Main /> 
       <Main />
       <Main />

       </div>
       <div className="app__body-main_1">
       <Main /> 
       <Main />
       <Main />
       
       </div>
       <div className="app__body-main_1">
       <Main /> 
       <Main />
       <Main />
       
       </div>
       </div>
       
       <div className="app__body-profile">
       <Profile />
       </div>
       
     </div>
    </div>
  );
}

export default App;
