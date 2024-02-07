import { ChangeEvent } from "react";

interface OrigemProps {
  origemPersonagem: string;
  setOrigemPersonagem: React.Dispatch<React.SetStateAction<string>>;
  avancarEtapa: () => void;
  voltarEtapa: () => void;
}

const Origin = ({ origemPersonagem, setOrigemPersonagem, avancarEtapa, voltarEtapa }: OrigemProps) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrigemPersonagem(e.target.value);
  };

  const handleAvancar = () => {
    // Validação ou lógica adicional antes de avançar para a próxima etapa
    avancarEtapa();
  };

  const handleVoltar = () => {
    voltarEtapa();
  };

  return (
    <>
    <h2>Selecione a origem do personagem:</h2>
      <select value={origemPersonagem} onChange={handleChange}>
        <option value="origem1">Origem 1</option>
        <option value="origem2">Origem 2</option>
        <option value="origem3">Origem 3</option>
        {/* Outras opções de origens */}
      </select>
      <button onClick={handleVoltar}>Voltar</button>
      <button onClick={handleAvancar}>Avançar</button>
    </>
  )
}

export default Origin;