import React, { useState } from "react";
import { merge } from "./merge";
import TagInput from "../../component/tagInput/tagInput";
import "./sort.css";

const SortPage: React.FC = () => {
  const [c1, setC1] = useState<number[]>([]);
  const [c2, setC2] = useState<number[]>([]);
  const [c3, setC3] = useState<number[]>([]);
  const [result, setResult] = useState<number[] | null>(null);

  const handleMerge = (): void => {
    const merged = merge(c1, c2, c3);
    setResult(merged);
  };

  const handleClear = (): void => {
    setC1([]);
    setC2([]);
    setC3([]);
    setResult(null);
  };

  return (
    <div className="sort-container">
      <div className="sort-card">
        <div className="sort-title">Merge Sorted Arrays</div>
        <div className="sort-subtitle">
          Enter numbers as tags — type a value then press <kbd>Enter</kbd> or <kbd>,</kbd>
        </div>

        <TagInput
          label="Collection 1 — descending (max → min)"
          hint="e.g. 7, 4, 1"
          tags={c1}
          onChange={setC1}
        />
        <TagInput
          label="Collection 2 — ascending (min → max)"
          hint="e.g. 2, 5, 9"
          tags={c2}
          onChange={setC2}
         accentColor="#1976d2"
        />
        <TagInput
          label="Collection 3 — ascending (min → max)"
          hint="e.g. 3, 6, 8"
          tags={c3}
          onChange={setC3}
          accentColor="#1976d2"
        />

        <hr className="sort-divider" />

        <div className="sort-button-row">
          <button className="sort-merge-button" onClick={handleMerge}>
            Merge →
          </button>
          <button className="sort-clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>

        {result !== null && (
          <div className="sort-result-box">
            <div className="sort-result-label">
              Result — {result.length} element{result.length !== 1 ? "s" : ""}
            </div>
            {result.length === 0 ? (
              <span className="sort-result-empty">All collections are empty.</span>
            ) : (
              <div className="sort-result-tags">
                {result.map((n, i) => (
                  <span key={i} className="sort-result-tag">
                    {n}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPage;
