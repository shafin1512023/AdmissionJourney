import "./Footer.style.css";

const Footer = () => {
    const date = new Date();
    return <h4 className="copyright">Copyright © {date.getFullYear()}</h4>;
};

export default Footer;
