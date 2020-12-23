import React, { useState } from "react";
import generator from "generate-password";

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols
    });
    setPassword(pwd);
  }

  return (
    <div>
      <h5>Generate a random password in React - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h5>
      <div class="container">
        <div class="row">
          <div class="col">
            <label>
              <span className="lbl-len">Length:</span>
              <input
                type="number"
                className="input-len form-control"
                value={length}
                onChange={e => setLength(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label className="form-control">
              <input
                type="checkbox"
                className="mr-1"
                checked={isLowerCase}
                onChange={() => setIsLowerCase(val => !val)}
              />
              <span>LowerCase</span>
            </label>
          </div>
          <div class="col">
            <label className="form-control">
              <input
                type="checkbox"
                className="mr-1"
                checked={isUpperCase}
                onChange={() => setIsUpperCase(val => !val)}
              />
              <span>UpperCase</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label className="form-control">
              <input
                type="checkbox"
                className="mr-1"
                checked={isNumbers}
                onChange={() => setIsNumbers(val => !val)}
              />
              <span>Numbers</span>
            </label>
          </div>
          <div class="col">
            <label className="form-control">
              <input
                type="checkbox"
                className="mr-1"
                checked={isSymbols}
                onChange={() => setIsSymbols(val => !val)}
              />
              <span>Symbols</span>
            </label>
          </div>
        </div>
        <small>Note: At least one should be true.</small>
        <div class="row">
          <div class="col">
            <input
              type="button"
              className="btn btn-dark mt-2 mb-3"
              value="Generate Password"
              onClick={generatePassword} />
            <div>
              Password: {password}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
