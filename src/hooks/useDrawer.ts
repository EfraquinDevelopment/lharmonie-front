import React, { useState } from "react";

const useDrawer = () => {
  const [isOpen, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return { isOpen, openDrawer, closeDrawer };
};

export default useDrawer;
