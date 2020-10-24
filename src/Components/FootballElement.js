import React from 'react';
import styled from 'styled-components'

const ContainerStyle = styled.div`
    border:1px solid #747475;
    display:flex;
    margin:15px 25px;
    border-radius:3px;

`
const StyleListElements = styled.li`
    text-decoration:none;
    list-style:none;
    padding: 7px 10px;
    font-family: 'inherit', sans-serif;
    font-weight:600;
    color:#fff;
    opacity:.8;
    
`
const ListStyle = styled.ul`
    width:60%;
`
const ContainerButton = styled.div`
    width:40%
    display:flex;
`


const FootballElement = (props) => {

    const { HomeName, VisitName, HomeWin, VisitWin, Draw, } = props.element

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
                <button>{HomeWin}</button>
                <button>{Draw}</button>
                <button>{VisitWin}</button>
            </ContainerButton>
        </ContainerStyle>
    );
}

export default FootballElement;