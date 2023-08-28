import React, { useState } from "react";

let clicked = false;

const initialState = {
  startUpCapital: "",
  interestRate: "",
  cumulativeTotal: "",
};

export default function Form() {
  const [values, setValues] = useState(initialState);
  const [cumulativeTotal, setCumulativeTotal] = useState("");

  const handleValueChange = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const compoundInterest = (startUpCapital, interestRate) => {
    for (let i = 0; i < 5; i++) {
      let interest = (startUpCapital / 100) * interestRate;
      let finalValue = startUpCapital + interest;
      startUpCapital = finalValue;
      /*console.log(
        `en el mes ${i + 1} el deposito sera de ${startUpCapital.toFixed(2)}`
      );*/
    }
    return startUpCapital.toFixed(2);
  };

  const showResults = () => {
    //!buscar solucion, no debe mostrar la respuesta hasta que se haga el calculo
    if (clicked == false) {
      result.style.display = "flex";
      clicked = true;
    } else {
      result.style.display = "none";
      clicked = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*console.log(
      `el valor del capital inicial es de ${values.startUpCapital} y el interés es de ${values.interestRate}`
    );*/
    const cumulativeTotal = compoundInterest(
      Number(values.startUpCapital),
      Number(values.interestRate)
    );
    setCumulativeTotal(cumulativeTotal);
    showResults();
    /*console.log(`el capital acumulado es de ${cumulativeTotal}`);*/
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Capital inicial</label>
          <input
            type="number"
            min={0}
            value={values.startUpCapital}
            placeholder="Inserte el capital inicial"
            onChange={(e) =>
              handleValueChange("startUpCapital", e.target.value)
            }
          />
          <label>Tasa de interés</label>
          <input
            type="number"
            min={0}
            value={values.interestRate}
            placeholder="Inserte la tasa de interés"
            onChange={(e) => handleValueChange("interestRate", e.target.value)}
          />
          <button type="send">Send</button>
        </form>
      </div>
      <div>
        <p>
          El capital acumulado, obtenido por medio del capital inicial de $
          {values.startUpCapital} más un interes mensual del{" "}
          {values.interestRate}% durante 5 meses, es de ${cumulativeTotal}.
        </p>
      </div>
    </main>
  );
}
