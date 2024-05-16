import { useEffect, useState } from "react";
import ContactCard from "./Components/ContactCard";
import FirebaseHeader from "./Components/FirebaseHeader";
import SearchContacts from "./Components/SearchContacts";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import AddUpdateContactModel from "./Components/AddUpdateContactModel";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactNotFound from "./Components/ContactNotFound";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const ContactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(ContactLists);
          return ContactLists;
        });
      } catch (error) {
        alert("Error: ", error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const values = e.target.value;

    const contactsRef = collection(db, "Contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const ContactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = ContactLists.filter((contact) =>
        contact.name.toLowerCase().includes(values.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };
  return (
    <section className="w-full flex justify-center items-center">
      <main className=" bg-slate-900  p-4 min-h-screen h-full w-full max-w-md">
        <header>
          <FirebaseHeader />
          <SearchContacts onOpen={onOpen} filterContacts={filterContacts} />
        </header>
        <div className="mt-8 ">
          {contacts.length <= 0 ? (
            <ContactNotFound />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onOpen={onOpen} />
            ))
          )}
        </div>
      </main>
      <AddUpdateContactModel isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </section>
  );
}

export default App;
