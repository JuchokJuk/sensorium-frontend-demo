import Placeholder from "@/components/shared/Placeholder";

interface SliderProps {
    text: string;
}
export const AvatarSlider: React.FC<SliderProps> = ({ text }) => {
    return (
        <Placeholder text={text}></Placeholder>
    );
}