import Placeholder from "@/components/shared/Placeholder";

interface GalaxyOfStarsProps {
    text: string;
}
export const GalaxyOfStars: React.FC<GalaxyOfStarsProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}