'use client';

import { useState, useCallback, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import ChatArea from '@/components/ChatArea';
import Toast, { ToastItem } from '@/components/Toast';
import { Message } from '@/components/MessageBubble';
import { RESPONSES } from '@/lib/responses';

const MODELS = [
  'chickenbot-3.9-nugget',
  'chickenbot-4.0-tendercrisp',
  'chickenbot-apex-drumstick',
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastId = useRef(0);

  const showToast = useCallback((message: string) => {
    const id = ++toastId.current;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  function sendMessage(text: string) {
    if (busy) return;
    setBusy(true);

    setMessages((prev) => [
      ...prev,
      { type: 'user', text },
      { type: 'thinking' },
    ]);

    const delay = 1600 + Math.random() * 1600;
    setTimeout(() => {
      const response = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      setMessages((prev) => {
        const withoutThinking = prev.filter((m) => m.type !== 'thinking');
        return [
          ...withoutThinking,
          { type: 'ai', response, modelName: MODELS[modelIndex] },
        ];
      });
      setBusy(false);
    }, delay);
  }

  function newThread() {
    setMessages([]);
    setBusy(false);
  }

  function handleHistoryClick(question: string) {
    if (busy) return;
    newThread();
    // Small delay so welcome screen clears before messages appear
    setTimeout(() => sendMessage(question), 50);
  }

  return (
    <>
      <Toast toasts={toasts} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewThread={newThread}
        onHistoryClick={handleHistoryClick}
        onToast={showToast}
      />
      <main className="main">
        <Topbar
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
          modelIndex={modelIndex}
          onModelClick={() => setModelIndex((i) => (i + 1) % MODELS.length)}
        />
        <ChatArea
          messages={messages}
          busy={busy}
          onSend={sendMessage}
          onSuggest={sendMessage}
          onToast={showToast}
        />
      </main>
    </>
  );
}
