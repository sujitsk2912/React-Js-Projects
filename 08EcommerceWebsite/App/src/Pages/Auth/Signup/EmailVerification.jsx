import { Button, Link, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { sendVerificationMail } from "../../../api/query/userQuery";

const EmailVerification = () => {
  const toast = useToast();
  const { email } = useParams();
  const [url, setUrl] = useState(null);
  const urlPattern = /(https?:\/\/[^\s]+)/g;

  const { mutate, isLoading } = useMutation({
    mutationKey: ["email-Verification"],
    mutationFn: sendVerificationMail,
    onSettled: (data) => {
      const extractUrl = data.message.match(urlPattern);
      setUrl(extractUrl ? extractUrl[0] : null);
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    if (email) {
      mutate({ email });
    }
  }, [email, mutate]);

  if (!email) {
    return (
      <div className="h-screen w-full flex justify-center items-center text-xl">
        Invalid Email
      </div>
    );
  }

  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center flex-col gap-4">
      <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <MdEmail className="text-5xl text-violet-700" />
          <div className="flex gap-3 flex-col justify-center items-center text-center">
            <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight">
              Email Verification
            </h3>
            <p className="text-sm text-gray-500">
              We have sent you an email verification to
              <span className="font-semibold text-black ml-1 mr-1">
                {email}
              </span>
              If you didn’t receive it, click the button below.
            </p>
          </div>
          <Button
            isLoading={isLoading}
            onClick={() => {
              setUrl(null); // Hide the link while loading
              mutate({ email });
            }}
            type="submit"
            marginTop="4"
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
            Re-Send Email
          </Button>
          {!isLoading && url && url !== "" && (
            <Link href={url} style={{ textDecoration: "none", width: "100%" }}>
              <Button
                type="submit"
                marginTop="2"
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
  );
};

export default EmailVerification;
