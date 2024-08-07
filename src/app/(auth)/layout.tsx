import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    {children}
  </div>
);

export default AuthLayout;