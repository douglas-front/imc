import { GiHealthNormal } from "react-icons/gi"
import { MdOutlineNoFood } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import "./cards.scss"
// import { useEffect , useRef} from "react";
// import gsap from "gsap";

const Cards = () => {

  

  const cards = [
    {
      name: "Saúde",
      text: "Com o imc ideal , você terá mais saude física e mental, além de mais energia no dia a dia",
      icon: <GiHealthNormal/>
    },
    {
      name: "Atividade física",
      text: "Fazer atividade física tem vários benefícios comprovados pela ciência",
      icon: <FaRunning/>
    },
    {
      name: "Alimentação",
      text: "Cuidar da alimentação irá reduzir os riscos de obesidade , ataque cardíacos , diabetes e etc...",
      icon: <MdOutlineNoFood/>
    },
  ]

  return ( 
    <section className="cards">
      <div className="controller-cards">
        {cards.map((card)=>(
          <div className="card">
            <h1>{card.name}</h1>
            <p>{card.text}</p>
            <span>{card.icon}</span>
          </div>
        ))}
      </div>
    </section>
   );
}
 
export default Cards;