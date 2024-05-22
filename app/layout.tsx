import { config } from "@/config";
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import Web3ModalProvider from "@/context/Web3ModalProvider";
import Navbar from "@/components/navbar/Navbar";
import { font } from "./fonts";

export const metadata: Metadata = {
    title: "Spin",
    description: "Spin",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {

    const initialState = cookieToInitialState(config, headers().get('cookie'))

    return (
        <html lang="en">
            <body className={font.className}>
                <Web3ModalProvider initialState={initialState}>
                    <Navbar />
                    {children}
                </Web3ModalProvider>
            </body>
        </html>
    );
}
