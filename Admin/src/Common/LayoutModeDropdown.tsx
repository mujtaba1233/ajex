import React from 'react';

//constants
import { LAYOUT_MODE_TYPES } from "../Common/constants/layout";

const LayoutModeDropdown = ({ layoutMode, onChangeLayoutMode }:any) => {

    const mode = layoutMode === LAYOUT_MODE_TYPES['DARKMODE'] ? LAYOUT_MODE_TYPES['LIGHTMODE'] : LAYOUT_MODE_TYPES['DARKMODE'];
    
    return (
        <div className="ms-1 header-item d-none d-sm-flex">
            <button
                onClick={() => onChangeLayoutMode(mode)}
                type="button" className="btn btn-icon btn-topbar btn-ghost-primary rounded-circle light-dark-mode">
                <i className='las la-moon fs-24'></i>
            </button>
        </div>
    );
};

export default LayoutModeDropdown;