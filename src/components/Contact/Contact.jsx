import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.contactWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={s.contactBtn} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
