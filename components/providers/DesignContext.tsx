"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type DesignVariant = "heritage" | "royal" | "oasis";
export type StructureVariant = "structure1" | "structure2" | "structure3";

interface DesignContextType {
  design: DesignVariant; // Legacy support matching old implementation
  setDesign: (design: DesignVariant) => void;
  theme: DesignVariant;
  setTheme: (theme: DesignVariant) => void;
  structure: StructureVariant;
  setStructure: (structure: StructureVariant) => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<DesignVariant>("heritage");
  const [structure, setStructureState] = useState<StructureVariant>("structure1");

  // Load selections from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("hamedia-design-variant") as DesignVariant;
    if (savedTheme && ["heritage", "royal", "oasis"].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
    const savedStructure = localStorage.getItem("hamedia-structure-variant") as StructureVariant;
    if (savedStructure && ["structure1", "structure2", "structure3"].includes(savedStructure)) {
      setStructureState(savedStructure);
    }
  }, []);

  const setTheme = (newTheme: DesignVariant) => {
    setThemeState(newTheme);
    localStorage.setItem("hamedia-design-variant", newTheme);
  };

  const setStructure = (newStructure: StructureVariant) => {
    setStructureState(newStructure);
    localStorage.setItem("hamedia-structure-variant", newStructure);
  };

  return (
    <DesignContext.Provider
      value={{
        design: theme, // Legacy mapping
        setDesign: setTheme, // Legacy mapping
        theme,
        setTheme,
        structure,
        setStructure,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
};
