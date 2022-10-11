import {BrowserRouter,Route} from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
   <BrowserRouter>
     <Route path="/About" component={About} />
   </BrowserRouter>
  );
}

export default App;
