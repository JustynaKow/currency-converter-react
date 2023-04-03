import "./style.css";

const Form = () => (
  <form className="form">
    <p>
      <label>
        <span className="form__labelText">Kwota w zł*:</span>
        <input placeholder="Wpisz kwotę w zł" className="form__field" type="number"
          step="0.01" min="0" required />
      </label>
    </p>
    <p>
      <label>
        <span className="form__labelText">Waluta:</span>
        <select className="form__field" name="currency">
          <option value="EUR">Euro</option>
          <option value="USD">Dolar amerykański</option>
          <option value="GBP">Funt szterling</option>
          <option value="CHF">Frank szwajcarski</option>
        </select>
      </label>
    </p>
    <p className="form__result"></p>
    <p>
      <button className="form__button">Przelicz</button>
      <button className="form__button form__button--reset" type="reset">Wyczyść</button>
    </p>
  </form>
);

export default Form;