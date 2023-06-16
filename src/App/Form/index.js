import { useState } from 'react';
import Result from "./Result";
import { LabelText, Field, Buttons, Button, ResetButton, Paragraph, Loading, Failure, Wrapper } from "./styled";
import { useRatesData } from './useRatesData';

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onFormReset = () => {
    setResult();
    setAmount("");
  };

  return (
    <Wrapper onSubmit={onFormSubmit} onReset={onFormReset}>
      {ratesData.state === "loading"
        ? (
          <Loading>
            Sekundka ... <br /> Ładuję kursy walut z Europejskiego Banku Centralnego
          </Loading>
        ) : (
          ratesData.status === "error" ? (
            <Failure>
              Hmm... Coś poszło nie tak. Sprawdź swoje połączenie z internetem.
            </Failure>
          ) : (
            <>
              <p>
                <label>
                  <LabelText>Kwota w zł*:</LabelText>
                  <Field
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę w zł"
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    autoFocus
                  />
                </label>
              </p>
              <p>
                <label>
                  <LabelText>Waluta:</LabelText>
                  <Field
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {Object.keys(ratesData.rates).map(((currency) => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
                      </option>
                    )))
                    }
                  </Field>
                </label>
              </p>
              <Buttons>
                <Button
                  type="submit"
                >
                  Przelicz
                </Button>
                <ResetButton
                  type="reset"
                >
                  Wyczyść
                </ResetButton>
              </Buttons>
              <Result
                result={result}
              />
              <Paragraph>
                * Pole obowiązkowe
              </Paragraph>
              <Paragraph>
                Kursy z Europejskiego Banku Centralnego z dnia {ratesData.date}.
              </Paragraph>
            </>
          )
        )
      }
    </Wrapper>
  );
};

export default Form;