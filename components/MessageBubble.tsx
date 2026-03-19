'use client';

import { BotResponse } from '@/lib/responses';
import { ChickenSVG } from './Sidebar';

export interface Message {
  type: 'user' | 'ai' | 'thinking';
  text?: string;
  response?: BotResponse;
  modelName?: string;
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  if (message.type === 'user') {
    return (
      <div className="msg msg-user">
        <div className="bub">{message.text}</div>
      </div>
    );
  }

  if (message.type === 'thinking') {
    return (
      <div className="msg msg-ai">
        <div className="ai-hdr">
          <div className="ai-ico">
            <ChickenSVG size={14} />
          </div>
          <div className="ai-lbl">ChickenBot</div>
          <div className="ai-ver" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
            consulting the nugget council…
          </div>
        </div>
        <div className="think-bub" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          <div className="dots">
            <span /><span /><span />
          </div>
          Heating up the fryers…
        </div>
      </div>
    );
  }

  const r = message.response!;
  return (
    <div className="msg msg-ai">
      <div className="ai-hdr">
        <div className="ai-ico">
          <ChickenSVG size={14} />
        </div>
        <div className="ai-lbl">ChickenBot</div>
        <div className="ai-ver" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          {message.modelName} · complete
        </div>
      </div>
      <div className="bub">
        {r.open && (
          <p style={{ marginBottom: '10px' }}
             dangerouslySetInnerHTML={{ __html: r.open }} />
        )}
        <span className="big-core"
              style={{ fontFamily: 'var(--font-syne, sans-serif)' }}>
          {r.core}
        </span>
        {r.close && (
          <p style={{ marginTop: '2px' }}>{r.close}</p>
        )}
        <div className="bub-footer" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          <div className="bub-stat"><div className="d d-g" />conf: {r.conf}</div>
          <div className="bub-stat"><div className="d d-y" />{r.tokens} tokens</div>
          <div className="bub-stat"><div className="d d-o" />{r.latency} latency</div>
        </div>
      </div>
    </div>
  );
}
