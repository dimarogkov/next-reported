'use client';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Footer, Header } from '../blocks';
import cn from 'classnames';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    children?: React.ReactNode;
};

const Root: React.FC<Props> = ({ children }) => {
    const [isBodyLock, setIsBodyLock] = useState(false);

    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={cn(`relative flex flex-col w-full min-h-screen ${inter.className}`, {
                    'overflow-hidden': isBodyLock,
                })}
            >
                <Header setIsBodyLock={setIsBodyLock} />
                <main className='relative flex-grow w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Root;
