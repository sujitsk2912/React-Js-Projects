import { Button, Link } from "@chakra-ui/react";
import { useContext } from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { UrlContext } from "./UrlContext";

const EmailSent = () => {
  const { email } = useParams();
  const { url } = useContext(UrlContext);

  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <img src={"../../../../public/images/success.svg"} alt="success" />
          <div className="flex gap-3 flex-col justify-center items-center text-center">
            <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight ">
              Successfully Sent
            </h3>
            <p className="text-sm  text-gray-500">
              We have sent instructions on how to reset your password to
              <span className="font-semibold text-black ml-1 mr-1">
                {email}
              </span>
              Please follow the instructions from the email.
            </p>
            {url && url != "" && (
              <Link
                href={url}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  type="submit"
                  mt="1"
                  height="10"
                  width="full"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="2"
                  fontWeight="500"
                  fontSize="sm"
                  borderRadius="lg"
                  transition="all 0.2s"
                  bg="rgb(79 70 229)"
                  color="#fff"
                  _hover={{
                    bg: "#fff",
                    color: "rgb(79 70 229)",
                    border: "1px solid rgb(79 70 229)",
                  }}
                >
                  Click here to verify
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
