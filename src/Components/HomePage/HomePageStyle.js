import styled from 'styled-components'

export const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 23px 0 73px;
height: 101px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const Logo = styled.img`
height: 35px;
`
export const UserDetails = styled.div`
display: flex;
gap: 20px;
align-items: center;
p{
color:  #808080;
font-size: 16px;
font-weight: 600;
}
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
span {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #1F6CAB;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    color: #FFF;
}
`
export const SubNav = styled.div`
height: 59px;
background: #E4FBFB;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 24px 0 50px;
h3{
    color: #1F6CAB;
    font-size: 25px;
    font-weight: 500;
}
`
export const FilterSection = styled.div`
display: flex;
gap: 16px;
button {
    font-size: 20px;
    font-weight: 500;
    color: #FFF;
    border-radius: 5px;
    border: 1px solid #1F6CAB;
    background: #1F6CAB;
    display: flex;
    align-items: center;
    padding-left: 5px;
    span {
        display: flex;
        align-items: center;
        padding-left: 12px;
    }
}
`
export const InputField = styled.input`
width: 450px;
height: 30px;
background-color: #F4F4F4;
border: 1px solid;
color: rgba(80, 80, 80, 0.70);
font-size: 16px;
font-weight: 400;
border-radius: 5px;
outline: none;
border-color: #1F6CAB;
padding-left: 10px;
`
export const Table = styled.table`
width: 100%;
border-collapse: collapse;
thead{
    border-bottom: 1px solid #000;
    height: 39px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
th {
    text-align: start;
    padding: 0 20px;
}
tr{
    border-bottom: 1px solid #000;
}
td {
    padding: 8px 20px;
}
`
export const Status = styled.td`
div{
    padding: 3px 0;
    background-color: ${props => props.status === 'Ready' ? '#89FFAA' : props.status === 'Partial Report' ? '#E7F880' : props.status === 'Lab Dropped' ? '#F2A38A' : ''};
    border-radius: 12px;
}
`
export const PageNumber = styled.ul`
display: flex;
justify-content: center;
margin-top: 40px;
gap: 15px;
li {
    list-style: none;
}
button {
    width: 40px;
    height: 40px;
    cursor: pointer;
}
`
export const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 93px;
position: absolute;
bottom: 0;
width: 100%;
background-color: #E4FBFB;
height: 83px;
p:first-of-type {
    color: #6D6C6C;
    font-size: 16px;
    font-weight: 400;
}
p:nth-of-type(2) {
    span {
        background-color: #FFF;
    }
    color: #1F6CAB;
    font-size: 24px;
    font-weight: 700;
}
p:last-of-type {
    color: #1F6CAB;
    font-size: 16px;
    font-weight: 400;
    span {
        color: #FFF;
    }
}
`