import Placeholder from "@/components/shared/Placeholder";

interface FormProps {
    text: string;
}
export const Form: React.FC<FormProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}