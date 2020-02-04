import styled from 'styled-components';

export const CustomButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    background-color: black;
    color: white;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${CustomButton}:hover & {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    
`;
