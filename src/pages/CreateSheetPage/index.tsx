import { useState } from "react";
import "./index.scss";
import Attributes from "../../components/CreateSheets/Attributes";
import Origin from "../../components/CreateSheets/Origin";
import FooterCS from "../../components/CreateSheets/FooterCS";
import Classes from "../../components/CreateSheets/Classes";

const CreateSheetPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attributesData, setAttributesData] = useState<InitialData>({
    level: "5%",
    forcaValue: 1,
    agilidadeValue: 1,
    inteligenciaValue: 1,
    presencaValue: 1,
    vigorValue: 1,
  });
  // const [sheetData, updateSheetData] = useState({});

  // const handleSave = () => {
  //   // Convertendo os dados para JSON e atualizando o estado
  //   const jsonData = JSON.stringify(sheetData);
  //   updateSheetData(jsonData);
  // };

  interface InitialData {
    level: string;
    forcaValue: number;
    agilidadeValue: number;
    inteligenciaValue: number;
    presencaValue: number;
    vigorValue: number;
  }

  const updateAttributesData = (data: InitialData) => {
    setAttributesData(data);
  };
  
  return (
    <>
      {currentIndex === 0 && (
        <Attributes
          onUpdateAttributes={updateAttributesData}
          initialData={attributesData}
        />
      )}

      {currentIndex === 1 && (<Origin
          // onUpdateOrigin={updateOriginData}
          // initialData={originData}
        />)}
      {currentIndex === 2 && (<Classes
          // onUpdateClasses={updateClassesData}
          // initialData={classesData}
        />)}

      <FooterCS
        currentIndex={currentIndex}
        onBack={() => setCurrentIndex(currentIndex - 1)}
        onNext={() => {
          setCurrentIndex(currentIndex + 1);
        }}
      />
    </>
  );
};

export default CreateSheetPage;
