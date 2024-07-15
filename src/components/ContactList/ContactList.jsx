import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <Contact name={contact.name} number={contact.number} />
              <button
                className={s.contactBtn}
                onClick={() => onDelete(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
