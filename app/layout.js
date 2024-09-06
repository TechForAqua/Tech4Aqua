import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech4Aqua",
  description:
    "Discover innovative AI solutions designed to transform your business. Our AI-powered technology streamlines processes, enhances decision-making, and drives growth across industries. From machine learning algorithms to predictive analytics, our solutions are tailored to meet the unique needs of your business, improving efficiency and delivering actionable insights. Explore how AI can revolutionize your operations and unlock new potential with our expert-led approach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
