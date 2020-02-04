import styled, {css} from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
const CommonStyle = css`
    width: 23%;
`;
const ExistingCustomButtonStyle = styled(CustomButton)``;
export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    word-wrap: break-word;
    position: relative;
`;
export const ItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-position: center;
    background-size: cover;
    margin-bottom: 5px;
    word-wrap: break-word;
    ${CollectionItemContainer}:hover & {
        opacity: 0.8;
    }
`;

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    word-wrap: break-word;
`;
export const CustomButtonContainer = styled(CustomButton)`
    ${ExistingCustomButtonStyle};
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    ${CollectionItemContainer}:hover & {
        opacity: 0.85;
        display: flex;
    }
`;

export const Name = styled.span`
    ${CommonStyle}
`;
export const Price = styled.span`
    ${CommonStyle}
`;
