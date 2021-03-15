import './App.css';
import Person from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <Person lname={"Curry"} fname={"Stephen"} allStar={7} college={"Davidson"}></Person>
      <Person lname={"Durant"} fname={"Keven"} allStar={9} college={"Texas"}></Person>
      <Person lname={"Thompson"} fname={"Klay"} allStar={5} college={"Washington State"}></Person>
      <Person lname={"Green"} fname={"Draymond"} allStar={3} college={"Michigan State"}></Person>



      

    </div>
  );
}

export default App;
