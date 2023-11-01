import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Subjects.style.css";
import { Link } from "react-router-dom"

const icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="512"
        height="512"
    >
        <path d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z" />
    </svg>
);

const Subjects = () => {
    return (
        <div className="subjects">
            <Link to={"/"}><Button icon={icon} /></Link>
            <Card heading="Physics" description="🥰🥰🥰🥰🥰🥰" />
            <Card heading="Chemistry" description="🤢🤢🤢🤢🤢🤢" />
            <Card heading="Biology" description="😨😨😨😨😨😨" />
            <Card heading="Higher Math" description="🥰🥰🥰🥰🥰🥰" />
        </div>
    );
};

export default Subjects;
