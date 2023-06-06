import Clock from "./Clock";
import Header from "./Header"
import Form from "./Form";
import Footer from "./Footer";
import { useState } from 'react';
import { currencies } from "./currencies";
import { Wrapper } from "./styled";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Wrapper>
      <Clock />
      <Header title="Przelicznik walut" />
      <Form
        result={result}
        calculateResult={calculateResult}
        setResult={setResult}
      />
      <Footer />
    </Wrapper>
  );
};

export default App;