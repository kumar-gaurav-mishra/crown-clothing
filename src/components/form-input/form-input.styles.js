import styled, {css} from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const Shrink = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

const getShrink = (props) => {
  if (props.value.length) {
    return Shrink;
  } else {
    return '';
  }
};
export const Group = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const Input = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;
    &:focus {
        outline: none;
    }
`;

export const FormInputLabel = styled.label`
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    &:focus {
        ${getShrink};
    }
    ${getShrink}
`;
