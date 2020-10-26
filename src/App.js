import { BrowserRouter as Router, NavLink, Route, Switch, } from 'react-router-dom'
import React, { useContext, useState, } from 'react';
import styled from 'styled-components'

import { CashInContext, cashInObject } from './Components/Context/CashInContext'

import Header from './Components/Header'
import Football from './Components/Football'
import CounterStrike from './Components/CounterStrike'
import LeagueOfLegends from './Components/LeagueOfLegends';
import CashIn from './Components/CashIn';

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
`
const SectionStyle = styled.section`
  width:50%;
  display:flex;
  flex-direction:column;
  @media(max-width:700px){
    width:100%;
  }
`

const App = () => {

  const [firstName, setFirstName] = useState(cashInObject.firstName);
  const [lastName, setLastName] = useState(cashInObject.lastName);
  const [email, setEmail] = useState(cashInObject.email);
  const [valueMoney, setValueMoney] = useState(cashInObject.valueMoney);


  return (
    <Router>
      <Container className="App">
        <Header />
        <MainStyle className={'main'}>
          <CashInContext.Provider value={{

            firstName,
            lastName,
            email,
            valueMoney,

          }}>
            <SectionStyle className={'main__section'}>
              <Switch>
                <Route path='/Football' exact component={Football} />
                <Route path='/Counter-Strike' component={CounterStrike} />
                <Route path='/League-Of-Legends' component={LeagueOfLegends} />
                <Route path='/Cash-In' component={CashIn} />
              </Switch>
            </SectionStyle>
          </CashInContext.Provider>
        </MainStyle>
      </Container>
    </Router >
  );
}

export default App;
