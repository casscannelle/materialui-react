import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import BoxBasic from './components/BoxBasic/BoxBasic';
import StickyFooter from './components/StickyFooter/StickyFooter';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import BoxImg from './components/BoxImg/BoxImg';

function App() {
  return (
    <div>
      <HeaderContainer/>
      <MainContainer />
      <BoxBasic />
      <BoxImg />
      <StickyFooter />
          </div>
  );
}

export default App;
