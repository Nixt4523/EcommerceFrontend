import { createContext, useReducer } from "react";

/* eslint-disable react/prop-types */
const initialState = {
	isExpanded: true,
};

export const SidebarContext = createContext();

const sidebarContextReducer = (state, action) => {
	switch (action.type) {
		case "toggle":
			return { ...state, isExpanded: !state.isExpanded };
		default:
			return state;
	}
};

export const SidebarContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(sidebarContextReducer, initialState);
	return (
		<SidebarContext.Provider value={{ state, dispatch }}>
			{children}
		</SidebarContext.Provider>
	);
};
