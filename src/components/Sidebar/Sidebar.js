import styled from 'styled-components'

export const SidebarContainer = styled.div`
    height: 80%;
    width: 400px;
    background: #F9F9F9;
    border-radius: 8px;

    margin-left: 30px;
    margin-top: 40px;

    -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);

    -webkit-transition: width 1s ease-in-out, padding-left 1s ease-in-out, padding-right 1s ease-in-out;
    -moz-transition: width 1s ease-in-out, padding-left 1s ease-in-out, padding-right 1s ease-in-out;
    -o-transition: width 1s ease-in-out, padding-left 1s ease-in-out, padding-right 1s ease-in-out;
    transition: width 1s ease-in-out, padding-left 1s ease-in-out, padding-right 1s ease-in-out;

    ${props => {
        return props.toggle ? `width: 100%` : `width: 400px`;
    }}
`

export const SidebarTitle = styled.div`
    font-family: Roboto, sans-serif;
    font-size: 38px;
    font-weight: 400;
    color: #2F2E41;

    display: flex;
    justify-content: center;
    padding-top: 10px;
`

export const HrTitle = styled.hr`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin: 0 30px;
    color:#2F2E41 !important;
`

export const HrItem = styled.hr`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin: 0 70px;
    color:#2F2E41 !important;
`