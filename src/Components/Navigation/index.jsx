import React from "react";
import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
import { useLocation } from "react-router";

const items = [
    {
        path: "/",
        title: "Home",
        icon: `fa-solid fa-house`,
    },
    {
        path: "/comments",
        title: "Comment",
        icon: `fa-solid fa-comment`,
    },
    {
        path: "/products",
        title: "Products",
        icon: `fa-brands fa-product-hunt`,
    },
    {
        path: "/counter",
        title: "Counter",
        icon: `fa-solid fa-calculator`,
    },
    {
        path: "/todo",
        title: "Todo",
        icon: `fa-solid fa-list-check`,
    },
    {
        path: "/weather",
        title: "Weather",
        icon: `fa-solid fa-cloud`,
    },
    {
        path: "/profile",
        title: "Profile",
        icon: `fa-solid fa-user`,
    },
];
function Navigation() {
    const param = useLocation();
    const [params, setParams] = React.useState(param.pathname);

    React.useEffect(() => {
        setParams(param.pathname);
    }, [param, setParams]);

    return (
        <>
            <div className={styles["navigation"]}>
                <div className={styles["home"]}>
                    <i className="fa-solid fa-house"></i>
                </div>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <>
                                <li
                                    className={`${styles["list-item"]} ${
                                        params === item.path
                                            ? styles.active
                                            : ""
                                    }`}
                                    key={index}
                                >
                                    <NavLink to={item.path} key={index}>
                                        <span className={styles["icon"]}>
                                            <i className={item.icon}></i>
                                        </span>
                                        <span className={styles["text"]}>
                                            {item.title}
                                        </span>
                                    </NavLink>
                                </li>
                            </>
                        );
                    })}

                    <div className={styles["indicator"]}></div>
                </ul>
            </div>
        </>
    );
}
export default Navigation;
