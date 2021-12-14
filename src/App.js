import Section from './components/Section';
import Form from './components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}
