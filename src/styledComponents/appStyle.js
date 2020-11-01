import styled from 'styled-components'

const Container = styled.div`
  min-height:100vh;
  min-width:100%;
  background-color:#2e2d2b;
  display:flex;
  flex-direction:column;
  `

const MainStyle = styled.main`
  width:100%;
  display:flex;
  flex-wrap:wrap;
`
const SectionStyle = styled.section`
  width:50%;
  display:flex;
  flex-direction:column;
  padding:30px 0px;
  @media(max-width:800px){
    width:100%;
  }
`
  export {Container,MainStyle,SectionStyle};