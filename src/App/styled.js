import styled from "styled-components";
import backgorund1 from "../images/background1.png";

export const Wrapper = styled.main`
    max-width: 800px;
    margin: 50px auto;
    text-align: center;
    background: center / cover no-repeat url("${backgorund1}");
    color: ${({theme}) => theme.color.white};
`;