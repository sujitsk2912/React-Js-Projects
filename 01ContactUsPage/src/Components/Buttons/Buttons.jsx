import styles from "./Buttons.module.css";

const Buttons = ({ isOutline, text, icon, ...rest }) => {
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Buttons;
