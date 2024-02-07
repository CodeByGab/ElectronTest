import { ChangeEvent } from "react";

interface AttributesProps {
  nivelPersonagem: string;
  setNivelPersonagem: React.Dispatch<React.SetStateAction<string>>;
  avancarEtapa: () => void;
}

const Attributes = ({ nivelPersonagem, setNivelPersonagem, avancarEtapa }: AttributesProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNivelPersonagem(e.target.value);
  };
  const handleAvancar = () => {
    // Validação ou lógica adicional antes de avançar para a próxima etapa
    avancarEtapa();
  };
  return (
    <>
    <h2>Selecione o nível do personagem:</h2>
      <select value={nivelPersonagem} onChange={handleChange}>
        <option value="1">Nível 1</option>
        <option value="2">Nível 2</option>
        <option value="3">Nível 3</option>
        {/* Outras opções de níveis */}
      </select>
      <button onClick={handleAvancar}>Avançar</button>
    </>
  )
}

export default Attributes;
