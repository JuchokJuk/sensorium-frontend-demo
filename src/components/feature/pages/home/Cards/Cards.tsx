import Placeholder from "@/components/shared/Placeholder";

interface CardsProps {
    text: string;
}
export const Cards: React.FC<CardsProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}