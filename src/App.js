 
import './modules/scss/main.scss';
import 'normalize.css'; // Note this
 
import { HashRouter } from "react-router-dom";



import Header from './modules/header/header.jsx';
import Main from './modules/main/Main.jsx';
import Footer from './modules/footer/footer.jsx';

import Mainpage from './modules/main/pages/Mainpage';
import Fb from './modules/main/pages/fb';
import Animator from './modules/main/pages/Animator';
 
function App() {
    const nav = {
      "main": ["Главная" , Mainpage],
      "fb": [" Фанцузский бульвар" , Fb],
      "caravan": [" Караван" , Mainpage],
      "art": [" Арт завод " , Mainpage],
      "animator": [" Аниматоры " , Animator],
      
      
    }
 

  return (
 
    <HashRouter basename='/'>
<div className="wrapper">

<Header nav={nav}/>
 
  
<Main nav={nav}/>

<Footer/>


</div> 

 

</HashRouter>

  );
}

export default App;
