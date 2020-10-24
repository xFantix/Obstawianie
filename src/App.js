import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import React from 'react';
import styled from 'styled-components'


import Header from './Components/Header'
import Football from './Components/Football'
import CounterStrike from './Components/CounterStrike'

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
`

const App = () => {
  return (
    <Router>
      <Container className="App">
        <Header />
        <MainStyle className={'main'}>
          <SectionStyle className={'main__section'}>
            <Switch>
              <Route path='/Football' exact component={Football} />
              <Route path='/Counter-Strike' component={CounterStrike} />
            </Switch>
          </SectionStyle>
        </MainStyle>
      </Container>
    </Router >
  );
}

export default App;
