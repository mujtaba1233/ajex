import React, { ReactNode, useEffect } from 'react';

//import actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType
} from "../slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
// import TopBar from './TopBar';

import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
// import { changeLayoutTheme } from '../slices/layouts/thunk';
import withRouter from '../Common/withRouter';
import { createSelector } from 'reselect';


interface LayoutProps {
    children: ReactNode;
}
const Layout = (props: LayoutProps) => {

    const dispatch: any = useDispatch();
    
    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout:any) => ({
            layoutType: layout.layoutType,
            layoutThemeType: layout.layoutThemeType,
            leftSidebarType: layout.leftSidebarType,
            layoutModeType: layout.layoutModeType,
            layoutWidthType: layout.layoutWidthType,
            layoutPositionType: layout.layoutPositionType,
            topbarThemeType: layout.topbarThemeType,
            leftsidbarSizeType: layout.leftsidbarSizeType,
            leftSidebarViewType: layout.leftSidebarViewType,
        })
    );
    const {
        layoutType,        
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
    } = useSelector(selectLayoutProperties);

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||            
            leftSidebarType ||
            layoutModeType ||
            layoutWidthType ||
            layoutPositionType ||
            topbarThemeType ||
            leftsidbarSizeType ||
            leftSidebarViewType
            
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLeftsidebarViewType(leftSidebarViewType));
            // dispatch(changeLayoutTheme(layoutThemeType));
            dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
            dispatch(changeSidebarTheme(leftSidebarType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeLayoutWidth(layoutWidthType));
            dispatch(changeLayoutPosition(layoutPositionType));
            dispatch(changeTopbarTheme(topbarThemeType));
            dispatch(changeLayout(layoutType));
        }
    }, [layoutType,       
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,        
        dispatch]);

        const onChangeLayoutMode = (value:any) => {
            if (changeLayoutMode) {
                dispatch(changeLayoutMode(value));
            }
        };

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Sidebar layoutType={layoutType} />
                <Header 
                    layoutModeType={layoutModeType}
                    onChangeLayoutMode={onChangeLayoutMode} />
                <div className="main-content">
                    {props.children}
                    <Footer />
                </div>
            </div>
            <RightSidebar />
        </React.Fragment>
    );
}

export default withRouter(Layout);