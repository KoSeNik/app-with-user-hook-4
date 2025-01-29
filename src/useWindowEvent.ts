import { useEffect } from 'react';

type EventListener<K extends keyof WindowEventMap> = (this: Window, ev: WindowEventMap[K]) => any;

export function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: EventListener<K>,
  options?: boolean | AddEventListenerOptions
): void {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}
