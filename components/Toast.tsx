'use client';

export interface ToastItem {
  id: number;
  message: string;
}

interface ToastProps {
  toasts: ToastItem[];
}

export default function Toast({ toasts }: ToastProps) {
  if (toasts.length === 0) return null;
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className="toast" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          {t.message}
        </div>
      ))}
    </div>
  );
}
