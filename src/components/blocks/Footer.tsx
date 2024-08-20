import { FooterBottom, FooterTop } from '../elements/Footer';

type Props = {
    className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer className={`relative w-full bg-[#000] ${className}`}>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
};

export default Footer;
