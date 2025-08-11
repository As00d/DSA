function OtpForm({ phoneNumber }) {
  return (
    <form className="flex flex-col w-full p-8">
      <h1 className="bold text-xl my-2">Enter OTP sent to {phoneNumber} </h1>
    </form>
  );
}
export default OtpForm;
