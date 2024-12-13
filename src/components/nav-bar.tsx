import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./navigation-bar";
import { useHeaderVisibility } from "@/components/header-visibility";

const NavBar = () => {
  const isHeaderVisible = useHeaderVisibility();

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Header />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
