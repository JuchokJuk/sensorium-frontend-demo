import Placeholder from "@/components/shared/Placeholder";

interface FooterProps {
    text: string;
}
export const Footer: React.FC<FooterProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}