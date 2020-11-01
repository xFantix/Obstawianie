import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import {InputNumberStyle,ButtonBet,BetContainer,BetStyle,InfoAccount,InformationStyle,HeaderStyle,Container }from '../styledComponents/betInformationStyle'

const BetInformation = () => {
    
    const { formState, changeInputValue, sendYourBet } = useContext(AppContext);
    
    const valueMultiplier = formState.yourBets.reduce((a,b)=>{
        return a * b.betValue;
    },1);

    const matchList =formState.yourBets.map(element =>
        <BetStyle key={element.id}>
            <p>{element.betMatch}</p>
            <p><b>{element.betTeam}</b></p>
            <p style={{ color: "#0df005", }}>{element.betValue}</p>
        </BetStyle>
    );
    return (
        <Container>
            <HeaderStyle>Your Bets</HeaderStyle>
            <InformationStyle>
                <InfoAccount>
                    Your Account: {formState.bankMoney} euro
                </InfoAccount>
                <InfoAccount>
                    Multiplier: {valueMultiplier !== 1 && Math.round(100 * valueMultiplier) / 100}
                </InfoAccount>
                <InfoAccount>
                    Your Win: {valueMultiplier !== 1 ? (Math.round(100 * (formState.sendMoneyForBet * valueMultiplier)) / 100) : 0} euro
                </InfoAccount>
                {matchList}
                <BetContainer>
                    <ButtonBet onClick={sendYourBet} >Bet</ButtonBet>
                    <InputNumberStyle value={formState.sendMoneyForBet} name="sendMoneyForBet" onChange={changeInputValue} type="number" min="0" max="100000"/>
                </BetContainer>
            </InformationStyle>
        </Container>
    );
}

export default BetInformation;