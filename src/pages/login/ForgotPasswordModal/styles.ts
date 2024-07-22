import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 560px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0px 8px 12px rgba(37, 37, 39, 0.08);
    border-radius: 8px;
    padding: 24px;
    :focus{
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    /* border: 2px solid #1C77CF; */
    }
`;

export const Title = styled.a`
 font-family: 'Figtree';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.12px;
    color: #1E2347;
`;

export const TextCard = styled.a`
 font-family: 'Figtree';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.12px;
    color: #1E2347;
    order: 1;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 250px;
    height: 96px;
    background: #F7F7F8;
    border-radius: 8px;
    border-width: 0px;
`;

export const ButtonWrapper = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.12px;
    color: #1E2347;
    background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
  &:focus{
    box-shadow: 0 0 0 2px #4289F5;
    border-inline-end-width: 1px;
    outline: 0;
    }
`;

export const CloseDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const MessageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 0px 24px 0px;
`;
export const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;