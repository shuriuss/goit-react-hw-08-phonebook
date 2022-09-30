import Form from '../../Form';
import Filter from '../../Filter';
import ContactList from '../../ContactList';
import s from './Contacts.module.css'




const Contacts = () => {
  return (
    <section className={s.section}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};



export default Contacts