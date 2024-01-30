interface TestPropsInt {
  name: string
}

const TestProps = (props: TestPropsInt) => {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  )
}

export default TestProps;