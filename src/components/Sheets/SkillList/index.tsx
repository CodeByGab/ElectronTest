import "./index.scss";

interface Skills {
  FOR: number;
  AGI: number;
  INT: number;
  VIG: number;
  PRE: number;
}

function rollDice(rolls: number): number[] {
  const results: number[] = [];

  for (let i = 0; i < rolls; i++) {
    const rollResult = Math.floor(Math.random() * 20) + 1;
    results.push(rollResult);
  }
  return results;
}

const SkillsList = ({ FOR, AGI, INT, VIG, PRE }: Skills) => {
  return (
    <div className="listOfSkills">
      <div onClick={() => console.log(rollDice(FOR))} className="skillSquare">
        <span className="skill-number">{FOR}</span>
        <span className="skill-name">FOR</span>
      </div>
      <div onClick={() => console.log(rollDice(AGI))} className="skillSquare">
        <span className="skill-number">{AGI}</span>
        <span className="skill-name">AGI</span>
      </div>
      <div onClick={() => console.log(rollDice(INT))} className="skillSquare">
        <span className="skill-number">{INT}</span>
        <span className="skill-name">INT</span>
      </div>
      <div onClick={() => console.log(rollDice(VIG))} className="skillSquare">
        <span className="skill-number">{VIG}</span>
        <span className="skill-name">VIG</span>
      </div>
      <div onClick={() => console.log(rollDice(PRE))} className="skillSquare">
        <span className="skill-number">{PRE}</span>
        <span className="skill-name">PRE</span>
      </div>
    </div>
  );
};

export default SkillsList;
