'use client'

import Footer from "@/components/root/footer";
import Header from "@/components/root/header";
import { LogoutButton } from "@/components/root/logout-button";
import { Label } from "@/components/ui/label";
import store from "@/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

interface DashboardLayoutProps {
  children: React.ReactNode;
  session: any
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, session }) => (
  <div className="min-h-screen flex flex-col">
    <Header>
      <div className="text-right">
        <LogoutButton />
      </div>
    </Header>
    <main className="flex-grow">
    <SessionProvider session={session}>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
    </main>
    <Footer>
        <Label className="text-white">Thanks!</Label>
    </Footer>
  </div>
);

export default DashboardLayout;