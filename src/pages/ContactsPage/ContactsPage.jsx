import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Container } from "components/Container/Container";
import { MainText, Text } from "components/App/App.styled";
const ContactsPage = () => {
    return (
        <>
            <Container>
                <MainText>Phonebook</MainText>
                <ContactForm />
            </Container>

            <Container>
                <Text>Contacts</Text>
                <Filter />
                <ContactList />
            </Container>
        </>
    );
}

export default ContactsPage;