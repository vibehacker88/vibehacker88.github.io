import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'VibeHacker88 - Zahlenrätsel & Próspera',
  description: 'Die Welt der Zahlenrätsel von Clifford A. Pickover, Nick Bostrom, Kuchen TV, Herr Kuchen, Shurjoka, Tomatolix und Auswanderungspläne nach Próspera von VibeHacker88.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
