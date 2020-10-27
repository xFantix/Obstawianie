import { BrowserRouter as Router, NavLink, Route, Switch, } from 'react-router-dom'
import React, { useState, } from 'react';
import styled from 'styled-components'

import { AppContext, defaultObject } from './Components/Context/AppContext'

import Header from './Components/Header'
import Football from './Components/Football'
import CounterStrike from './Components/CounterStrike'
import LeagueOfLegends from './Components/LeagueOfLegends';
import Cash from './Components/Cash';
import Footer from './Components/Footer'


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
  height:calc(100vh - 67px - 50px);
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

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [valueMoney, setValueMoney] = useState("");


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
          </AppContext.Provider>
        </MainStyle>
        <Footer />
      </Container>
    </Router >
  );
}

export default App;
