
//  Import importent class 
 import LandingPage from "./Page/landingPage.js";
 import { CustomeIteamContext } from "./context.js";
 import Nav from "./component/nav/nav.js";
function App() {
  
  return (

    <div className="App">
        <CustomeIteamContext>
        <Nav />
        <LandingPage/>
        </CustomeIteamContext>
     
    </div>

  );
}

export default App;
