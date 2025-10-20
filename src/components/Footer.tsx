const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Deeghau Vidarshana. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-secondary-foreground/70">
          Built with passion using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
