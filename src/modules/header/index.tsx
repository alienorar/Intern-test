import { NavLink } from "react-router-dom";
import { headerLinks } from "../../router/routes";
import { useState, useEffect } from "react";
import { Button, Modal } from "@utils";
import "./index.css";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [bgColor, setBgColor] = useState<string>("transparent");

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor("#fff");
        } else {
            setBgColor("transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header style={{ backgroundColor: bgColor }}>
            <nav className="header_menu container ">
                {/* Hamburger Menu Button */}
                <button
                    className="hamburger_menu"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>

                {/* Drawer (Hamburger) Menu */}
                <div className={`hamburger_modal ${isMenuOpen ? "open" : ""}`}>
                    <button
                        className="close_hamburger_menu"
                        onClick={toggleMenu}
                        aria-label="Close Menu"
                    >
                        x
                    </button>
                    <ul className="header_links">
                        {headerLinks?.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo or Branding */}
                <p>Landing</p>

                {/* Buy Now Button */}
                <Button
                    text="Buy Now"
                    bgColor="#111B47"
                    textColor="#ffffff"
                    onClick={handleOpenModal}
                />

                {/* Modal */}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <h2>Modal Title</h2>
                    <p>This modal now includes smooth animations!</p>
                    <Button
                        text="Close Modal"
                        bgColor="#111b47"
                        textColor="#ffffff"
                        onClick={handleCloseModal}
                    />
                </Modal>
            </nav>
        </header>
    );
};

export default Header;
