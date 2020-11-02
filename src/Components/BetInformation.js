import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import {InputNumberStyle,ButtonBet,BetContainer,BetStyle,InfoAccount,InformationStyle,HeaderStyle,Container }from '../styledComponents/betInformationStyle'

const BetInformation = () => {
    
    const { bankMoney,sendMoneyForBet, changeInputValue, sendYourBet,yourBets } = useContext(AppContext);
    const valueMultiplier =yourBets.reduce((a, b) => {
        return a * b.betValue;
      }, 1);

    const matchList =yourBets.map(element =>
        <BetStyle key={element.id}>
            <p>{element.betMatch}</p>
            <p><b>{element.betTeam}</b></p>
            <p style={{ color: "#0df005", }}>{element.betValue}</p>
        </BetStyle>
    );

    const yourAccount = bankMoney;
    const multiplier = valueMultiplier !== 1 && Math.round(100 * valueMultiplier) / 100;
    const yourWin = valueMultiplier !== 1 ? (Math.round(100 * (sendMoneyForBet * valueMultiplier)) / 100) : 0;
    return (
        <Container>
            <HeaderStyle>Your Bets</HeaderStyle>
            <InformationStyle>
                <InfoAccount>
                    Your Account: {yourAccount} euro
                </InfoAccount>
                <InfoAccount>
                    Multiplier: {multiplier}
                </InfoAccount>
                <InfoAccount>
                    Your Win: {yourWin} euro
                </InfoAccount>
                {matchList}
                <BetContainer>
                    <ButtonBet onClick={sendYourBet} >Bet</ButtonBet>
                    <InputNumberStyle value={sendMoneyForBet} name="sendMoneyForBet" onChange={changeInputValue} type="number" min="0" max="100000"/>
                </BetContainer>
            </InformationStyle>
        </Container>
    );
}
export default BetInformation;