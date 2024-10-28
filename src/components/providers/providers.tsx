"use client";

import React from 'react';
import { dark } from "@clerk/themes";
import { ClerkProvider } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <NextUIProvider>

            {children}
            </NextUIProvider>
        </ClerkProvider>
    )
};

export default Providers
