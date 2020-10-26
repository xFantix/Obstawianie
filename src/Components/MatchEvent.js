import React from 'react';
import styled from 'styled-components'

const ContainerStyle = styled.div`
    /* border:1px solid #f7f70a; */
    display:flex;
    margin:15px 25px;
    border-radius:3px;
    background-color:#42413e;

`
const StyleListElements = styled.li`
    text-decoration:none;
    list-style:none;
    padding: 7px 10px;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    color:#fff;
  
    
`
const ListStyle = styled.ul`
    width:55%;
`
const ContainerButton = styled.div`
    width:45%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
const ButtonStyle = styled.button`
    background: #282728;
    border: none;
    outline: none;
    cursor: pointer;
    color:white;
    height:70%;
    width:80px;
    border-radius:2px;
    margin:0px 10px;
    
    
`
const test = styled.button`
background-color:red;
`

const FootballElement = (props) => {

    const { HomeName, VisitName, HomeWin, VisitWin, Draw, } = props.element

    const handlePushButton = (event) => {
        console.log(event);

    }

    return (
        <ContainerStyle className={'ContainerMatch'}>
            <ListStyle className={'ContainerMatch__Teams__List'}>
                <StyleListElements className={'ContainerMatch__teams__List__element'}>
                    {HomeName}
                </StyleListElements>
                <StyleListElements className={'ContainerMatch__teams__List__element'}>
                    {VisitName}
                </StyleListElements>
            </ListStyle>
            <ContainerButton className={'ContainerMatch__buttonValue'}>
                <ButtonStyle onClick={handlePushButton} >{HomeWin}</ButtonStyle>
                {Draw && <ButtonStyle >{Draw}</ButtonStyle>}
                <ButtonStyle >{VisitWin}</ButtonStyle>
            </ContainerButton>
        </ContainerStyle>
    );
}

export default FootballElement;