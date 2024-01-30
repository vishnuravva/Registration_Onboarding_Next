const Input = (props) => {
  const { title, placeholder, type, name, onChange, value, requireNeed } =
    props;
  return (
    <div className="my-3">
      <p className="my-2 color_signin_input">
        {title} {requireNeed ? <sup>*</sup> : <span></span>}
      </p>
      <input
        value={value}
        onChange={onChange}
        name={name}
        className="input_signin"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
