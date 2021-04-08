import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const Tooltip = ({ children, content, delay = 400}) => {
  let timeout;
  const [ active, setActive ] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={styles.tooltipTip}>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  delay: PropTypes.number,
}

export default Tooltip;
