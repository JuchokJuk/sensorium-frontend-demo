import Placeholder from "@/components/shared/Placeholder";

interface NFTWithRealUtilityProps {
    text: string;
}
export const NFTWithRealUtility: React.FC<NFTWithRealUtilityProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}