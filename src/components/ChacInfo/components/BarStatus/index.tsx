import './index.scss';

interface currentMax {
  text: string,
  current: number,
  max: number,
  barColor: string
}

// function animation(): void{

// }

const BarStatus = ({text, current, max, barColor}: currentMax) => {
  return (
    <div className='status-info'>
      <span>{text}</span>
      <div className="status-bar" style={{ backgroundColor: barColor }}></div>
      <div className="status-bar-text">{current}/{max}</div>
    </div>
  )
}

export default BarStatus