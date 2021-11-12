import Bonus from "./bonus/Bonus";
import Exercise from "./exercise/Exercise";

function App() {
  return (
   <div>
     <Exercise good="Awesome" bad="Terrible"/>
     <Bonus/>
   </div>
  );
}

export default App;
