import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { CurrencyProvider } from '@/lib/currency-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://atlaasstays.com'),
  title: 'AtlaasStays — Global Travel, Reimagined',
  description:
    'AtlaasStays Global Technologies — book hotels, flights, vacation rentals, and transfers with AI-powered concierge and dynamic pricing.',
  openGraph: {
    title: 'AtlaasStays — Global Travel, Reimagined',
    description:
      'Book hotels, flights, vacation rentals, and transfers with AI-powered concierge and dynamic pricing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AtlaasStays — Global Travel, Reimagined',
    description:
      'Book hotels, flights, vacation rentals, and transfers with AI-powered concierge and dynamic pricing.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <script
  data-noptimize="1"
  data-cfasync="false"
  data-wpfc-render="false"
  seraph-accel-crit="1"
  data-no-defer="1"
  data-cmp-ab="2"
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
         var script = document.createElement("script");
         script.async = 1;
         script.setAttribute("data-cmp-ab","2");
         script.src = 'https://emrldtp.com/NTc5MTc3.js?t=579177';

         document.head.appendChild(script);
      })();
    `
  }}
/>

      <body className="font-sans antialiased">
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
