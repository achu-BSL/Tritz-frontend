import toast, { Toaster } from "react-hot-toast";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-tertiary">
        <Toaster toastOptions={{duration: 3000}} />
        <NextUIProvider>{children}</NextUIProvider>
        <h1>Hello</h1>
      </body>
    </html>
  );
}
