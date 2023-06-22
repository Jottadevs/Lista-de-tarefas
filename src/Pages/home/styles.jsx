import styled from 'styled-components'

export const AddButton = styled.button `

    background: #abbab4;
    color: #000;
    height: 35px;
    width: 80px;
    border: none;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

`

export const Container = styled.div `

    background: #585e65;
    padding: 20px;
    border-radius: 15px;
    
    h1 {
        color: white;
    }

    input {
        height: 30px;
        border-radius: 10px;
        border: none;
        outline: none;
        margin-top: 30px;
        padding-left: 10px;
    }

`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background: white;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    p{
        text-transform: capitalize;
    }
`

export const TrashButton = styled.button `
    width: 30px;
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;

`