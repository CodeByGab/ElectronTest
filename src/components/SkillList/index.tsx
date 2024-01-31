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
        {FOR}
      </div>
      <div onClick={() => console.log(rollDice(AGI))} className="skillSquare">
        {AGI}
      </div>
      <div onClick={() => console.log(rollDice(INT))} className="skillSquare">
        {INT}
      </div>
      <div onClick={() => console.log(rollDice(VIG))} className="skillSquare">
        {VIG}
      </div>
      <div onClick={() => console.log(rollDice(PRE))} className="skillSquare">
        {PRE}
      </div>
    </div>
  );
};

export default SkillsList;
