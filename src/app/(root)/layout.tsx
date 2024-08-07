'use client'

import Footer from "@/components/root/footer";
import Header from "@/components/root/header";
import { LogoutButton } from "@/components/root/logout-button";
import { Label } from "@/components/ui/label";
import store from "@/store";
import { Provider } from "react-redux";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header>
      <div className="text-right">
        <LogoutButton />
      </div>
    </Header>
    <main className="flex-grow">
      <Provider store={store}>
        {children}
      </Provider>
    </main>
    <Footer>
        <Label className="text-white">Thanks!</Label>
    </Footer>
  </div>
);

export default DashboardLayout;