'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type PopupContextType = {
  setPopupContent: (content: ReactNode) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  return (
    <PopupContext.Provider value={{ setPopupContent }}>
      {children}
      <div className="bottom-actions">
        {popupContent}
      </div>
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};