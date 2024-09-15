"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";

const creditsUsageContext = createContext<{
  usedCredits: number | null;
  setUsedCredits: React.Dispatch<React.SetStateAction<number | null>>;
} | null>(null);

export default function Providers({ children }: { children: ReactNode }) {
  const [usedCredits, setUsedCredits] = useState<number | null>(null);
  return (
    <SessionProvider>
      <creditsUsageContext.Provider value={{ usedCredits, setUsedCredits }}>
        {children}
      </creditsUsageContext.Provider>
    </SessionProvider>
  );
}

export function useCreditsUsage() {
  const context = useContext(creditsUsageContext);
  if (!context) {
    throw new Error(
      "useCreditsUsage must be used within a CreditsUsageProvider"
    );
  }
  return context;
}
