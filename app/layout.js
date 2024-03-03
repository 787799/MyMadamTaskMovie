"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { store } from "./GlobaRedux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <ErrorBoundary>
          <Provider store={store} >
            <Navbar />
            <div className="content">{children}</div>
            <Footer />
          </Provider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
