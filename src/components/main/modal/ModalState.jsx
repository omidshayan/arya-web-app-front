// modalState.js
import { useState } from "react";

export const useModalState = () => {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
};
