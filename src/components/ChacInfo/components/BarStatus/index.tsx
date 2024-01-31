import './index.scss';

interface currentMax {
  text: string,
  current: number,
  max: number
}

// function animation(): void{

// }

const BarStatus = ({text, current, max}: currentMax) => {
  return (
    <div className='status-info'>
      <span>{text}</span>
      <div className="status-bar"></div>
      <div className="status-bar-text">{current}/{max}</div>
    </div>
  )
}

export default BarStatus