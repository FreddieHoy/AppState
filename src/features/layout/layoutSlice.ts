import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";

export interface LayoutState {
  hasNavbar: boolean;
  hasSidebar: boolean;
}

const intialValues: LayoutState = {
  hasNavbar: true,
  hasSidebar: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: intialValues,
  reducers: {
    showNav: (state) => {
      state.hasNavbar = true;
    },
    hideNav: (state) => {
      state.hasNavbar = false;
    },
    showSidebar: (state) => {
      state.hasSidebar = true;
    },
    hideSidebar: (state) => {
      state.hasSidebar = false;
    },
  },
});

export const { hideNav, showNav, hideSidebar, showSidebar } =
  layoutSlice.actions;

export function useLayoutSlice() {
  return useAppSelector((state) => state.layout);
}
