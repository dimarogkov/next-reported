import { FooterBottom, FooterTop } from '../elements/Footer';

const Footer: React.FC = () => {
    return (
        <footer className='relative w-full bg-[#000]'>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
};

export default Footer;
