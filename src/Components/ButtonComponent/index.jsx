import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    onClick = null,
    loading = false,
    children,
    href,
    size = "medium",
    className,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    });

    const Component = href ? "a" : "button";

    return (
        <Component
            {...passProps}
            href={href}
            className={clsx(classNames)}
            onClick={() => {
                if (!disabled && !loading) {
                    onClick();
                }
            }}
        >
            {loading ? <i className="fa-solid fa-spinner"></i> : children}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.function,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
