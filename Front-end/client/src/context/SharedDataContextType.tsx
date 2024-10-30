// contexts/SharedDataContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SharedDataContextType {
  data: any;
  setData: (value: any) => void;
}

const SharedDataContext = createContext<SharedDataContextType | undefined>(undefined);

export const SharedDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(null); // Trạng thái chung

  return (
    <SharedDataContext.Provider value={{ data, setData, }}>
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedData = () => {
  const context = useContext(SharedDataContext);
  if (!context) throw new Error("useSharedData must be used within a SharedDataProvider");
  return context;
};
