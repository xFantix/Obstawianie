import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import {ButtonStyle,ContainerButton,ListStyle,StyleListElements,ContainerStyle} from '../styledComponents/matchEventStyle'


const FootballElement = (props) => {
    const { HomeName, VisitName, HomeWin, VisitWin, Draw, } = props.element
    const { handleBetTeam} = useContext(AppContext);
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
                <ButtonStyle value={HomeWin} id={HomeName} onClick={handleBetTeam} name={`${HomeName} vs ${VisitName}`}  >{HomeWin}</ButtonStyle>
                {Draw && <ButtonStyle id="Draw" value={Draw} onClick={handleBetTeam} name={`${HomeName} vs ${VisitName}`} >{Draw}</ButtonStyle>}
                <ButtonStyle id={VisitName} name={`${HomeName} vs ${VisitName}`} value={VisitWin} onClick={handleBetTeam}>{VisitWin}</ButtonStyle>
            </ContainerButton>
        </ContainerStyle>
    );
}

export default FootballElement;