"use client";
import Title from "@/components/Global/Title";
import { useApp } from "@/context/AppContext";
import { ContactFormData } from "@/context/contact";
import { LocateIcon, Mail, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const { submitContactForm } = useApp()!;
  const [data, setData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      const response = await submitContactForm(data);
      if (response.success) {
        toast.success("Message sent successfully!");
        setSuccess(true);
        setData({
          fullName: "",
          email: "",
          phoneNumber: "",
          address: "",
          message: "",
        });
      } else {
        toast.error(response.message || "Failed to send message.");
      }
    } catch (err) {
      toast.error(
        (err as string) || "An error occurred while sending the message.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div className="max-h-200 relative">
        <div data-nav-theme="light" className="h-100 bg-[#F8F6F1]"></div>
        <img
          src="/008.jpg"
          alt=""
          className="w-5xl mx-auto object-cover relative -top-75 object-center max-w-full h-150"
        />
      </div>
      <div className="text-center">
        <Title small="Send a Message" title="Contact Us" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-4xl mt-10 mx-auto px-6 flex-col w-full gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
          {/* Email Input */}
          <div className="flex w-full flex-col gap-2">
            <input
              type="fullName"
              id="fullName"
              name="fullName"
              required
              value={data.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="bg-transparent w-full border-b border-gray-500 pb-4 pt-4 text-white placeholder-black focus:outline-none focus: transition-colors font-main"
            />
          </div>
          {/* Email Input */}
          <div className="flex w-full flex-col gap-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={data.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="bg-transparent w-full border-b border-gray-500 pb-4 pt-4 text-white placeholder-black focus:outline-none focus: transition-colors font-main"
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex w-full flex-col gap-2">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="bg-transparent w-full border-b border-gray-500 pb-4 pt-4 text-white placeholder-black focus:outline-none focus: transition-colors font-main"
            />
          </div>
          {/* Address Input */}
          <div className="flex w-full flex-col gap-2">
            <input
              type="text"
              id="address"
              name="address"
              value={data.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="bg-transparent w-full border-b border-gray-500 pb-4 pt-4 text-white placeholder-black focus:outline-none focus: transition-colors font-main"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-2 mt-2 ">
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={data.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="bg-transparent w-full border-b border-gray-500 pb-4 pt-4 text-black placeholder-black focus:outline-none focus: transition-colors resize-none font-main"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer flex gap-3 justify-center items-center bg-[#b8944d] text-sm w-fit px-7 tracking-widest font-primary uppercase py-3  text-white disabled:opacity-50"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>

      <div className="py-28 max-sm:py-10 px-6 mx-auto max-w-4xl  grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-x-24 gap-y-10 ">
        <div className="flex flex-col gap-3 items-center ">
          <div className="size-20 rounded-full bg-[#b8944d]/20 flex items-center justify-center ">
            <PhoneIcon color="black" size={40} />
          </div>
          <p>+2348081060505</p>
        </div>
        <div className="flex flex-col gap-3 items-center ">
          <div className="size-20 rounded-full bg-[#2F73C9]/70 flex items-center justify-center ">
            <Mail size={40} />
          </div>
          <p>hello@ogcrystalservices.com</p>
        </div>
        <div className="flex flex-col gap-3 items-center ">
          <div className="size-20 rounded-full bg-[#b8944d]/70 flex items-center justify-center ">
            <LocateIcon color="black" size={40} />
          </div>
          <p> Lagos Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
