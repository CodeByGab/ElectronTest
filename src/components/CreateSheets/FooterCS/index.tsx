import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

interface FooterCSProps {
  currentIndex: number;
  onBack: () => void;
  onNext: () => void;
  // jsonData: string; // Adicione uma propriedade para o JSON
}

const FooterCS = ({ currentIndex, onBack, onNext}: FooterCSProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (currentIndex === 0) {
      navigate("/");
    } else {
      onBack();
    }
  };

  const handleNext = () => {
    onNext();
  }

  return (
    <footer className="footer-create-sheet">
      <button onClick={handleBack} className="going-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 svg-left"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span>Voltar</span>
      </button>
      <Link
        to={"/"}
        style={{ color: "inherit", textDecoration: "none" }}
        className="create-sheet-fast"
      >
        <button>Criar ficha rápida</button>
      </Link>
      <button onClick={handleNext} className="going-back">
        <span>Continuar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 svg-right"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </footer>
  );
};

export default FooterCS;
