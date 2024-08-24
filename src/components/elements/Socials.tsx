import Link from 'next/link';
import { EnumSocials } from '@/src/types/enums';
import { socials } from '@/src/variables/socials';
import cn from 'classnames';

type Props = {
    type?: string;
    className?: string;
};

const Socials: React.FC<Props> = ({ type = EnumSocials.default, className = '' }) => {
    return (
        <div className={`relative flex gap-4 w-full ${className}`}>
            {socials.map(({ id, href, icon: SocialIcon }) => (
                <Link
                    href={href}
                    className={cn(
                        'group flex flex-wrap items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300',
                        {
                            'border-black/45 hover:bg-black': type === EnumSocials.default,
                            'border-white/40 hover:bg-white': type === EnumSocials.light,
                        }
                    )}
                    target='_blank'
                    key={id}
                >
                    <SocialIcon
                        className={cn('w-5 h-5 stroke-1 transition-colors duration-300', {
                            'text-black group-hover:text-white': type === EnumSocials.default,
                            'text-white group-hover:text-black': type === EnumSocials.light,
                        })}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Socials;
