interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='flex min-h-screen justify-center items-center overflow-hidden'>
      <main style={{ width: '45%' }}>{children}</main>
    </div>
  );
}
