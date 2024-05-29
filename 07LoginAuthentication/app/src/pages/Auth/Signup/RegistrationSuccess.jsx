import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyEmailAddressSignup } from "../../../api/query/userQuery";
import { Button, Center, useToast } from "@chakra-ui/react";
import { Spinner } from "flowbite-react";

const RegistrationSuccess = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { token } = useParams();

  const { isSuccess, isLoading } = useQuery({
    queryKey: ["registration-success"],
    queryFn: () => verifyEmailAddressSignup({ token }),
    enabled: !!token,

    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
  });

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      {isSuccess && (
        <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <img src={"../../../../public/images/success.svg"} alt="success" />
            <div className="flex gap-3 flex-col justify-center items-center text-center">
              <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight ">
                Successfully Registration
              </h3>
              <p className="text-sm  text-gray-500">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </p>
            </div>

            <Link to={"/signin"} className="w-full">
              <Button
                isLoading={isLoading}
                type="submit"
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
                Enter the App
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationSuccess;
