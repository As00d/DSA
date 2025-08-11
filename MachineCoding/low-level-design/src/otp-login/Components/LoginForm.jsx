import { useState } from "react";
import OtpForm from "./OtpForm";
function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      console.log("Invalid phone number");
      return;
    }
    setShowOtpInput(true);
  }

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#0d1b2a] text-white">
      <div className="w-200 h-120 rounded-xl bg-[#1b263b] flex">
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzBmOWI1MWUtODI4MS00ZmEzLTkxYmMtOGQ0YzMwZTI3YTJhXkEyXkFqcGc@._V1_.jpg"
            alt=""
            className="rounded-xl h-120  bg-center bg-contain bg-radial-[at_25%_25%] from-zinc-300 to-zinc-300 to-75% "
            width="390"
          />
        </div>
        <div className="flex grow">
          {showOtpInput ? (
            <OtpForm phoneNumber={phoneNumber} />
          ) : (
            <form
              className="flex flex-col w-full p-8 "
              onSubmit={(e) => handleSubmit(e)}
            >
              <h1 className="bold text-xl my-2">
                Log in or sign up to continue
              </h1>
              <input
                type="text"
                className="border rounded p-2 my-2"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumber(e)}
              />
              <button className="my-4 bg-[#e0e1dd] p-2 text-[#0d1b2a] rounded mt-36 cursor-pointer">
                Get OTP
              </button>
              <p className="text-sm text-[#e0e1dd] tracking-wide">
                Having trouble logging in?{" "}
                <a href="#" className="text-blue-400">
                  Get help
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
