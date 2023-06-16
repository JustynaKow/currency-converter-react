import Clock from "./Clock";
import Header from "./Header"
import Form from "./Form";
import { Wrapper } from "./styled";

function App() {

  return (
    <Wrapper>
      <Clock />
      <Header title="Przelicznik walut" />
      <Form />
    </Wrapper>
  );
};

export default App;