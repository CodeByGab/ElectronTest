import { useState } from "react";
import "./index.scss";

type onSelectType = {
  onSelect: (selectValue: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue: string;
};

const DropdownNex = ({
  onSelect,
  onInputChange,
  initialValue,
}: onSelectType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    initialValue !== undefined && initialValue !== null
      ? initialValue
      : ""
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onInputChange({
      target: { value: option },
    } as React.ChangeEvent<HTMLInputElement>);
    onSelect(option);
  };

  const nexLevel = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    99,
  ];

  return (
    <div className="dropdown-nex">
      <button onClick={toggleDropdown} className="dropdown-toggle-nex">
        {selectedOption || "5%"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu-nex">
          {nexLevel.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(`${option}%`)}>
              {option}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownNex;
