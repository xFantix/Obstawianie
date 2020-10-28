import React, { useContext } from 'react';
import styled from 'styled-components'


import { AppContext } from './Context/AppContext'




const Container = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
const HeaderStyle = styled.h1`
    font-family: 'Roboto', sans-serif;
    color:white;
    font-size:55px;
    letter-spacing:10px;
    text-align:center;
    display:block;
    padding:30px 0px;
    font-weight:300;
`
const InformationStyle = styled.div`
    background-color:#42413E;
    width:50%;
    border-radius:3px;
`
const InfoAccount = styled.h2`
font-family: 'Roboto', sans-serif;
font-size:18px;
color:white;
font-weight:400;
padding:20px;
`

const BetInformation = () => {


    const { setyourBets, bankMoney, } = useContext(AppContext);




    return (

        <Container>
            <HeaderStyle>Your Bets</HeaderStyle>
            <InformationStyle>
                <InfoAccount>Your Accoutn: {bankMoney} euro</InfoAccount>

            </InformationStyle>
        </Container>

    );
}

export default BetInformation;