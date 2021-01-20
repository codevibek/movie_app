import {Home} from './components/Home' 
import {Upcomming} from './components/Upcomming' 
import {Latest} from './components/Latest' 
import {Popular} from './components/Popular' 
import {Header} from './components/Header'
import {RightSidebar} from './components/RightSidebar'
import {Footer} from './components/Footer'
import { TopRated } from './components/TopRated'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalProvider} from './context/GlobalState'


import './App.css'
function App() {
  return (
    <GlobalProvider>

   
      <Router>

      
      <Header/>
      <div className="app__body">
        
        <div className="middle">
          <Switch>
            <Route  path="/latest">
              <Latest/>
            </Route>
            <Route  path="/upcomming">
              <Upcomming/>
            </Route>
            <Route  path="/popular">
              <Popular/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/toprated">
            <TopRated />

            </Route>
          </Switch>
        
        </div>
        <div className="right">
        <RightSidebar/>
        </div>

      </div>
      <Footer/>
      </Router>
      </GlobalProvider>
  );
}

export default App;
