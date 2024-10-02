'use client';

import React, { ReactNode, useEffect } from 'react';
import { usePopup } from './PopupContext';
interface AutoPopupProps {
    content: ReactNode;
  }
  
export const PopupTrigger: React.FC<AutoPopupProps> = ({content}) => {
  const { setPopupContent } = usePopup();

  useEffect(() => {
    setPopupContent(
      <>{content}</>
    );
  }, []);

  return null;
};