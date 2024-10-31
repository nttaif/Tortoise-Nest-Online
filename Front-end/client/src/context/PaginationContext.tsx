"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface PaginationContextType {
  currentPage: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9); // Default page size

  return (
    <PaginationContext.Provider value={{ currentPage, pageSize, setCurrentPage, setPageSize }}>
      {children}
    </PaginationContext.Provider>
  );
};

// Custom hook to use pagination context
export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) throw new Error("usePagination must be used within a PaginationProvider");
  return context;
};
