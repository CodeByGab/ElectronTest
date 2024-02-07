import './index.scss'

const FooterCS = ({ onBack, onNext }: () => void) => {
  return (
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
  )
}

export default FooterCS;