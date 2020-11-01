import styled from 'styled-components'
const HeaderStyle = styled.h1`
    font-family: 'Roboto', sans-serif;
    color:white;
    font-size:55px;
    letter-spacing:10px;
    text-align:center;
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
    margin-bottom:30px;
    align-items:center;
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
const ButtonStyle = styled.button`
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
export{ButtonStyle,InputStyle,LabelStyle,FormStyle,HeaderStyle};