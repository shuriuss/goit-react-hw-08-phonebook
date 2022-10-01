import Form from '../../Form';
import Filter from '../../Filter';
import ContactList from '../../ContactList';
import s from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';


const Contacts = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    isLoggedIn&& <section className={s.section}>
      <h1>Phonebook</h1>
       <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};

export default Contacts;
