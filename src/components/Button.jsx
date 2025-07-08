"use client"

interface ButtonProps {
    href?: string
    target?: string
    label: string
    icon?: string
    classes?: string
    onClick?: () => void
}

const ButtonPrimary = ({ href, target = "_self", label, icon, classes = "", onClick }: ButtonProps) => {
    if (onClick) {
        return (
            <button className={`btn btn-primary ${classes}`} onClick={onClick}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        )
    }

    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-primary ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        )
    }

    return (
        <button className={`btn btn-primary ${classes}`}>
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    )
}

const ButtonOutline = ({ href, target = "_self", label, icon, classes = "", onClick }: ButtonProps) => {
    if (onClick) {
        return (
            <button className={`btn btn-outline ${classes}`} onClick={onClick}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        )
    }

    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-outline ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        )
    }

    return (
        <button className={`btn btn-outline ${classes}`}>
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    )
}

export { ButtonPrimary, ButtonOutline }
