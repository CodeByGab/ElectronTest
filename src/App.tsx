import "./App.scss";
import SkillsProps from "./components/SkillList";
import ChacInfo from "./components/ChacInfo";

function App() {
  return (
    <div className="app-container">
      <div className="side-container">
        <ChacInfo />
      </div>
      <div className="main-container">
        <SkillsProps FOR={4} AGI={2} INT={1} VIG={5} PRE={3} />
        
        <SkillsProps FOR={4} AGI={2} INT={1} VIG={5} PRE={3} />
      </div>
    </div>
  );
}

export default App;
