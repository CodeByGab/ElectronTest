import "./index.scss";
import originData from '../../../assets/origens.json';
import { useState } from "react";

const Origin = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <main className="att-main">
      <div className="left-origin">
        <h3>Agora, hora de escolher a origem do seu personagem!</h3>
        <p>
          O que seu personagem fazia antes de se envolver com o paranormal? A
          origem representa como a vida pregressa influencia sua carreira de
          investigador. Escolha uma origem que se encaixe com o conceito de seu
          personagem.
        </p>
        <p>
          Ao escolher uma origem, você recebe duas perícias treinadas e um poder
          da origem.
        </p>
      </div>
      <div className="right-origin">
        <div className="dropdown-origin">
          <button onClick={toogleDropdown} className="dropdown-toggle-origin">
            {selectedOption}
          </button>
          {isOpen && (
            <ul className="dropdown-menu-origin">
              {originData.map((option, index) => (
                <li key={index}>
                  {option.nome}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default Origin;
