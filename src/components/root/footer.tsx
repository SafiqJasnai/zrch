interface FooterProps {
    children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({children}: {
    children: React.ReactNode;
}) => (
    <footer className="bg-slate-950 p-4 text-center">
      {children}
    </footer>
  );
  
  export default Footer;