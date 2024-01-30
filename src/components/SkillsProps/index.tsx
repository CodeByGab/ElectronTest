import './index.scss'

interface Skills {
  FOR: number,
  AGI: number,
  INT: number,
  VIG: number,
  PRE: number
}

const SkillsProps = ({FOR, AGI, INT, VIG, PRE}: Skills) => {
  return (
    <div className='listOfSkills'>
      <div className='skillSquare'>
        {FOR}</div>
      <div className='skillSquare'>
        {AGI}</div>
      <div className='skillSquare'>
        {INT}</div>
      <div className='skillSquare'>
        {VIG}</div>
      <div className='skillSquare'>
        {PRE}</div>
    </div>
  )
}

export default SkillsProps;