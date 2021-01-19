import {Home} from './components/Home' 
import {Header} from './components/Header'
import {RightSidebar} from './components/RightSidebar'
import {LeftSidebar} from './components/LeftSidebar'
import {Footer} from './components/Footer'
import { TopRated } from './components/TopRated'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_body">
        <RightSidebar/>
        {/* <TopRated /> */}
        <Home/>
        <LeftSidebar />

      </div>
      <Footer/>
    </div>
  );
}

export default App;
