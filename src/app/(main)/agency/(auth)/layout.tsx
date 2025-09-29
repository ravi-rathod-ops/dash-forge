import React from "react";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      signInUrl="/agency/sign-in"
      signUpUrl="/agency/sign-up"
    >
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default Authlayout;
