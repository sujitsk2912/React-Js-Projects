import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
});
const AddUpdateContactModel = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact added successfully...");
      onClose();
    } catch (error) {
      alert("Error: ", error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "Contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact updated successfully...");

      onClose();
    } catch (error) {
      alert("Error: ", error);
    }
  };
  return createPortal(
    <>
      {isOpen && (
        <>
          <Formik
            validationSchema={contactSchemaValidation}
            initialValues={
              isUpdate
                ? { name: contact.name, email: contact.email }
                : { name: "", email: "" }
            }
            onSubmit={(values) => {
              isUpdate ? updateContact(values, contact.id) : addContact(values);
            }}
          >
            <section className="relative bg-white flex justify-center rounded-md items-center p-3 max-sm:w-[90%] w-[25rem] overflow-hidden z-50 m-auto ">
              <CgClose
                onClick={onClose}
                className="absolute top-2 right-4 text-2xl  cursor-pointer"
              />

              <Form className="flex w-full  justify-center items-center flex-col gap-5 mt-4 m-2">
                <div className="flex w-full  flex-col gap-1">
                  <label htmlFor="name" className="font-[500]">
                    Name
                  </label>
                  <Field
                    className="h-10  rounded border border-black p-2 outline-none"
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="off"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="name" />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="email" className="font-[500]">
                    Email
                  </label>
                  <Field
                    className="h-10 rounded border outline-none border-black p-2"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="off"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="w-full flex items-end justify-end">
                  <button
                    className="bg-black text-white text-sm px-3 p-2 rounded hover:bg-blue-900 transition-all ease-linear"
                    type="submit"
                  >
                    {isUpdate ? "Update" : "Add"} Contact
                  </button>
                </div>
              </Form>
            </section>
          </Formik>
          <div className="h-screen w-screen absolute backdrop-blur z-40 top-0" />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default AddUpdateContactModel;
