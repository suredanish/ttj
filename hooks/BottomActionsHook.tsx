"use client"
import { useState, ReactNode } from 'react';

export const usePopup = () => {
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const showPopup = (content: ReactNode) => {
    setPopupContent(content);
  };

  const hidePopup = () => {
    setPopupContent(null);
  };

  return { popupContent, showPopup, hidePopup };
};