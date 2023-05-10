import { useState } from 'react';
import { currencies } from "../currencies";
import Result from "./Result";
import { LabelText, Field, Buttons, Button, ResetButton } from "./styled";

const Form = ({ calculateResult, result, setResult }) => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const resetResult = () => {
    setResult();
  };

  const onFormReset = () => {
    setAmount("");
    setCurrency(currencies[0].short);
    resetResult();
  };

  return (
    <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
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
            {currencies.map(currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            ))}
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
    </form>
  );
};

export default Form;