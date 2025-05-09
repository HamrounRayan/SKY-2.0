import React from 'react';
import NavBar2 from './NavBar2'

const EditUserProfile = () => {
  return (
    <div className="bg-[url('./src/assets/background.svg')] min-h-screen w-full bg-cover bg-center mt-0">
      <NavBar2 />
      <div className="bg-[#3D348B] rounded-3xl p-6 w-[70%] mx-auto mt-10 mb-24 flex flex-col gap-7">
        {/* Top section with email/password and images */}
        <div className="flex justify-between gap-8">
          {/* Left side - inputs */}
          <div className="flex flex-col w-2/3 gap-7">
            <h1 className="text-[#E6AF2E] text-3xl font-bold mb-20 mt-10">MY PROFILE</h1>
            <div className="flex flex-col">
              <label className="text-[#E2AF2E] font-bold">Email Address</label>
              <input
                className="w-full rounded-2xl p-3  border-b border-white"
                type="text"
                placeholder="kikoouaras@gmail.com"
                readOnly
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#E2AF2E] font-bold">Password</label>
              <input
                className="w-full rounded-2xl p-3  border-b border-white"
                type="password"
                placeholder="********"
                readOnly
              />
            </div>
          </div>

          {/* Right side - images */}
          <div className="flex flex-col items-center justify-center w-1/4 gap-4 pr-10 mt-32">
            <img className="w-full border-8 border-[#E6AF2E] rounded-full " src="src/assets/Group 75.svg" alt="" />
            <img className="w-full" src="src/assets/Frame 69.svg" alt="" />
          </div>
        </div>

        {/* Rest of the form fields */}
        <div className="flex flex-col gap-7">
          <div>
            <label className="text-[#E2AF2E] font-bold">Phone Number</label>
            <input
              className="w-full rounded-2xl p-3  border-b border-white"
              type="text"
              placeholder="+213 660 49 61 44"
              readOnly
            />
          </div>

          <div>
            <label className="text-[#E2AF2E] font-bold">First Name</label>
            <input
              className="w-full rounded-2xl p-3  border-b border-white"
              type="text"
              placeholder="Khelil Rafik"
              readOnly
            />
          </div>

          <div>
            <label className="text-[#E2AF2E] font-bold">Last Name</label>
            <input
              className="w-full rounded-2xl p-3  border-b border-white"
              type="text"
              placeholder="OUARAS"
              readOnly
            />
          </div>

          <div>
            <label className="text-[#E2AF2E] font-bold">Wilaya</label>
            <input
              className="w-full rounded-2xl p-3  border-b border-white"
              type="text"
              placeholder="Algiers"
              readOnly
            />
          </div>

          <div>
            <label className="text-[#E2AF2E] font-bold">Commune</label>
            <input
              className="w-full rounded-2xl p-3  border-b border-white"
              type="text"
              placeholder="Bachdjerah"
              readOnly
            />
          </div>

          <div>
            <label className="text-[#E2AF2E] font-bold">CV Attached</label>
            <input
              className="w-full rounded-2xl p-3  border-b border-white"
              type="text"
              placeholder="CV2024-2025_OUARAS_Khelil_Rafik.pdf"
              readOnly
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4 gap-8">
            <button
              type="button"
              className="px-4 py-3 border bg-white border-gray-300 rounded-2xl"
            >
              Change Password
            </button>
            <button
              type="button"
              className="px-4 py-3 bg-[#E6AF2E] rounded-2xl"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <footer className="font-semibold flex justify-center p-3 bg-[#E6AF2E]">
        2025 @ Team SKY2.0|All rights reserved.
      </footer>
    </div>
  );
};

export default EditUserProfile;
