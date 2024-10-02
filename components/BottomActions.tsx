"use client"
import React, { useState, useRef, FC } from 'react';

interface BottomActionsProps {
  children: React.ReactNode;
}

const BottomActions: FC<BottomActionsProps> = ({ children }) => {

  return (
    <div className="bottom-actions">
      <div>
        {children}
      </div>
    </div>
  );
};

export default BottomActions;