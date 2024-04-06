import { createSlice } from "@reduxjs/toolkit";
//constants
import {
  LAYOUT_TYPES,
  LAYOUT_MODE_TYPES,
  LAYOUT_SIDEBAR_TYPES,
  LAYOUT_WIDTH_TYPES,
  LAYOUT_POSITION_TYPES,
  LAYOUT_TOPBAR_THEME_TYPES,
  LEFT_SIDEBAR_SIZE_TYPES,
  LEFT_SIDEBAR_VIEW_TYPES
} from "../../Common/constants/layout";

export interface LayoutState {
  layoutType: LAYOUT_TYPES.HORIZONTAL | LAYOUT_TYPES.VERTICAL;
  layoutModeType: LAYOUT_MODE_TYPES.LIGHTMODE | LAYOUT_MODE_TYPES.DARKMODE;
  layoutWidthType: LAYOUT_WIDTH_TYPES.FLUID | LAYOUT_WIDTH_TYPES.BOXED;
  layoutPositionType: LAYOUT_POSITION_TYPES.FIXED | LAYOUT_POSITION_TYPES.SCROLLABLE;
  topbarThemeType: LAYOUT_TOPBAR_THEME_TYPES.LIGHT | LAYOUT_TOPBAR_THEME_TYPES.DARK;
  leftsidbarSizeType: LEFT_SIDEBAR_SIZE_TYPES.DEFAULT | LEFT_SIDEBAR_SIZE_TYPES.COMPACT | LEFT_SIDEBAR_SIZE_TYPES.SMALLICON | LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER;
  leftSidebarViewType: LEFT_SIDEBAR_VIEW_TYPES.DEFAULT | LEFT_SIDEBAR_VIEW_TYPES.DETACHED;
  leftSidebarType: LAYOUT_SIDEBAR_TYPES.LIGHT | LAYOUT_SIDEBAR_TYPES.DARK
}

export const initialState = {
  layoutType: "vertical",
  layoutModeType: "dark",
  leftSidebarType: "dark",
  layoutWidthType: "fluid",
  layoutPositionType: "fixed",
  topbarThemeType: "dark",
  leftsidbarSizeType: "lg",
  leftSidebarViewType: "default",
};

const LayoutSlice = createSlice({
  name: 'LayoutSlice',
  initialState,
  reducers: {
    changeLayoutAction(state: any, action: any) {
      // state.layoutType = action.payload;
    },
    changeLayoutModeAction(state: any, action: any) {
      // state.layoutModeType = action.payload;
    },
    changeSidebarThemeAction(state: any, action: any) {
      // state.leftSidebarType = action.payload;
    },
    changeLayoutWidthAction(state: any, action: any) {
      // state.layoutWidthType = action.payload;
    },
    changeLayoutPositionAction(state: any, action: any) {
      // state.layoutPositionType = action.payload;
    },
    changeTopbarThemeAction(state: any, action: any) {
      // state.topbarThemeType = action.payload;
    },
    changeLeftsidebarSizeTypeAction(state: any, action: any) {
      // state.leftsidbarSizeType = action.payload;
    },
    changeLeftsidebarViewTypeAction(state: any, action: any) {
      // state.leftSidebarViewType = action.payload;
    },

  }
});

export const {
  changeLayoutAction,
  changeLayoutModeAction,
  changeSidebarThemeAction,
  changeLayoutWidthAction,
  changeLayoutPositionAction,
  changeTopbarThemeAction,
  changeLeftsidebarSizeTypeAction,
  changeLeftsidebarViewTypeAction,
} = LayoutSlice.actions;

export default LayoutSlice.reducer;