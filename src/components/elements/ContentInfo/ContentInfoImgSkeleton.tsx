type Props = {
    children?: React.ReactNode;
};

const ContentInfoImgSkeleton: React.FC<Props> = ({ children }) => {
    return <div className='relative w-full h-0 pb-[85%] rounded-lg overflow-hidden skeleton'>{children}</div>;
};

export default ContentInfoImgSkeleton;
