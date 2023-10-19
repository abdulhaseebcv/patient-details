import styled from 'styled-components'

export const MainContainer = styled.div`
background: #ccd5ae;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
padding: 91px 0;
`
export const SubContainer = styled.div`
width: 603px;
border-radius: 45px;
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
padding: 80px 74px 39px;
p{
    color: #1F6CAB;
    font-size: 24px;
    font-weight: 700;
}
p:first-of-type {
    margin-bottom: 22px;
}
p:last-of-type {
    color: #505050;
    font-size: 14px;
    font-weight: 500;
    margin-top: 84px;
    span{
        color: #1F6CAB;
    }
}
`
export const Logo = styled.img`
height: 50px;
margin-bottom: 51px;
`
export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 456px;
padding: 36px 0 32px;
border-radius: 20px;
background: #00D3EB;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-bottom: 80px;
p{
    color: #1F6CAB;
    font-size: 24px;
    font-weight: 400;
}
p:first-of-type {
    margin-bottom: 18px;
}
p:last-of-type {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #505050;
    text-decoration: underline;
}
`
export const Details = styled.div`
display: flex;
flex-direction: column;
width:82.03%;
gap: 5px;
label {
    font-weight: 300;
    font-size: 18px;
    color: #505050;
}
`
export const InputField = styled.input`
width: 100%;
height: 40px;
padding: 10px;
border-radius: 5px;
border: 1px solid #C4C4C4;
background: #FFF;
font-size: 18px !important;
font-weight: 400;
outline: none;
::placeholder {
    color: rgba(80, 80, 80, 0.70);
}
`
export const Button = styled.button`
width: 138px;
height: 36px;
border-radius: 5px;
background: #1F6CAB;
margin: 20px 0 20px;
border-color: transparent;
color: #FFF;
font-size: 18px;
font-weight: 500;
text-transform: uppercase;
cursor: pointer;
`