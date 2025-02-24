const MyAccount = () => {
  return (
    <>
      <form className="col-span-2 p-6 mt-6 space-y-4 w-full">
        <div className="flex flex-row  items-center justify-between">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            First Name
          </label>
          <input
            type="text"
            placeholder="Your First Name"
            className="border w-full md:w-[70%] focus:outline-none px-4 py-3 rounded-lg"
          />
        </div>

        <div className="flex flex-row  items-center justify-between">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Your Last Name"
            className="border w-full md:w-[70%] focus:outline-none px-4 py-3 rounded-lg"
          />
        </div>

        <div className="flex flex-row  items-center md:justify-between relative">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            Email
          </label>
          <input
            type="email"
            placeholder="nadasa****@gmail.com"
            className="border w-full md:w-[70%] focus:outline-none px-4 py-3 rounded-lg"
          />
          <button className="text-red-400 text-sm md:text-base font-medium hover:text-red-500 absolute right-4 top-1/2 transform -translate-y-1/2">
            Change Email
          </button>
        </div>

        <div className="flex flex-row  items-center justify-between relative">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            className="border w-full md:w-[70%] sm:w-full focus:outline-none px-4 py-3 rounded-lg"
          />
          <button className="text-red-400 text-sm md:text-base font-medium hover:text-red-500 absolute right-4 top-1/2 transform -translate-y-1/2">
            Change Password
          </button>
        </div>

        <div className="flex flex-row  items-center justify-between">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            Gender
          </label>
          <div className="flex flex-row sm:flex-row gap-4 mt-2 sm:mt-0">
            <button className="bg-red-400 text-white text-lg px-4 py-3 w-[15vh] rounded-lg hover:text-gray-500 hover:bg-white border">
              Male
            </button>
            <button className="bg-red-400 text-white text-lg px-4 py-3 w-[15vh] rounded-lg hover:text-gray-500 hover:bg-white border">
              Female
            </button>
          </div>
        </div>

        <div className="flex flex-row  items-center justify-between">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            Date of Birth
          </label>
          <input
            type="date"
            className="border w-full md:w-[70%] focus:outline-none px-4 py-3 rounded-lg appearance-none"
          />
        </div>
      </form>
    </>
  );
};

export default MyAccount;
