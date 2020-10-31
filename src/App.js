import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react';
import styled from 'styled-components'

import { AppContext } from './Components/Context/AppContext'

import Header from './Components/Header'
import Football from './Components/Football'
import CounterStrike from './Components/CounterStrike'
import LeagueOfLegends from './Components/LeagueOfLegends';
import Cash from './Components/Cash';
import BetInformation from './Components/BetInformation'


const Container = styled.div`
  min-height:100vh;
  min-width:100%;
  background-color:#2e2d2b;
  display:flex;
  flex-direction:column;
  `

const MainStyle = styled.main`
  width:100%;
  display:flex;
  flex-wrap:wrap;
`
const SectionStyle = styled.section`
  width:50%;
  display:flex;
  flex-direction:column;
  padding:30px 0px;
  @media(max-width:800px){
    width:100%;
  }
`

const App = () => {

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [valueMoney, setValueMoney] = useState(0);

  const [bankMoney, setbankMoney] = useState(0);

  const [yourBets, setyourBets] = useState([]);

  const [sendMoneyForBet, setsendMoneyForBet] = useState(0);



  const changeInputValue = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    if (name === "firstName") {
      { setfirstName(value) }
    }
    else if (name === "lastName") setLastName(value);
    else if (name === "email") setEmail(value);
    else if (name === "valueMoney") setValueMoney(value);
    else if (name === "sendMoneyForBet") setsendMoneyForBet(value);
  }

  const handleSendSubmit = (e) => {

    let value = parseInt(valueMoney);
    setbankMoney((prevState) => prevState + value)

  }

  const handleBetTeam = (e) => {

    let Bet = {
      betTeam: e.target.id,
      betValue: e.target.value,
      betMatch: e.target.name,
      id: yourBets.length,
    }

    if (yourBets.find(element => element.betMatch === Bet.betMatch && element.betTeam === Bet.betTeam)) {
      let index = yourBets.findIndex(element => element.betMatch === Bet.betMatch);
      let array = [...yourBets];
      console.log(index);
      array.splice(index, 1);
      setyourBets(array);
      e.target.style.color = "white";
      return;
    }

    else if (yourBets.find(element => element.betMatch === Bet.betMatch)) {
      return;
    }

    setyourBets((prevState) => [...prevState, Bet]);
    e.target.style.color = "#33d900";
  }


  const sendYourBet = (e) => {

    if (yourBets.length > 0 && (bankMoney > sendMoneyForBet)) {

      const valueMultiplier = yourBets.reduce((a, b) => {
        return a * b.betValue;
      }, 1)


      let winOrLost = Math.floor(Math.random() * 2);
      let value = parseInt((Math.round(100 * (sendMoneyForBet * valueMultiplier)) / 100));

      if (winOrLost) {
        setbankMoney((prevState) => prevState + value);
        setyourBets([]);

      }
      else {
        setbankMoney((prevState) => prevState - value);
        setyourBets([]);

      }


    }

  }


  return (
    <Router>
      <Container className="App">
        <Header />
        <MainStyle >
          <AppContext.Provider
            value={{
              firstName,
              lastName,
              email,
              valueMoney,
              changeInputValue,
              bankMoney,
              handleSendSubmit,
              handleBetTeam,
              yourBets,
              sendMoneyForBet,
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
