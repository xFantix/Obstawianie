import React, { useContext, } from 'react';
import { useForm } from "react-hook-form";
import { AppContext } from '../context/AppContext'
import {ButtonStyle,InputStyle,LabelStyle,FormStyle,HeaderStyle}from '../styledComponents/cashStyle'

const Cash = () => {
    const { register, handleSubmit, errors } = useForm();
    const { changeInputValue, handleSendSubmit} = useContext(AppContext);
    return (
        <>
            <HeaderStyle>
                CASH IN
            </HeaderStyle>
            <FormStyle onSubmit={handleSubmit(handleSendSubmit)}>
                <LabelStyle htmlFor="firstName">
                    First Name: 
                </LabelStyle>
                <InputStyle
                    id="firstName"
                    name="firstName"
                    ref={register({ required: true, minLength: 1 })}
                    onChange={changeInputValue}
                    type="text" />
                {errors.firstName && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <LabelStyle htmlFor="lastName">Last Name: </LabelStyle>
                <InputStyle
                    id="lastName"
                    name="lastName"
                    ref={register({ required: true, minLength: 1 })}
                    type="text"
                    onChange={changeInputValue} />
                {errors.lastName && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <LabelStyle htmlFor="email">Email: </LabelStyle>
                <InputStyle
                    id="email"
                    name="email"
                    ref={register({ required: true, minLength: 1 })}
                    type="email"
                    onChange={changeInputValue} />
                {errors.email && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <LabelStyle htmlFor="valueMoney">Value: </LabelStyle>
                <InputStyle
                    id="valueMoney"
                    name="valueMoney"
                    ref={register({ required: true, minLength: 1 })}
                    type="number"
                    onChange={changeInputValue} />
                {errors.valueMoney && <p style={{ color: "red", padding: "10px 0px", fontFamily: 'Roboto', fontSize: 15 }}>Required</p>}
                <ButtonStyle>Send Money</ButtonStyle>
            </FormStyle>


        </>
    );
}

export default Cash;