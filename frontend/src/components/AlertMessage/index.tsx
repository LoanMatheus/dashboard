'use client'
import { useRef, useEffect } from "react";
import { Toast } from "primereact/toast";

interface ToastWrapperProps {
  severity: "success" | "info" | "warn" | "error";
  summary: string;
  detail: string;
  life?: number;
  sticky?: boolean;
  showToast: boolean;
}

export default function AlertMessage(props: ToastWrapperProps) {
  const {
    severity,
    summary,
    detail,
    life,
    sticky = false,
    showToast,
  } = props;

  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (showToast && toast.current) {
      toast.current.show({ severity, summary, detail, life, sticky });
    }
  }, [detail, life, severity, showToast, sticky, summary]);

  return (
    <>
      <Toast ref={toast} />
    </>
  );
}