import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 1;

    width: 100%;
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 76px;
    background: #F9F9F9;
    border-radius: 8px;
    margin-top: 20px;

    padding: 10px 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
`