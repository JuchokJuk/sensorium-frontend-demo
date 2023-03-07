import Placeholder from "@/components/shared/Placeholder";

interface SliderProps {
    text: string;
}
export const Slider: React.FC<SliderProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}