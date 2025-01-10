type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Layout = ({ children, className = "" }: Props) => (
  <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
    {children}
  </div>
);
