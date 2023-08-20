import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type setOpenState = (state: { isOpen: boolean }) => void;

export function outsideDismiss(
  e: React.FocusEvent<HTMLElement>,
  setOpenState: setOpenState,
  delay: number = 0
): void {
  const parent = e.currentTarget.parentNode;
  const isDescendant = parent
    ? parent.contains(e.relatedTarget as Node)
    : false;

  if (!isDescendant) {
    setTimeout(() => {
      setOpenState({ isOpen: false });
    }, delay);
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
