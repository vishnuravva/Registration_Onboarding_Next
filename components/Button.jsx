import "../app/globals.css";
const Button = ({ title,styles }) => {
  return (
    <div>
      <button className={`w-75 ${styles}`}>{title}</button>
    </div>
  );
};

export default Button;
