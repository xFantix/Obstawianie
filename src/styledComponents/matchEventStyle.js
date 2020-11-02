import styled, { keyframes } from 'styled-components'
const entryAnimation = keyframes`
    0%{
        transform:translateX(-50%);
        opacity:0;
    }
    100%{
        transform:translateX(0%);
        opacity:1;
    }
`

const ContainerStyle = styled.div`
    
    display:flex;
    margin:15px 25px;
    border-radius:3px;
    background-color:#42413e;
    animation: ${entryAnimation} linear both .8s;
    
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
    @media(max-width:700px)
    {
        width:50%;
    }
`
const ContainerButton = styled.div`
    width:45%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media(max-width:700px)
    {
        width:50%;
    }
`

const ButtonStyle = styled.button.attrs(props=>({
    colorType:props.colorType || "white"
}))`
    background: #282728;
    border: none;
    outline: none;
    cursor: pointer;
    color:${props=>props.colorType};
    height:70%;
    width:80px;
    border-radius:2px;
    margin:0px 10px;   

`
export{ButtonStyle,ContainerButton,ListStyle,StyleListElements,ContainerStyle,entryAnimation};