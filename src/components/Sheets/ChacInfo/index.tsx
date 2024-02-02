import './index.scss'
import BarStatus from './components/BarStatus';

const ChacInfo = () => {
  const chacPic = 'https://via.placeholder.com/150';

  return(
    <div className="chac-info">
      <h3>Nome do personagem</h3>
      <img src={chacPic} alt="" />
      <BarStatus barColor = "#417841" text="pontos de vida" current={55} max={78} />
      <BarStatus barColor = "#5e5ed8" text="pontos de sanidade" current={55} max={78} />
    </div>
  )
}

export default ChacInfo