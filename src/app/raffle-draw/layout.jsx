import { Roboto } from "next/font/google";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"]
});

export const metadata = {
  title: "Raffle Draw",
  description: "Generated by create next app",
  keywords: ["beauty booth raffle draw","raffle draw"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}