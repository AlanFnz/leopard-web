import '@/styles/globals.css';

import { Dialog } from '@/components/ui/Dialog';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dialog>{children}</Dialog>
    </>
  );
}
