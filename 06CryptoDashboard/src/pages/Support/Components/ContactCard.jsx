import { MdEmail } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className=" flex flex-col gap-4 p-6">
      <MdEmail className="text-3xl text-violet-700" />
      <h2 className="font-semibold text-3xl">Contact Us</h2>
      <p className="text-sm max-w-md">
        Have a question or just want to know more? Feel free to reach out to us.
      </p>
    </div>
  );
};

export default ContactCard;
