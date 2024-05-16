import { FaTrash } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddUpdateContactModel from "./AddUpdateContactModel";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  console.log(contact);
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact deleted successfully...");
    } catch (error) {
      alert("Error: ", error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="bg-[#FFEAAE] text-black m-auto gap-3 max-sm:pt-3 max-sm:pb-3 max-md:p-2 p-4 max-w-7xl rounded-lg flex justify-center items-center mb-3"
      >
        <div className=" flex justify-between max-sm:gap-2 sm:gap-8 items-center w-full">
          <div className=" gap-1 flex items-center ">
            <PiUserCircleLight className="max-sm:text-4xl text-6xl text-[#fcb00de4]" />
            <span className="max-sm:text-sm whitespace-nowrap">
              <p className="font-semibold whitespace-nowrap">{contact.name}</p>
              <p>{contact.email}</p>
            </span>
          </div>

          <div className="text-[1.6rem] flex gap-2 sm:gap-4 justify-center max-sm:text-xl">
            <RiEditCircleLine
              onClick={onOpen}
              className=" duration-100 ease-in-out hover:text-red-600 cursor-pointer"
            />
            <FaTrash
              onClick={() => deleteContact(contact.id)}
              className="duration-100 ease-in-out hover:text-green-800 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <AddUpdateContactModel
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
