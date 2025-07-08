/**
 *  @copyright 2025 lucas-backDev
 *  @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    onClick
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
            >
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </a>
        );
    } else {
        return (
            <button
                type="button"
                onClick={onClick}
                className={"btn btn-primary " + classes}
            >
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </button>
        );
    }
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func
};

/**
 * Outline Button
 */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    onClick
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </a>
        );
    } else {
        return (
            <button
                type="button"
                onClick={onClick}
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </button>
        );
    }
};

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func
};

export {
    ButtonPrimary,
    ButtonOutline
};
