import "./Card.style.css";

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.heading}</h1>
            <p>
                {props.description}
            </p>
        </div>
    );
};

export default Card;
