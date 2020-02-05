import styled from 'styled-components';

export const MenuItemsContainer = styled.div`
    height: ${({size}) => (size ? '380px' : '240px')};
    min-width: 30%;
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & .content {
            opacity: 0.9;
        }
    }
    &:first-child {
        margin-right: 7.5px;
    }
    &:last-child {
        margin-left: 7.5px;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-color: ${({bgColor}) => bgColor};
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const Content = styled.div`
    height: 15vh;
    width: 7vw;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    word-wrap: break-word;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
    word-wrap: break-word;
`;

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
    padding-bottom: 20px;
    word-wrap: break-word;
`;
