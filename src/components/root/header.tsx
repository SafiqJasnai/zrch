interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}: {
    children: React.ReactNode;
}) => (
    <header className="p-4">
      {children}
    </header>
  );
  
export default Header;