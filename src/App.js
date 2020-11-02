import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react';
import { AppContext } from './context/AppContext'
import Header from './Components/Header'
import Football from './Components/Football'
import CounterStrike from './Components/CounterStrike'
import LeagueOfLegends from './Components/LeagueOfLegends';
import Cash from './Components/Cash';
import BetInformation from './Components/BetInformation'
import {Container,MainStyle,SectionStyle} from './styledComponents/appStyle'
const App = () => {


  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [valueMoney, setValueMoney] = useState(0);
  const [bankMoney, setBankMoney] = useState(0);
  const [sendMoneyForBet, setSendMoneyForBet] = useState(0);
  const [yourBets,setYourBets] = useState([]);
  
  

  const changeInputValue = (e) => {
    const { name, value } = e.target;
      switch(name)
      {
        case 'firstName':
          setfirstName(value);
          break;
        case 'lastName':
          setLastName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'valueMoney':
          setValueMoney(value);
          break;
        case 'bankMoney':
          setBankMoney(value);
          break;
        case 'sendMoneyForBet':
          setSendMoneyForBet(value);
          break;
      }
  }

  const handleSendSubmit = () => {
    const value = parseInt(valueMoney);
    setBankMoney((prevState) => prevState + value);
  }

  const handleBetTeam = (e) => {
    const {id,value,name} = e.target; 
    const bet = {
      betTeam: id,
      betValue: value,
      betMatch: name,
      id:yourBets.length,
    }

    const condition = yourBets.find(element => element.betMatch === bet.betMatch && element.betTeam === bet.betTeam);

    if (condition) {
      let index = yourBets.findIndex(element => element.betMatch === bet.betMatch);
      let array = [...yourBets];
      console.log(index);
      array.splice(index, 1);
      setYourBets(array);

      return;
    }
    else if (yourBets.find(element => element.betMatch === bet.betMatch)) {
      return;
    }
    setYourBets((prevState) => [...prevState, bet]);

  }
  
  const sendYourBet = (e) => {
    const condition = yourBets.length > 0 && (bankMoney > sendMoneyForBet);
    if (condition) {
      const valueMultiplier = yourBets.reduce((a, b) => {
        return a * b.betValue;
      }, 1);
      const winOrLost = Math.floor(Math.random() * 2);
      const value = parseInt((Math.round(100 * (sendMoneyForBet * valueMultiplier)) / 100));
      if (winOrLost) {
        setBankMoney((prevState) => bankMoney + value);
        setYourBets([]);
      }
      else {
        setBankMoney((prevState) => bankMoney - value);
        setYourBets([]);
        
      }
    }
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container className="App">
        <Header />
        <MainStyle >
          <AppContext.Provider
            value={{
              firstName,
              lastName,
              email,
              valueMoney,
              bankMoney,
              sendMoneyForBet,
              yourBets,
              changeInputValue,
              handleSendSubmit,
              handleBetTeam,
              sendYourBet,
            }}
          >
            <SectionStyle className={'main__section'}>
              <Switch>
                <Route path='/' exact component={Football} />
                <Route path='/Counter-Strike' component={CounterStrike} />
                <Route path='/League-Of-Legends' component={LeagueOfLegends} />
                <Route path='/Cash-In' component={Cash} />
              </Switch>
            </SectionStyle>
            <BetInformation />
          </AppContext.Provider>
        </MainStyle>
      </Container>
    </Router >
  );
}

export default App;
