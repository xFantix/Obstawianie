import React, { useContext } from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form";

import { AppContext } from './Context/AppContext'

const HeaderStyle = styled.h1`
    font-family: 'Roboto', sans-serif;
    color:white;
    font-size:55px;
    letter-spacing:10px;
    margin-left:5%;
    display:block;
    padding:30px 0px;
    font-weight:300;
    @media(max-width:700px){
        text-align:center;
        margin-left:0;
    }
`
const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    padding-left:5%;
    margin-bottom:30px;
    @media(max-width:700px){
        align-items:center;
        padding-left:0;
    }
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

const Cash = () => {

    const { register, handleSubmit, errors } = useForm();


    const { firstName, lastName, email, valueMoney, changeInputValue } = useContext(AppContext);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <HeaderStyle>
                CASH IN
            </HeaderStyle>
            <FormStyle onSubmit={handleSubmit(onSubmit)}>

                <LabelStyle>First Name: </LabelStyle>
                <InputStyle
                    name="firstName"
                    ref={register({ required: true, minLength: 1 })}
                    onChange={changeInputValue}
                    type="text" />
                {errors.firstName && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <LabelStyle>Last Name: </LabelStyle>

                <InputStyle
                    name="lastName"
                    ref={register({ required: true, minLength: 1 })}
                    type="text"
                    onChange={changeInputValue} />
                {errors.firstName && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <LabelStyle>Email: </LabelStyle>
                <InputStyle
                    name="email"
                    ref={register({ required: true, minLength: 1 })}
                    type="text"
                    onChange={changeInputValue} />
                {errors.firstName && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <LabelStyle>Value: </LabelStyle>
                <InputStyle
                    name="valueMoney"
                    ref={register({ required: true, minLength: 1 })}
                    type="number"
                    onChange={changeInputValue} />
                {errors.firstName && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <SubmitStyle type="submit" value="Send Money" />
            </FormStyle>


        </>
    );
}

export default Cash;