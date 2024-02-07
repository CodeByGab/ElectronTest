import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Attributes from "../../components/CreateSheets/Attributes";
import Origin from "../../components/CreateSheets/Origin";

const CreateSheetPage = () => {
  const [etapa, setEtapa] = useState<number>(1);
  const [nivelPersonagem, setNivelPersonagem] = useState<string>("");
  const [origemPersonagem, setOrigemPersonagem] = useState<string>("");

  const avancarEtapa = () => {
    setEtapa(etapa + 1);
  };

  const voltarEtapa = () => {
    setEtapa(etapa - 1);
  };

  return (
    <>
    <div>
      {etapa === 1 && (
        <Attributes
          nivelPersonagem={nivelPersonagem}
          setNivelPersonagem={setNivelPersonagem}
          avancarEtapa={avancarEtapa}
        />
      )}
      {etapa === 2 && (
        <Origin 
          origemPersonagem={origemPersonagem}
          setOrigemPersonagem={setOrigemPersonagem}
          avancarEtapa={avancarEtapa}
          voltarEtapa={voltarEtapa}/>
      )}
    </div>
      <footer className="footer-create-sheet">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }} className="going-back">
          <button>
              voltar
          </button>
        </Link>
        <Link to={'/'} style={{ color: "inherit", textDecoration: "none"}} className="create-sheet-fast">
          <button >
            Criar ficha rápida
          </button>
        </Link>
        <Link to={'/'} style={{ color: "inherit", textDecoration: "none" }} className="going-back">
          <button>
            Continuar
          </button>
        </Link>
      </footer>
    </>
  );
};

export default CreateSheetPage;
