import React from "react";

function Contact() {
  return (
    <div className="bg-primary-bg text-primary-txt pt-10 px-10 pb-5">
      <div className="flex justify-between mb-10">
        <div className="flex flex-col">
          <h1 className="font-Chelon font-bold">NEWSLETTER</h1>
          <div class="dark:bg-gray-800 w-full ">
            <div class="flex items-center mt-1">
              <input
                type="email"
                id="input-9"
                class="w-full h-10 px-3 text-sm text-primary-txt-dark border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm"
                placeholder="user@mail.com"
              />
              <button class="h-10 px-4 text-sm bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-20">
          <div className="flex flex-col">
            <h1 className="font-Chelon font-bold">DIVINE DROPS</h1>
            <h2 className="font-Bona">Shop</h2>
            <h2 className="font-Bona">Butterflies</h2>
            <h2 className="font-Bona">Our Story</h2>
            <h2 className="font-Bona">Community</h2>
          </div>
          <div className="flex flex-col">
            <h1 className="font-Chelon font-bold">SHOPPING</h1>
            <h2 className="font-Bona">My Account</h2>
            <h2 className="font-Bona">Shipping</h2>
            <h2 className="font-Bona">Returns & Refunds</h2>
            <h2 className="font-Bona">Rewards</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="">2024, All rights reserved</div>
        <div className="flex flex-row space-x-4">
          <h2 className="font-Bona">Cookies Policy</h2>
          <h2 className="font-Bona">Privacy Policy</h2>
          <h2 className="font-Bona">Terms of service</h2>
        </div>
        <div className="flex flex-col">
          <h1 className="font-Bona">Follow us</h1>
          {/* <div className="flex flex-row">text</div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
