import { useState, useEffect, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent.ts';

interface ViewportSize {
  width: number;
  height: number;
}

export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = useCallback(() => {
    setSize({
      width: window.innerWidth || 0,
      height: window.innerHeight || 0,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateSize();
    }
  }, [updateSize]);

  useWindowEvent('resize', updateSize);

  return size;
}
