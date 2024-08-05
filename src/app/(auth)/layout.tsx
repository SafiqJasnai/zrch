'use client';

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  session: any;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, session }) => (
  <SessionProvider session={session}>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {children}
    </div>
  </SessionProvider>
);

export default AuthLayout;