import Placeholder from "@/components/shared/Placeholder";

interface ConstructorProps {
    text: string;
}
export const Constructor: React.FC<ConstructorProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}