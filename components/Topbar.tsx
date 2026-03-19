'use client';

const MODELS = [
  'chickenbot-3.9-nugget',
  'chickenbot-4.0-tendercrisp',
  'chickenbot-apex-drumstick',
];

interface TopbarProps {
  onToggleSidebar: () => void;
  modelIndex: number;
  onModelClick: () => void;
}

export default function Topbar({ onToggleSidebar, modelIndex, onModelClick }: TopbarProps) {
  return (
    <div className="topbar">
      <button className="menu-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect y="2" width="16" height="1.8" rx="1" fill="currentColor"/>
          <rect y="7.1" width="16" height="1.8" rx="1" fill="currentColor"/>
          <rect y="12.2" width="16" height="1.8" rx="1" fill="currentColor"/>
        </svg>
      </button>

      <div className="model-badge" onClick={onModelClick} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
        <div className="status-pulse" />
        <span>{MODELS[modelIndex % MODELS.length]}</span>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M2.5 4L5.5 7L8.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="tb-spacer" />

      <div className="tb-pill" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
        context: 200k tokens
      </div>
    </div>
  );
}
