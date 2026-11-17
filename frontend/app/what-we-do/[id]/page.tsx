import React from "react";
import { notFound } from "next/navigation";

import Link from "next/link";
import Header from "@/components/About/Header";
import Title from "@/components/Global/Title";
// data/servicesData.ts

export interface ServiceDetail {
  id: string;
  number: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  serviceAreas: string[];
  primaryAudience?: string[];
  buttonLabel: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "support-for-life",
    image: "/010.jpg",
    number: "01",
    title: "Support for Life",
    tagline: "Wellness, Counselling and Coaching",
    description:
      "Your well-being matters. Life can bring personal, emotional and work-related pressures that may be difficult to manage alone. Through wellness support, counselling and coaching, we provide a supportive space to help individuals work through challenges, gain perspective and take positive steps towards personal well-being and growth.",
    serviceAreas: [
      "Personal wellness and well-being support",
      "Counselling and emotional support",
      "Life coaching and personal development",
      "Support through stress, change and life transitions",
      "Wellness talks, sessions or workshops",
    ],
    buttonLabel: "Enquire About Wellness Support",
  },
  {
    id: "clarity-for-business",
    image: "/009.jpg",
    number: "02",
    title: "Clarity for Business",
    tagline: "Business Advisory, People Advisory and Customer Experience",
    description:
      "A stronger business starts with clarity. We help business owners and organisations deal with people and business challenges, improve workplace practices, strengthen service delivery and make better decisions. Our aim is to help businesses build strong foundations and improve performance.",
    serviceAreas: [
      "Business strategy and practical business advice",
      "People Advisory and HR Consulting",
      "HR setup and support for startups and small businesses",
      "Recruitment and workforce planning",
      "HR policies, procedures and documentation",
      "Performance management and employee engagement",
      "Pay, benefits and salary structure support",
      "Customer Experience and Service Excellence",
      "Business processes and service delivery improvement",
    ],
    primaryAudience: ["Business Owners", "Startups", "SMEs", "Organisations"],
    buttonLabel: "Discuss Your Business Needs",
  },
  {
    id: "growth-with-purpose",
    image: "/011.jpg",
    number: "03",
    title: "Growth with Purpose",
    tagline: "Career, Leadership and Professional Development",
    description:
      "Growth takes effort and the right support. Whether you are planning your next career move, building your professional skills or growing as a leader, we provide practical guidance to help you move forward with confidence and purpose.",
    serviceAreas: [
      "Career advice and career direction",
      "CV and LinkedIn profile review",
      "Interview preparation",
      "Career change and transition support",
      "Professional mentoring and coaching",
      "Leadership and management development",
      "Personal and professional development",
      "Training and facilitation",
    ],
    buttonLabel: "Let's Talk About Your Next Step",
  },
];

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header
        small="Service Overview"
        image={service.image}
        text={service.title}
        subText={service.tagline}
      />
      <main className="max-w-7xl mx-auto px-6 py-10 text-[#071a3d]">
        <p className="text-[17px] text-[#7a7a7a] font-normal">
          {service.description}
        </p>

        {/* Service Areas */}
        <section className="mb-12 mt-10">
          <Title  title="What we cover" />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.serviceAreas.map((area, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-2 text-gray-700"
              >
                <span className="w-2 h-2 rounded-full bg-[#B8944D]" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Target Audience (only the business group has one) */}
        {service.primaryAudience && (
          <section className="mb-12">
            <Title small="" title="Primary Audience" />

           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.primaryAudience.map((audience, idx) => (
                <li
                key={idx}
                className="flex items-center space-x-2 text-gray-700"
              >
                <span className="w-2 h-2 rounded-full bg-[#B8944D]" />
                <span>{audience}</span>
              </li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-5  max-sm:px-3 cursor-pointer py-2.5 mt-4 text-sm bg-[#b8944d] hover:scale-105 transition duration-300 text-white"
          >
            {service.buttonLabel}
          </Link>
          <Link
            href="/what-we-do"
            className="px-5 hover:bg-[#071a3d] hover:text-white text-[#071a3d]  max-sm:px-3 cursor-pointer py-2.5 mt-4 text-sm max-sm:text-xs border  border-[#071a3d] hover:scale-105 transition duration-300 "
          >
            Back to Services
          </Link>
        </div>
      </main>
    </>
  );
}
