import "./Button.style.css";

const Button = (props) => {
    return <div onClick={props.onPress} className="btn">{props.icon}</div>;
};

export default Button;
