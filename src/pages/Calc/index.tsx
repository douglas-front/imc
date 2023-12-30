import { useState } from "react";
import "./calc.scss";
import { Link } from "react-router-dom";

const Calc = () => {
  const [value, setValue] = useState<string>("");
  const [heightUser, setHeightUser] = useState<string>("0");
  const [weightUser, setWeightUser] = useState<string>("");

  // console.log(typeof(heightUser))

  const status = [
    {
      typeWeight: "Abaixo do peso:",
      value: "IMC menor que 18,5"
    },
    {
      typeWeight: "Peso normal:",
      value: "IMC entre 18,5 e 24,9"
    },
    {
      typeWeight: "Sobrepeso:",
      value: "IMC entre 25 e 29,9"
    },
    {
      typeWeight: "Obesidade:",
      value: "IMC igual ou superior a 30"
    },

  ]

  class imc {
    public height;
    public weight;

    constructor(height: string, weight: string) {
      this.height = height;
      this.weight = weight;
    }

    CalcImc() {
      const height = parseFloat(this.height);
      const weight = parseFloat(this.weight);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        throw new Error("Altura e peso devem ser valores numéricos positivos.");
      }

      const calc = weight / Math.pow(height, 2);

      const calcFixed = calc.toFixed(1);

      return calcFixed;
    }
  }

  const newImc = (height: string, weight: string) => {
    const person = new imc(height, weight);

    const imcPerson = person.CalcImc();

    setValue(imcPerson);
  };

  return (
    <section className="calc">
      <div className="controller-calc">
        <h1>Calcular</h1>
        <form>
          <label>digite sua altura</label>
          <input placeholder="altura em cm (1.70)" type="text" onChange={(e)=> setHeightUser(e.target.value)}/>
          <label>seu peso</label>
          <input placeholder="peso em kg (80)" type="text" onChange={(e)=> setWeightUser(e.target.value)}/>
           <button onClick={(e) =>{
              e.preventDefault()
             newImc(heightUser, weightUser)
             }}>Calcular</button>
        </form>

        <h1>imc: {value}</h1>

      </div>
        <div className="statusCalc">
            {status.map((element)=> (
              <div>
                <h1>{element.typeWeight}</h1>
                <p>{element.value}</p>
              </div>
            ))}
        </div>
   
          <Link to={"/"} className="link">Home</Link>
    </section>
  );
};

export default Calc;
