import React from "react";
import { notFound } from "next/navigation";

import Link from "next/link";
import Header from "@/components/About/Header";
import Title from "@/components/Global/Title";
// data/servicesData.ts

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  serviceAreas: string[];
  primaryAudience?: string[];
  headline?: string;
  extraInfo?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "hrPeoleAdvisory",
    number: "01",
    title: "HR & People Advisory",
    tagline:
      "Helping growing businesses build the people side of their business properly.",
    description:
      "Growing businesses often reach a point where informal ways of managing people are no longer enough. You need structure, clear roles, practical systems, the right talent and a culture that can support where the business is going. We help businesses build and strengthen those foundations.",
    serviceAreas: [
      "HR Advisory & Strategy",
      "HR Policies, Processes & Documentation",
      "HR Foundations for Startups and SMEs",
      "Recruitment & Talent Acquisition",
      "Performance Management",
      "Employee Engagement",
      "Culture & Organizational Development",
      "HR Systems & Process Improvement",
      "Learning & Development",
      "Training & Workshop Facilitation",
      "People & Workplace Advisory",
      "HR Health Checks & Reviews",
      "Ongoing / Retained HR Support",
    ],
    primaryAudience: [
      "Startups",
      "Small Businesses",
      "SMEs",
      "Growing Organizations",
      "Founders & Business Owners",
    ],
  },
  {
    id: "career-personal-growth",
    number: "02",
    title: "Career & Personal Growth Advisory",
    tagline:
      "Sometimes you don't need someone to tell you what to do. You need someone to help you think it through.",
    description:
      "Career growth is not always a straight line. There are moments when people need support to understand their strengths, make better career decisions, prepare for opportunities, navigate transitions or rebuild confidence.",
    serviceAreas: [
      "Career Advisory & Coaching",
      "Career Direction & Planning",
      "CV & LinkedIn Profile Review",
      "Interview Preparation",
      "Career Transition Support",
      "Professional Development",
      "Workplace Navigation",
      "Personal Growth Conversations",
      "Goal Setting & Accountability",
    ],
    primaryAudience: [
      "Students",
      "Graduates",
      "Job Seekers",
      "Professionals",
      "Career Changers",
    ],
  },
  {
    id: "training-facilitation",
    number: "03",
    title: "Training & Facilitation",
    headline: "Learning that moves people forward.",
    tagline:
      "Training should not simply fill a room and produce certificates. It should change something.",
    description:
      "We design and facilitate practical learning experiences that help people understand better, work better and perform better.",
    serviceAreas: [
      "Workplace Effectiveness",
      "Communication",
      "Emotional Intelligence",
      "Team Development",
      "People Management",
      "Performance Management",
      "Workplace Culture",
      "Employee Experience",
      "Career Development",
      "Professional Skills",
      "HR & People Management",
    ],
    extraInfo:
      "Tailored workshops and facilitation are available for organizations.",
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
      <Header small="Service Overview" text={service.title} subText={service.tagline}/>
      <main className="max-w-7xl mx-auto px-6 py-10 text-[#071a3d]">
        

       


        
          <p className="text-[17px] text-[#7a7a7a] font-normal">
            {service.description}
          </p>
      
        {/* Service Areas */}
        <section className="mb-12 mt-10">
          <Title small="service areas" title="What we cover"/>
        
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

        {/* Target Audience (if available) */}
        {service.primaryAudience && (
          <section className="mb-12">
            <Title small=""  title="Primary Audience"/>
           
            <div className="flex flex-wrap gap-2">
              {service.primaryAudience.map((audience, idx) => (
                <span
                  key={idx}
                  className="bg-[#EAF2FB] text-[#071a3d] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {audience}
                </span>
              ))}
            </div>
          </section>
        )}

        {service.extraInfo && (
          <p className="text-md font-medium text-gray-600 bg-blue-50 p-4 rounded-md border-l-4 border-[#071a3d] mb-12">
            {service.extraInfo}
          </p>
        )}

        <div className="flex gap-4">
          <Link
            href="/contact"
            className="py-3 px-8 text-white bg-[#B8944D] hover:bg-[#a18140] transition font-medium rounded-md"
          >
            Book a Consultation
          </Link>
          <Link
            href="/what-we-do"
            className="py-3 px-8 text-[#071a3d] border border-[#071a3d] hover:bg-gray-100 transition font-medium rounded-md"
          >
            Back to Services
          </Link>
        </div>
      </main>
    </>
  );
}
