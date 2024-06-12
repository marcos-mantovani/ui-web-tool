import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Web Tool",
  description: "Analise e otimeze sua interface gráfica através de um questionário detalhado e receba um relatório com sugestões práticas de melhoria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer /> 
      </body>
    </html>
  );
}
