import '@/styles/globals.css';

import { SiteHeader } from '@/components/layout/SiteHeader';
import { Dialog } from '@/components/ui/Dialog';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <SiteHeader user={null} />
        {children}
      </Dialog>
    </>
  );
}
