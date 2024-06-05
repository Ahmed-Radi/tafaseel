"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IPopupContext {
	isPopupOpen: boolean;
	openPopup: () => void;
	closePopup: () => void;
}

const PopupContext = createContext<IPopupContext | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const openPopup = () => setIsPopupOpen(true);
	const closePopup = () => setIsPopupOpen(false);

	return (
		<PopupContext.Provider
			value={{
				isPopupOpen,
				openPopup,
				closePopup,
			}}>
			{children}
		</PopupContext.Provider>
	);
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
}