import { useState } from 'react';
import "./style.css";
import { currencies } from "../currencies";
import Result from "./Result";

const Form = ({ calculateResult, result, resetResult }) => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (amount > 0) {
      calculateResult(currency, amount);
    };
  };

  const onFormReset = () => {
    setAmount("");
    resetResult();
  };

  return (
    <form className="form">
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
          onClick={onFormSubmit}
        >
          Przelicz
        </button>
        <button
          className="form__button form__button--reset"
          type="reset"
          onClick={onFormReset}
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