function ButtonDifficult({ children, onSetDifficulty }) {
  return <button onClick={onSetDifficulty}>{children}</button>;
}

export default ButtonDifficult;
