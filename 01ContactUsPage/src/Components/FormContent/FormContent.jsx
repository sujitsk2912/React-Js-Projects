import styles from "./FormContent.module.css";
import Buttons from "../Buttons/Buttons";
import { MdOutlineMessage, MdZoomInMap } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { useState } from "react";

const FormContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";

    // console.log(name);
    // console.log(email);
    // console.log(text);
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.btn_div}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={22} />}
          />
          <Buttons text="VIA CALL" icon={<MdLocalPhone fontSize={22} />} />
        </div>
        <div>
          <Buttons
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<MdMail fontSize={22} />}
          />
        </div>
        <form onSubmit={formSubmit} className={styles.form_content}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete="off" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="off" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="text" rows={4}></textarea>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Buttons text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.rightContent}>
        <img src="/public/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default FormContent;
