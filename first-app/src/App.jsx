import Home from "./Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Homeclass from "./Components/Homeclass";
import Aboutclass from "./Components/Aboutclass";
import Contactsclass from "./Components/Contactsclass";
//Functional Component
function App() {
  return(
    //div or <> can be used to add multiple statements inside return
    <div>    
    <h1>Welcome to React</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Deserunt odit ducimus rerum voluptatem ab nesciunt, hic molestias dolore recusandae non autem, 
    atque velit deleniti, fuga alias harum consectetur repellendus numquam.</p>
    <Home/>
    <About/>
    <Contacts/>
    <Homeclass/>
    <Aboutclass/>
    <Contactsclass/>
    <h2>ThankYou</h2>
  </div>
  )
}
export default App;