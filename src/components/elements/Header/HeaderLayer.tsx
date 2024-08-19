import cn from 'classnames';

type Props = {
    isVisible: boolean;
    className?: string;
    hideLayer: () => void;
};

const HeaderLayer: React.FC<Props> = ({ isVisible, className = '', hideLayer = () => {} }) => {
    return (
        <div
            onClick={hideLayer}
            className={cn(
                `fixed z-10 top-0 left-0 w-full h-full cursor-pointer bg-black/40 transition-all duration-300 ${className}`,
                {
                    'opacity-0 invisible': !isVisible,
                    'opacity-1 visible': isVisible,
                }
            )}
        />
    );
};

export default HeaderLayer;
