import { useState } from "react";

function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e, phoneNumber) {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      console.error("Invalid mobile number");
      return;
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#0d1b2a] text-white">
      <div className="w-200 h-100 rounded-xl bg-[#1b263b] flex">
        <div>
          <img
            src="https://occ-0-1168-299.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYjz8zbK_L69HRXdXRrC87CbChvL_Okxnc92y7SzUepcudN4qUvHdpCb5-0-drJoiNcH-S4XpcFHtcNjtfDSWGcgY7TbcyY-Uzb9.webp?r=8d9"
            alt=""
            className="rounded-xl h-100  bg-center bg-contain bg-radial-[at_25%_25%] from-zinc-300 to-zinc-300 to-75% "
            width="500"
          />
        </div>
        <div className="flex grow">
          <form
            className="flex flex-col w-full p-8"
            onSubmit={(e) => handleSubmit(e, phoneNumber)}
          >
            <h1 className="bold text-xl my-2">Log in or sign up to continue</h1>
            <input
              type="text"
              className="border rounded p-2 my-2"
              placeholder="Enter mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="my-4 bg-[#e0e1dd] p-2 text-[#0d1b2a] rounded mt-18 cursor-pointer">
              Get OTP
            </button>
            <p className="mt-8 text-sm text-[#e0e1dd] tracking-wide">
              Having trouble logging in? Get help
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
