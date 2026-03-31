"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";

type ConfirmOptions = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "warning" | "info";
};

type ConfirmContextType = {
  confirm: (options: ConfirmOptions) => Promise<boolean>;
};

const ConfirmContext = createContext<ConfirmContextType | null>(null);

export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return context;
}

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback((confirmOptions: ConfirmOptions) => {
    setOptions(confirmOptions);
    setIsOpen(true);
    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  }, []);

  const handleClose = useCallback((value: boolean) => {
    setIsOpen(false);
    if (resolver) {
      resolver(value);
    }
  }, [resolver]);

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {isOpen && options && (
        <ConfirmModal
          isOpen={isOpen}
          onClose={() => handleClose(false)}
          onConfirm={() => handleClose(true)}
          {...options}
        />
      )}
    </ConfirmContext.Provider>
  );
}

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "danger",
}: ConfirmOptions & { isOpen: boolean; onClose: () => void; onConfirm: () => void }) {
  // Use a simple state to handle animation "entrance"
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      // Trigger entrance animation
      const raf = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const variantColors = {
    danger: "rgba(255, 180, 171, 0.1)",
    warning: "rgba(233, 196, 0, 0.1)",
    info: "rgba(108, 62, 255, 0.1)",
  };

  const iconName = {
    danger: "delete",
    warning: "warning",
    info: "info",
  };

  const iconColor = {
    danger: "text-error",
    warning: "text-tertiary",
    info: "text-primary",
  };

  return createPortal(
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${isAnimating ? "opacity-100" : "opacity-0"}`}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`glass-panel w-full max-w-sm relative z-10 p-6 rounded-2xl transform transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isAnimating ? "scale-100 translate-y-0" : "scale-90 translate-y-4"}`}
        style={{ boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px ${variantColors[variant]}` }}
      >
        <div className="flex flex-col items-center text-center gap-4">
          {/* Icon Header */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${variant === "danger" ? "bg-error/10" : variant === "warning" ? "bg-tertiary/10" : "bg-primary/10"}`}>
            <span className={`material-symbols-outlined text-2xl ${iconColor[variant]}`}>
              {iconName[variant]}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-headline font-bold text-on-surface">
              {title}
            </h3>
            <p className="text-sm text-on-surface-variant font-body">
              {message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full mt-2">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors font-medium text-sm"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 ${
                variant === "danger" 
                ? "bg-error text-on-error hover:bg-error/90 shadow-error/20" 
                : variant === "warning"
                ? "bg-tertiary text-on-tertiary hover:bg-tertiary/90 shadow-tertiary/20"
                : "btn-primary-gradient text-on-primary-container shadow-primary/20"
              }`}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
