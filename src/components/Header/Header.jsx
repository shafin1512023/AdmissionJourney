import { useState } from "react";
import Button from "../Button/Button";
import "./Header.style.css";

const icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="512"
        height="512"
    >
        <path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,21V3c4.96,0,9,4.04,9,9s-4.04,9-9,9Z" />
    </svg>
);

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const darkMode = () => {
        const root = document.querySelector("html");

        if (!isDark) {
            root.style.setProperty("--text-color", "var(--dark-text)");
            root.style.setProperty("--bg-color", "var(--dark-bg)");
            root.style.setProperty("--primary-color", "var(--dark-primary)");
            root.style.setProperty("--shadow-color", "var(--dark-shadow)");
            setIsDark(true);
        } else {
            root.style.setProperty("--text-color", "var(--light-text)");
            root.style.setProperty("--bg-color", "var(--light-bg)");
            root.style.setProperty("--primary-color", "var(--light-primary)");
            root.style.setProperty("--shadow-color", "var(--light-shadow)");
            setIsDark(false);
        }
    };
    return (
        <div className="header">
            <div className="logo">
                <h1>Admission Journey</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="512"
                    height="512"
                >
                    <path d="M24,20c0,2.206-1.794,4-4,4H7.854l2.045-2h10.102c1.103,0,2-.897,2-2s-.897-2-2-2h-5c-2.206,0-4-1.794-4-4,0-1.927,1.37-3.539,3.187-3.916l1.959,1.916h-1.146c-1.103,0-2,.897-2,2s.897,2,2,2h5c2.206,0,4,1.794,4,4Zm-1.465-11.464c1.95-1.95,1.95-5.122,0-7.071-.944-.944-2.2-1.464-3.535-1.464s-2.591,.52-3.536,1.464c-1.949,1.95-1.949,5.122,.008,7.079l3.528,3.45,3.535-3.458Zm-1.414-5.657c1.17,1.17,1.17,3.073,.008,4.235l-2.129,2.082-2.122-2.074c-1.169-1.17-1.169-3.073,0-4.243,.567-.567,1.32-.879,2.122-.879s1.555,.312,2.121,.878ZM8.535,20.536c1.95-1.95,1.95-5.122,0-7.071-.944-.944-2.2-1.464-3.535-1.464s-2.591,.52-3.536,1.464c-1.949,1.95-1.949,5.122,.008,7.079l3.528,3.45,3.535-3.458Zm-1.414-5.657c1.17,1.17,1.17,3.073,.008,4.235l-2.129,2.082-2.122-2.074c-1.169-1.17-1.169-3.073,0-4.243,.567-.567,1.32-.879,2.122-.879s1.555,.312,2.121,.878Z" />
                </svg>
            </div>
            <Button icon={icon} onPress={darkMode} />
        </div>
    );
};

export default Header;
