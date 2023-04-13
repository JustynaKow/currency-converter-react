import { useState } from 'react';
import "./style.css";
import { currencies } from "../currencies";
import Result from "./Result";

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
          <span className="form__labelText">Kwota w zł*:</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            className="form__field"
            type="number"
            step="0.01"
            min="0"
            required
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">Waluta:</span>
          <select
            className="form__field"
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
          </select>
        </label>
      </p>
      <p className="form__paragraph">
        <button
          className="form__button"
          type="submit"
        >
          Przelicz
        </button>
        <button
          className="form__button form__button--reset"
          type="reset"
        >
          Wyczyść
        </button>
      </p>
      <Result
        result={result}
      />
    </form>
  );
};

export default Form;