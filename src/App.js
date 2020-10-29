import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import React, { useState, } from 'react';
import styled from 'styled-components'

import { AppContext, defaultObject } from './Components/Context/AppContext'

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





  const changeInputValue = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    if (name === "firstName") {
      { setfirstName(value) }
    }
    else if (name === "lastName") setLastName(value);
    else if (name === "email") setEmail(value);
    else if (name === "valueMoney") setValueMoney(value);

  }

  const handleSendSubmit = (e) => {
    // e.preventDefault();

    let value = parseInt(valueMoney);
    setbankMoney((prevState) => prevState + value)

  }

  const handleBetTeam = (e) => {
    e.preventDefault();


    let Bet = {
      betTeam: e.target.id,
      betValue: e.target.value,
      betMatch: e.target.name,
      id: yourBets.length,
    }

    setyourBets((prevState) => [...prevState, Bet]);


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
            }}
          >
            <SectionStyle className={'main__section'}>
              <Switch>
                <Route path='/Football' exact component={Football} />
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
