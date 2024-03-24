import "./index.scss";
import { useEffect, useState } from "react";
import "./components/DropdownNex";
import DropdownNex from "./components/DropdownNex";

interface InitialData {
  level: string;
  forcaValue: number;
  agilidadeValue: number;
  inteligenciaValue: number;
  presencaValue: number;
  vigorValue: number;
}

interface AttributesProps {
  onUpdateAttributes: (data: InitialData) => void;
  initialData: InitialData;
}

const Attributes = ({ onUpdateAttributes, initialData }: AttributesProps) => {
  const [levelPoints, setLevelPoints] = useState<string>(
    initialData.level || "5%"
  );

  const changeMaxPoints = (level: string) => {
    const levelStr = parseInt(level.replace("%", ""), 10);

    if (levelStr >= 95) return 8;
    if (levelStr >= 80) return 7;
    if (levelStr >= 50) return 6;
    if (levelStr >= 20)  return 5
    return 4;
  };

  const [attributePoints, setAttributePoints] = useState<number>(() =>
    changeMaxPoints(levelPoints)
  );

  const [attPointsP, setAttPointsP] = useState<number>(attributePoints);

  const [forValue, setForcaValue] = useState<number>(initialData.forcaValue);
  const [agiValue, setAgilidadeValue] = useState<number>(
    initialData.agilidadeValue
  );
  const [intValue, setInteligenciaValue] = useState<number>(
    initialData.inteligenciaValue
  );
  const [preValue, setPresencaValue] = useState<number>(
    initialData.presencaValue
  );
  const [vigValue, setVigorValue] = useState<number>(initialData.vigorValue);
  const [shouldSave, setShouldSave] = useState(false);

  useEffect(() => {
    if (shouldSave) {
      const jsonData = {
        level: levelPoints,
        forcaValue: forValue,
        agilidadeValue: agiValue,
        inteligenciaValue: intValue,
        presencaValue: preValue,
        vigorValue: vigValue,
      };
      onUpdateAttributes(jsonData);
      setShouldSave(false);
    }
  }, [
    forValue,
    agiValue,
    intValue,
    preValue,
    vigValue,
    levelPoints,
    shouldSave,
    onUpdateAttributes,
    initialData,
  ]);

  const handleDropdownSelect = (selectedValue: string) => {
    const numberString = selectedValue;

    setAttributePoints(changeMaxPoints(numberString));

    setLevelPoints(numberString);
    setShouldSave(true);
  };

  const sumOfAtt = () => {
    return forValue + agiValue + intValue + preValue + vigValue;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeAttPointsP = () => {
    setAttPointsP(-sumOfAtt() + attributePoints + 5);
  };

  const checkDropDownChange = (value: number, maxValue: number) => {
    if (maxValue === 4 || maxValue === 5) {
      if (value > maxValue - 1) {
        return maxValue - 1;
      } else if (value > 5) {
        return 5;
      }
    }
    return value;
  };

  //*adjust the max value of attribute based on level
  const maxValue = attributePoints;
  useEffect(() => {
    setForcaValue(checkDropDownChange(forValue, maxValue));
    setAgilidadeValue(checkDropDownChange(agiValue, maxValue));
    setInteligenciaValue(checkDropDownChange(intValue, maxValue));
    setPresencaValue(checkDropDownChange(preValue, maxValue));
    setVigorValue(checkDropDownChange(vigValue, maxValue));
    changeAttPointsP();
  }, [
    forValue,
    agiValue,
    intValue,
    preValue,
    vigValue,
    maxValue,
    changeAttPointsP,
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    const inputId = e.target.id;

    //* check if the number on input is bigger then it can be
    const checkIfBigger = (attPoints: number) => {
      const lastNumber = value % 10;
      if (lastNumber < 0) value = 0;
      if (attPoints === 4 || attPoints === 5) {
        if (lastNumber > attPoints - 1) {
          value = attPoints - 1;
        } else {
          value = lastNumber;
        }
      }
      if (attPoints > 5) {
        lastNumber > 5 ? (value = 5) : (value = lastNumber);
      }
    };

    checkIfBigger(attributePoints);

    //* set the funcion on each input
    switch (inputId) {
      case "for":
        setForcaValue(value);
        setShouldSave(true);
        break;
      case "agi":
        setAgilidadeValue(value);
        setShouldSave(true);
        break;
      case "int":
        setInteligenciaValue(value);
        setShouldSave(true);
        break;
      case "pre":
        setPresencaValue(value);
        setShouldSave(true);
        break;
      case "vig":
        setVigorValue(value);
        setShouldSave(true);
        break;
      default:
        setShouldSave(true);
        break;
    }
  };

  return (
    <main className="att-main">
      <div className="left-att">
        <div className="text-camp-cs">
          <h4>Vamos começar!</h4>
          <p>
            Escolha o nível de exposição paranormal e preencha os atributos
            seguintes de acordo com a ideia e personalidade do seu personagem.
          </p>
          <p>
            Você atualmente possui{" "}
            <span className="att-points">{attPointsP}</span> pontos para
            distribuir entre seus atributos. Podendo colocar no máximo 3 até em
            15%, 4 em 45% e 5 nos próximos.
          </p>
        </div>
        <DropdownNex
          onSelect={handleDropdownSelect}
          onInputChange={handleInputChange}
          initialValue={initialData.level}
        />
      </div>
      <div className="right-att">
        <div className="att-select-top">
          <div className="att-input-cs">
            <input
              type="number"
              name="força"
              id="for"
              value={forValue}
              onChange={handleInputChange}
            />
            <span>FOR</span>
          </div>
          <div className="att-input-cs">
            <input
              type="number"
              name="agilidade"
              id="agi"
              value={agiValue}
              onChange={handleInputChange}
            />
            <span>AGI</span>
          </div>
          <div className="att-input-cs">
            <input
              type="number"
              name="inteligencia"
              id="int"
              value={intValue}
              onChange={handleInputChange}
            />
            <span>INT</span>
          </div>
        </div>
        <div className="att-select-bot">
          <div className="att-input-cs">
            <input
              type="number"
              name="presença"
              id="pre"
              value={preValue}
              onChange={handleInputChange}
            />
            <span>PRE</span>
          </div>
          <div className="att-input-cs">
            <input
              type="number"
              name="vigor"
              id="vig"
              value={vigValue}
              onChange={handleInputChange}
            />
            <span>VIG</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Attributes;
