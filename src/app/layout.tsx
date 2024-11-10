export const metadata = {
  title: "My-Portfolio",
  description: "My-portfolio by sachin kumar",
};
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/darkmode";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/provider/auth";
import { ModalProvider } from "@/provider/modal";
const font = DM_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <AuthProvider>
              {children}
              <Toaster />
            </AuthProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
