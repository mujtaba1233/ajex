import React from "react";
import { Link } from "react-router-dom";

type CustomToggleProps = {
    onClick?: any;
    children?: any;
    className : string;
    isButton ?: boolean;
};

const CustomDropdownToggle = React.forwardRef(
    ({onClick, children,className , isButton} : CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <>
    {isButton ?
    <>
    <button
        // to="#"
        // ref={ref}
        className={className + " arrow-none"}
        onClick={(e : any) => {
            e.preventDefault();
            onClick(e);
        }}
    >
     {children}
    </button>
    </>
    :
    <>
        <Link
            to="#"
            ref={ref}
            className={className + " arrow-none"}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
        {children}
        </Link>
    </>
    }
    </>
));

export default CustomDropdownToggle;