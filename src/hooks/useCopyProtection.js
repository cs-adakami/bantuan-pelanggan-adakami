import { useEffect, useRef, useState } from "react";

const PROTECTION_MESSAGE = "Konten visual dilindungi di halaman ini.";

function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.closest("input, textarea, [contenteditable='true'], [contenteditable='']")
      !== null
  );
}

export function useCopyProtection() {
  const [notice, setNotice] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    const showNotice = () => {
      setNotice(PROTECTION_MESSAGE);

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        setNotice("");
      }, 1800);
    };

    const blockEvent = (event) => {
      if (isEditableTarget(event.target)) return;

      event.preventDefault();
      showNotice();
    };

    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const usesModifier = event.ctrlKey || event.metaKey;
      const blockedCombo =
        (usesModifier && ["c", "u", "s", "p"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (blockedCombo && !isEditableTarget(event.target)) {
        event.preventDefault();
        showNotice();
      }
    };

    document.addEventListener("contextmenu", blockEvent);
    document.addEventListener("copy", blockEvent);
    document.addEventListener("cut", blockEvent);
    document.addEventListener("dragstart", blockEvent);
    document.addEventListener("selectstart", blockEvent);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", blockEvent);
      document.removeEventListener("copy", blockEvent);
      document.removeEventListener("cut", blockEvent);
      document.removeEventListener("dragstart", blockEvent);
      document.removeEventListener("selectstart", blockEvent);
      document.removeEventListener("keydown", onKeyDown);

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return notice;
}
