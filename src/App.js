import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import background from './images/background.jpg'; 
const App = () => <PortfolioContainer />;

function App(){
    return(
        <div>
             <img src={background} alt="this is the background image" />
        </div>
    )
}

export default App;