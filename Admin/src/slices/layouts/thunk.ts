import { changeHTMLAttribute } from './utils';
import {
    changeLayoutAction,
    changeLayoutModeAction,
    changeSidebarThemeAction,
    changeLayoutWidthAction,
    changeLayoutPositionAction,
    changeTopbarThemeAction,
    changeLeftsidebarSizeTypeAction,
    changeLeftsidebarViewTypeAction,
} from './reducer';

/**
 * Changes the layout type
 * @param {*} param0
 */
export const changeLayout = (layout: any) => async (dispatch: any) => {
    try {
        if (layout === "horizontal") {
            document.documentElement.removeAttribute("data-sidebar-size");
        }
        changeHTMLAttribute("data-layout", layout);
        dispatch(changeLayoutAction(layout));
    } catch (error) { }
};

/**
 * Changes the layout mode
 * @param {*} param0
 */
export const changeLayoutMode = (layoutMode : any) => async (dispatch : any) => {
    try {
        switch (layoutMode) {
            case "light":
                changeHTMLAttribute("data-bs-theme", "dark");
                break;
            case "dark":
                changeHTMLAttribute("data-bs-theme", "dark");
                break;            
            default:
                changeHTMLAttribute("data-bs-theme", "dark");
                break;
        }
        dispatch(changeLayoutModeAction(layoutMode));
        dispatch(changeTopbarThemeAction(layoutMode));
    } catch (error) {
        // Handle any errors if needed
    }
};

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
export const changeSidebarTheme = (sidebarTheme: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-sidebar", sidebarTheme);        
        dispatch(changeSidebarThemeAction(sidebarTheme));
    } catch (error) {
        console.log(error);
    }
};

/**
 * Changes the layout width
 * @param {*} param0
 */
export const changeLayoutWidth = (layoutWidth: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-layout-width",layoutWidth);
        // if (layoutWidth === 'lg') {
        //     changeHTMLAttribute("data-layout-width", "fluid");
        // } else {
        //     changeHTMLAttribute("data-layout-width", "boxed");
        // }
        dispatch(changeLayoutWidthAction(layoutWidth));
    } catch (error) {
        return error;
    }
};

/**
 * Changes the layout position
 * @param {*} param0
 */
export const changeLayoutPosition = (layoutposition: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-layout-position", layoutposition);
        dispatch(changeLayoutPositionAction(layoutposition));
    } catch (error) {
        console.log(error);
    }
};

/**
 * Changes the topbar themes
 * @param {*} param0
 */
export const changeTopbarTheme = (topbarTheme: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-topbar", topbarTheme);
        dispatch(changeTopbarThemeAction(topbarTheme));

    } catch (error) {
        console.log(error);
    }
};


/**
 * Changes the left sidebar size
 * @param {*} param0
 */
export const changeLeftsidebarSizeType = (leftsidebarSizetype: any) => async (dispatch: any) => {
    try {
        switch (leftsidebarSizetype) {
            case 'lg':
                changeHTMLAttribute("data-sidebar-size", "lg");
                break;
            case 'md':
                changeHTMLAttribute("data-sidebar-size", "md");
                break;
            case "sm":
                changeHTMLAttribute("data-sidebar-size", "sm");
                break;
            case "sm-hover":
                changeHTMLAttribute("data-sidebar-size", "sm-hover");
                break;
            default:
                changeHTMLAttribute("data-sidebar-size", "lg");
        }
        dispatch(changeLeftsidebarSizeTypeAction(leftsidebarSizetype));

    } catch (error) {
        console.log(error);
    }
};

/**
 * Changes the left sidebar views
 * @param {*} param0
 */
export const changeLeftsidebarViewType = (leftsidebarViewtype: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-layout-style", leftsidebarViewtype);
        dispatch(changeLeftsidebarViewTypeAction(leftsidebarViewtype));
    } catch (error) {
        console.log(error);
    }
};

