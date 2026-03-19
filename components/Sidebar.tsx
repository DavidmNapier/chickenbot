'use client';

import { HISTORY } from '@/lib/responses';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewThread: () => void;
  onHistoryClick: (question: string) => void;
  onToast: (message: string) => void;
}

function ChickenSVG({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="chicken-svg">
      {/* Tail feathers */}
      <path d="M26 21 Q33 11 30 22" stroke="#FFD700" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M26 21 Q35 17 31 26" stroke="#FF6B00" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M26 22 Q34 22 30 29" stroke="#FFD700" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* Body */}
      <ellipse cx="17" cy="23" rx="9" ry="8" fill="#2e2210"/>
      {/* Head */}
      <circle cx="17" cy="11" r="7" fill="#2e2210"/>
      {/* Comb */}
      <path d="M12 7 Q14 3 16 6 Q18 2 20 6 Q22 3 23 7" stroke="#FF6B00" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      {/* Eye */}
      <circle cx="20" cy="10" r="2.2" fill="#FFD700"/>
      <circle cx="20.6" cy="9.8" r="1" fill="#0f0a06"/>
      {/* Beak */}
      <path d="M23.5 12.5 L28 13.5 L23.5 14.5Z" fill="#FFD700"/>
      {/* Wattle */}
      <ellipse cx="22" cy="16" rx="2" ry="2.5" fill="#FF6B00" opacity="0.75"/>
      {/* Wing highlight */}
      <path d="M10 21 Q7 26 11 29" stroke="#FF6B00" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

export { ChickenSVG };

export default function Sidebar({ isOpen, onClose, onNewThread, onHistoryClick, onToast }: SidebarProps) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-area">
          <ChickenSVG size={36} />
          <div>
            <div className="logo-title" style={{ fontFamily: 'var(--font-syne, system-ui), sans-serif' }}>
              Chicken<em>Bot</em>
            </div>
            <div className="logo-tag" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
              Powered by Chicken Treat · not a hotdog
            </div>
          </div>
        </div>

        <div className="sb-section">
          <div className="sb-label" style={{ fontFamily: 'var(--font-mono, monospace)' }}>Workspace</div>
          <div
            className="sb-item active"
            onClick={() => { onNewThread(); onClose(); }}
          >
            <span className="sb-icon">🐔</span> New Thread
          </div>
          <div
            className="sb-item"
            onClick={() => onToast('Nothing pinned yet. Try pinning a chicken wing instead.')}
          >
            <span className="sb-icon">📌</span> Pinned Threads
          </div>
          <div
            className="sb-item"
            onClick={() => onToast('Available integrations: Chicken Treat menu API. That\'s it.')}
          >
            <span className="sb-icon">🔌</span> Integrations
          </div>
          <div
            className="sb-item"
            onClick={() => onToast('There are no settings. Only chicken.')}
          >
            <span className="sb-icon">⚙️</span> Settings
          </div>
        </div>

        <div className="sb-section" style={{ marginTop: '6px' }}>
          <div className="sb-label" style={{ fontFamily: 'var(--font-mono, monospace)' }}>Recent</div>
        </div>
        <div className="sb-hist">
          {HISTORY.map((item, i) => (
            <div
              key={i}
              className="hist-entry"
              onClick={() => { onHistoryClick(item.question); onClose(); }}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="sb-footer">
          <div
            title="not hotdog"
            style={{
              fontSize: '10px',
              color: 'var(--text3)',
              fontFamily: 'var(--font-mono, monospace)',
              textAlign: 'center',
              marginBottom: '6px',
              letterSpacing: '0.5px',
              opacity: 0.5,
            }}
          >
            🌭 not hotdog
          </div>
          <div className="user-row">
            <div className="u-avatar" style={{ fontFamily: 'var(--font-syne, sans-serif)' }}>🍗</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="u-name">Chicken Enthusiast</div>
              <div className="u-plan" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                nugget_tier · unlimited
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
