import "./nav.scss";
import { IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useRef , useState} from "react";

const Nav = () => {

  const modalRef = useRef<HTMLDivElement>(null)
  const [modalOn, setModalOn] = useState<boolean>(true)
  
  const handleModal = ()=> {
    setModalOn((prev) => !prev)

    gsap.to(modalRef.current,{
      scale: modalOn ? 1.1 : 0,
      opacity: modalOn? 1 : 0,
      ease: "elastic.out(1,0.9)",
    })
  }




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

  return (

    <>
      <nav>
        <div className="controller-nav">
          <h1>
            <span>IMC</span>OUT
          </h1>
          <ul>
            <li onClick={handleModal}>
              Estatísticas
            </li>
            <li>
              <a href="">Fale conosco!</a>
            </li>
            <li>
              <Link to={"/calc"}><button>Começar</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    
      <div className="status" ref={modalRef}>
      {status.map((element, key)=>(
        <div key={key}>
          <h1>{element.typeWeight}</h1>
          <p>{element.value}</p>

        </div>
      ))}
      <button onClick={handleModal}><IoCloseSharp/></button>
    </div>
    </>

    
  );
};

export default Nav;
