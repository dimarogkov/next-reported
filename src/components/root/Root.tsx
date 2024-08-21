import { Footer, Header } from '../blocks';

type Props = {
    children?: React.ReactNode;
};

const Root: React.FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className='relative flex flex-col w-full min-h-screen'>
                <Header />
                <main className='relative flex-grow w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Root;
