//import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div className="App">   
      { /*<h1>App component</h1>  */}   
      {/* <User data={{name:'chetan sharma',age:'34'}} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
