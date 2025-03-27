function Button({ btnStyle, onClick, children }) {
  return (
    <button onClick={onClick} className={`${btnStyle}`} type="submit">
      {children}
    </button>
  );
}

export default Button;
