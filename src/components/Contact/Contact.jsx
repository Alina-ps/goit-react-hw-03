import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={s.contactWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
    </>
  );
};

export default Contact;
