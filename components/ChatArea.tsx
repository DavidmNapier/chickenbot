'use client';

import { useRef, useEffect } from 'react';
import MessageBubble, { Message } from './MessageBubble';
import { ChickenSVG } from './Sidebar';

interface ChatAreaProps {
  messages: Message[];
  busy: boolean;
  onSend: (text: string) => void;
  onSuggest: (text: string) => void;
  onToast: (message: string) => void;
}

const CHIPS = [
  { title: 'Nugget throughput', sub: 'Optimize production pipeline', q: 'How do I optimize nugget throughput in production?' },
  { title: 'K8s chicken pods', sub: 'Container orchestration, but make it clucky', q: 'Can you explain Kubernetes pods using only chicken-related analogies?' },
  { title: '🌭 Hotdog or not hotdog?', sub: 'A rigorous Silicon Valley classification', q: 'Is a Chicken Treat fillet burger a hotdog? I need a peer-reviewed answer.' },
  { title: 'CI/CD: Chicken Delivery', sub: 'From batter to box, automatically', q: 'Design a CI/CD pipeline themed entirely around Chicken Treat.' },
];

export default function ChatArea({ messages, busy, onSend, onSuggest, onToast }: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      setTimeout(() => el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }), 40);
    }
  }, [messages]);

  function handleResize(el: HTMLTextAreaElement) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function submit() {
    const el = textareaRef.current;
    if (!el) return;
    const text = el.value.trim();
    if (!text || busy) return;
    el.value = '';
    el.style.height = 'auto';
    onSend(text);
  }

  const showWelcome = messages.length === 0;

  return (
    <>
      <div className="chat-scroll" ref={scrollRef}>
        <div className="chat-inner">
          {showWelcome && (
            <div className="welcome">
              <div className="welcome-icon">
                <ChickenSVG size={42} />
              </div>
              <h1 style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                What&apos;s the <span>cluck</span>?
              </h1>
              <p>
                ChickenBot is your AI-powered cloud and data intelligence agent.
                <br />Running on 11 herbs and algorithms. Powered by Chicken Treat.
              </p>
              <div className="chips">
                {CHIPS.map((c, i) => (
                  <div key={i} className="chip" onClick={() => onSuggest(c.q)}>
                    <div className="chip-t">{c.title}</div>
                    <div className="chip-s">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}
        </div>
      </div>

      <div className="input-zone">
        <div className="input-box">
          <textarea
            ref={textareaRef}
            className="prompt-textarea"
            rows={1}
            placeholder="Ask ChickenBot anything… the nuggets are ready."
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            onInput={(e) => handleResize(e.currentTarget)}
            onKeyDown={handleKeyDown}
          />
          <div className="input-row">
            <button
              className="i-btn"
              style={{ fontFamily: 'var(--font-mono, monospace)' }}
              onClick={() => onToast("You can't attach files. This is a chicken.")}
            >
              📎 attach
            </button>
            <button
              className="i-btn"
              style={{ fontFamily: 'var(--font-mono, monospace)' }}
              onClick={() => onToast('The only search engine here runs on MSG and hope.')}
            >
              🌐 web search
            </button>
            <button
              className="i-btn"
              style={{ fontFamily: 'var(--font-mono, monospace)' }}
              onClick={() => onToast('Tools available: spatula, tongs, deep fryer. None of these help with your question.')}
            >
              🔌 tools
            </button>
            <div className="i-spacer" />
            <button
              className="send-btn"
              onClick={submit}
              disabled={busy}
              title="Send"
              aria-label="Send message"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="white">
                <path d="M1 7.5L14 1.5L9.5 13.5L7.5 9L1 7.5Z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="input-hint" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          ChickenBot · nugget edition · not a hotdog · responses may be aggressively supportive
        </div>
      </div>
    </>
  );
}
