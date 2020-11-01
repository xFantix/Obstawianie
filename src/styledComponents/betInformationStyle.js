import styled from 'styled-components'

const Container = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
@media(max-width:800px)
{
    width:100%;
}
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
width:60%;
border-radius:3px;
@media(max-width:800px)
{
    width:80%;
}
`
const InfoAccount = styled.h2`
font-family: 'Roboto', sans-serif;
font-size:18px;
color:white;
font-weight:400;
padding:15px 20px;
`

const BetStyle = styled.div`
display:flex;
background-color:#282728;
color:white;
font-size:15px;
font-family: 'Roboto', sans-serif;
font-weight:200;
padding:20px;
justify-content:space-around;
border-bottom:1px solid grey;
`
const BetContainer = styled.div`
display:flex;
padding:20px;
width:100%;
justify-content:space-around;
`
const ButtonBet = styled.button`
border:none;
color:white;
padding:10px 30px;
background-color:#282728;
cursor: pointer;
width:40%;
`
const InputNumberStyle = styled.input`
-webkit-appearance: none;
-moz-appearance: textfield;
width:40%;
padding-left:20px;
font-family: 'Roboto', sans-serif;
`
export {InputNumberStyle,ButtonBet,BetContainer,BetStyle,InfoAccount,InformationStyle,HeaderStyle,Container };