import React from "react";
import "./tagInput.css";
interface TagInputProps {
    label: string;
    hint: string;
    tags: number[];
    onChange: (tags: number[]) => void;
    accentColor?: string;
}
declare const TagInput: React.FC<TagInputProps>;
export default TagInput;
