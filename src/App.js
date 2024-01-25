import './App.css';
import MessageCard from './components/MessageCard';
import WishCard from './components/WishCard';
import Propsstate from './components/Propsstate';                 
import Funpropsstates from './components/Funpropsstate';
import Clastate from './components/Clastate';
import Funstate from './components/Funstate';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <nav className='navbar'>
      <span>WELCOME TO APP COMPONENT</span>
    </nav>
    <MessageCard/>
    <MessageCard/>
    <WishCard/>
    <Propsstate name="kid" age={80}/>
    <Propsstate name="PRADEEP" age={25}/>          

    {/* CODE ENDUKU COMMENT CHESANU ANTE FUN,CLASS 2 USE CHESA PROPS&STATES KOSAM SO EXECUTE CHESTHUNTE EDO OKATE VASTHUNDE THAT'S WHY */}

    <Propsstate name="DOMINAR" age={30}/>                 
    <Funpropsstates peru="BHASKHAR" course="BTECH"/>
    <Clastate/>
    <Funstate/>
    <button className="btn btn-success">login</button>
    </>
  );
};

export default App;
