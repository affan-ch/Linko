import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import { Providers } from '@/components/nextui-provider';
import { ThemeProvider } from "@/components/theme-provider"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Providers><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >{children}</ThemeProvider></Providers></body>
    </html>
  )
}
