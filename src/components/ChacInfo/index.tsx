import './index.scss'
import BarStatus from './components/BarStatus';

const ChacInfo = () => {
  const chacPic = 'https://via.placeholder.com/150';

  return(
    <div className="chac-info">
      <img src={chacPic} alt="" />
      <BarStatus text="pontos de vida" current={55} max={78} />
    </div>
  )
}

export default ChacInfo