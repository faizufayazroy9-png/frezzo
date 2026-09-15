import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto bg-white rounded-2xl p-4 shadow-xl border border-[#EEDFD5] flex items-start gap-3 transition-all duration-300 animate-slide-in"
        >
          {t.type === 'success' && (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          )}
          {t.type === 'error' && (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          {t.type === 'info' && (
            <Info className="w-5 h-5 text-[#85223B] shrink-0 mt-0.5" />
          )}

          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-xs text-[#2C1810]">{t.title}</h5>
            <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">{t.message}</p>
          </div>

          <button
            onClick={() => removeToast(t.id)}
            className="text-stone-400 hover:text-stone-700 p-1 shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
