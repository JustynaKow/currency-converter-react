import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 100px;
    display: inline-block;
    text-align: right;
    margin: 10px;
`;

export const Field = styled.input`
    width: 100%;
    max-width: 300px;
    height: 50px;
    margin: 10px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    min-width: 300px;
    height: 50px;
    background-color: ${({theme}) => theme.color.cloud};
    color: #fff;
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    margin: 10px;

    &:hover{
        background-color: ${({theme}) => theme.color.haiti};
    }
`;

export const ResetButton = styled(Button)`
    background-color: ${({theme}) => theme.color.white};
    color: ${({theme}) => theme.color.cloud};
    border: solid 2px;

    &:hover{
        background-color: ${({theme}) => theme.color.cloud};
        color: ${({theme}) => theme.color.white};
    }
`;

export const Paragraph = styled.p`
    font-size: small;
    padding: 10px;
`;

export const Loading = styled.p`
    color: ${({theme}) => theme.color.green};
    padding: 100px;
`;

export const Failure = styled.p`
    color: ${({theme}) => theme.color.red};
    padding: 100px;
`;

export const Wrapper = styled.form`
    height: 500px;
`;