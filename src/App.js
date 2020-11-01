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

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    valueMoney: 0,
    bankMoney: 0,
    yourBets:[],
    sendMoneyForBet: 0
     });

  const changeInputValue = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }
  const handleSendSubmit = () => {
    const value = parseInt(formState.valueMoney);
    setFormState((prevState) => prevState.bankMoney + value);
  }
  const handleBetTeam = (e) => {
    const {id,value,name} = e.target; 
    const bet = {
      betTeam: id,
      betValue: value,
      betMatch: name,
      id: formState.yourBets.length,
    }
    const condition = formState.yourBets.find(element => element.betMatch === bet.betMatch && element.betTeam === bet.betTeam);
    if (condition) {
      const index = formState.yourBets.findIndex(element => element.betMatch === bet.betMatch);
      const array = [...formState.yourBets];
      array.splice(index, 1);
      setFormState.yourBets(array);
      e.target.style.color = "white";
      return;
    }
    else if (formState.yourBets.find(element => element.betMatch === bet.betMatch)) {
      return;
    }
    setFormState((prevState) => [...prevState.yourBets,bet]);
    e.target.style.color = "#33d900";
  }

  const sendYourBet = (e) => {
    const condition = formState.yourBets.length > 0 && (formState.bankMoney > formState.sendMoneyForBet);
    if (condition) {
      const valueMultiplier = formState.yourBets.reduce((a, b) => {
        return a * b.betValue;
      }, 1);
      const winOrLost = Math.floor(Math.random() * 2);
      const value = parseInt((Math.round(100 * (formState.sendMoneyForBet * valueMultiplier)) / 100));
      if (winOrLost) {
        setFormState((prevState) => prevState.bankMoney + value);
        setFormState({...formState, yourBets: []})
      }
      else {
        setFormState((prevState) => prevState.bankMoney - value);
        setFormState({...formState, yourBets: []})
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
              formState,
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
