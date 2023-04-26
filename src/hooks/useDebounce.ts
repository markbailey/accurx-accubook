import { useEffect } from 'react';
import useTimeout, { Callback } from './useTimeout';

function useDebounce(callback: Callback, delay: number, dependencies: unknown[]) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

export default useDebounce;
