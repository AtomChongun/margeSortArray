import React, { useState, useRef } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";
import "./tagInput.css";

interface TagInputProps {
  label: string;
  hint: string;
  tags: number[];
  onChange: (tags: number[]) => void;
  accentColor?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  hint,
  tags,
  onChange,
  accentColor = "#1976d2",
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = (raw: string): void => {
    const v = raw.trim();
    if (!v) return;
    const n = Number(v);
    if (isNaN(n)) {
      setError(`"${v}" is not a valid number`);
      return;
    }
    setError("");
    onChange([...tags, n]);
  };

  const removeTag = (index: number): void => {
    onChange(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      addTag(inputValue);
      setInputValue("");
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    if (val.endsWith(",")) {
      addTag(val.slice(0, -1));
      setInputValue("");
    } else {
      setInputValue(val);
      if (error) setError("");
    }
  };

  return (
    <div className="tag-input-wrapper">
      <label className="tag-input-label">{label}</label>

      <div
        className={`tag-input-box${focused ? " focused" : ""}`}
        style={{
          borderColor: focused ? accentColor : undefined,
          boxShadow: focused ? `0 0 0 3px ${accentColor}22` : undefined,
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag, i) => (
          <span
            key={i}
            className="tag-item"
            style={{
              background: `${accentColor}18`,
              color: accentColor,
              border: `1px solid ${accentColor}40`,
            }}
          >
            {tag}
            <button
              className="tag-remove-btn"
              style={{ color: accentColor }}
              onClick={(e) => {
                e.stopPropagation();
                removeTag(i);
              }}
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          className="tag-input-field"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            if (inputValue.trim()) {
              addTag(inputValue);
              setInputValue("");
            }
          }}
          placeholder={tags.length === 0 ? "type number, press Enter or ," : ""}
        />
      </div>

      {error ? (
        <p className="tag-input-error">{error}</p>
      ) : (
        <p className="tag-input-hint">{hint}</p>
      )}
    </div>
  );
};

export default TagInput;
