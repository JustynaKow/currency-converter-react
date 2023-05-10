import { Wrapper, Title } from "./styled";

const Header = ({ title }) => (
    <Wrapper>
        <Title>
            {title}
        </Title>
    </Wrapper>
);

export default Header;