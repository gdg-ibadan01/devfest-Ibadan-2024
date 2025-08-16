import type { Metadata } from 'next';
import './globals.css';
import DFIHeader from './_module/components/common/DFIheader';
import DFIFooter from './_module/components/common/DFIfooter';
import { google_sans } from './shared/font';
import { ReactLenis } from '@/utils/lenis';
import LayoutWrapper from './_module/components/ui/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Devfest Ibadan 2025',
  description: 'The Biggest GDG Event in Ibadan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define the route where you want to hide the footer
  const hideFooterRoutes = ['/schedule'];
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${google_sans.className}`}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
