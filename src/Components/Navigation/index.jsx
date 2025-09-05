import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
import React from "react";

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
    const [lie, setLie] = React.useState(0);

    return (
        <>
            <div className={styles["navigation"]}>
                <div className={styles["home"]}>
                    <i className="fa-solid fa-house"></i>
                </div>
                <ul>
                    {items.map((item, index) => {
                        console.log(lie);
                        return (
                            <>
                                <li
                                    className={`${styles["list-item"]} ${
                                        index === lie ? styles["active"] : ""
                                    }`}
                                    data-index={index}
                                    key={index}
                                >
                                    <NavLink
                                        to={item.path}
                                        onClick={(e) => {
                                            const element = e.target.closest(
                                                `.${styles["list-item"]}`
                                            );

                                            const id = Number(
                                                element.dataset.index
                                            );
                                            setLie(id);
                                        }}
                                    >
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
