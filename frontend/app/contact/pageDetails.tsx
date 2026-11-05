"use client";
import Title from "@/components/Global/Title";
import { ContactFormData } from "@/context/contact";
import { LocateIcon, Mail, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

type SubmitStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const initialData: ContactFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  message: "",
};

const inputClass =
  "bg-transparent w-full border-b border-gray-500 pb-4 pt-4 text-black placeholder-black focus:outline-none focus:border-[#b8944d] transition-colors font-main";

const PageDetails = () => {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle" });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New contact message from ${data.fullName}`,
          from_name: data.fullName,
          name: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
          address: data.address,
          message: data.message,
        }),
      });

      const result: Web3FormsResponse = await response.json();

      if (response.ok && result.success) {
        const message = "Message sent! We'll get back to you shortly.";
        setStatus({ type: "success", message });
        toast.success(message);
        setData(initialData);
      } else {
        const message =
          result.message || "Something went wrong. Please try again.";
        setStatus({ type: "error", message });
        toast.error(message);
      }
    } catch {
      const message = "Network error. Check your connection and try again.";
      setStatus({ type: "error", message });
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="max-h-200 max-md:max-h-125 relative">
        <div
          data-nav-theme="light"
          className="h-100 max-md:h-50 bg-[#F8F6F1]"
        ></div>
        <img
          src="/008.jpg"
          alt=""
          className="w-5xl mx-auto object-cover relative -top-75 max-md:-top-20 max-md:h-75 object-center max-w-full h-150"
        />
      </div>
      <div className="text-center">
        <Title small="Send a Message" title="Contact Us" />
      </div>

      <form
        onSubmit={onSubmit}
        className="flex max-w-4xl mt-10 mx-auto px-6 flex-col w-full gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={data.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className={inputClass}
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={inputClass}
          />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className={inputClass}
          />
          <input
            type="text"
            id="address"
            name="address"
            value={data.address}
            onChange={handleInputChange}
            placeholder="Address"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={data.message}
            onChange={handleInputChange}
            placeholder="Message"
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer flex gap-3 justify-center items-center bg-[#b8944d] text-sm w-fit px-7 tracking-widest font-primary uppercase py-3 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status.type !== "idle" && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm text-center ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>

      <div className="py-28 max-sm:py-10 px-6 mx-auto max-w-4xl grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-24 gap-y-10">
        <div className="flex flex-col gap-3 items-center">
          <div className="size-20 rounded-full bg-[#b8944d]/20 flex items-center justify-center">
            <PhoneIcon color="black" size={40} />
          </div>
          <p>+2348081060505</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="size-20 rounded-full bg-[#2F73C9]/70 flex items-center justify-center">
            <Mail size={40} />
          </div>
          <p>hello@ogcrystalservices.com</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="size-20 rounded-full bg-[#b8944d]/70 flex items-center justify-center">
            <LocateIcon color="black" size={40} />
          </div>
          <p>Lagos Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
