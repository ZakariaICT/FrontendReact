import React, {useState, useEffect} from "react";
import "./Navbar.css"
import AccountService from '../components/Account/AccountService';


export default function Navbar (props) {

    const [logged, setLogged] = useState(false)

    useEffect(() => {
      console.log(props.logged)
      console.log("logged =>" + logged)
      setLogged(props.logged)
    }, [props.logged])
    

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler")
    const navToggle = () => {
        active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");

        // TogglerIcon

        toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle" ) : setToggleIcon("nav__toggler");
    }

    return (
        <nav className="nav">
            <a href="#" className="nav__brand">Crypto Tracker</a>
            <ul className="nav__menu">
                {
                    logged === "true" ? (
                        <div>
                        <li className="nav__item">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            Coins
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/Exchanges" className="nav__link">
                            Exchanges
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/Login" className="nav__link">
                            Register
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/Loginn" className="nav__link">
                            Sign in
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/Favourites" className="nav__link">
                            Favourites
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/GetAllAccounts" className="nav__link">
                            Accounts
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/CreateAccount" className="nav__link">
                            Registreer
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/ChatRoom" className="nav__link">
                            Chatroom
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/AllCoins" className="nav__link">
                            All User Coins
                        </a>
                    </li>
                    <li className="nav__item" onClick={() => {localStorage.clear()}}>
                        <a href="/LoginUser" className="nav__link">
                            Log out
                        </a>
                    </li>
                    </div>

                    ) : (
                
                        <div>

                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/CreateAccount" className="nav__link">
                        Registreer
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/LoginUser" className="nav__link">
                        Login
                    </a>
                </li>
                </div>
                    )
}
            </ul>
            <div onClick = {navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

