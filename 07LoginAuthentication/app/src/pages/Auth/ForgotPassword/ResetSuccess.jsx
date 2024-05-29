import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ResetSuccess = () => {
  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <img src={"../../../../public/images/success.svg"} alt="success" />
          <div className="flex gap-3 flex-col justify-center items-center text-center">
            <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight ">
              Password Reset Done
            </h3>
            <p className="text-sm  text-gray-500">
              Now you can access you account.
            </p>
          </div>

          <Link to={"/signin"} className="w-full">
            <Button
              type="submit"
              mt="2"
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
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
