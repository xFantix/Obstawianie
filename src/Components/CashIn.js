import React from 'react';
import styled from 'styled-components'

const HeaderStyle = styled.h1`
    font-family: 'Roboto', sans-serif;
    color:white;
    font-size:55px;
    letter-spacing:10px;
    margin-left:5%;
    display:block;
    padding:30px 0px;
    font-weight:300;
`
const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    padding-left:5%;
`
const LabelStyle = styled.label`
    font-family: 'Roboto', sans-serif;
    color:white;
    font-weight:300;
    margin-bottom:10px;
`
const InputStyle = styled.input`
    width:60%;
    height:30px;
    border-radius:2px;
    margin-bottom:10px;
`
const SubmitStyle = styled.input`
    width:60%;
    background-color:#0fb85e;
    border:none;
    color:white;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    cursor: pointer;
    font-size:25px;
    margin-top:10px;
    padding:5px 0px;
`

const CashIn = () => {
    return (
        <>
            <HeaderStyle>
                CASH IN
            </HeaderStyle>
            <FormStyle>

                <LabelStyle>First Name: </LabelStyle>
                <InputStyle type="text" />

                <LabelStyle>Last Name: </LabelStyle>
                <InputStyle type="text" />

                <LabelStyle>Email: </LabelStyle>
                <InputStyle type="text" />

                <LabelStyle>Value: </LabelStyle>
                <InputStyle type="number" />

                <SubmitStyle type="submit" value="Send Money" />
            </FormStyle>
        </>
    );
}

export default CashIn;