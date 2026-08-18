import Title from "../Global/Title";

export default function WhyOGCrystal() {
  const pillars = [
    {
      title: "We Listen Before We Advise",
      description:
        "We take time to understand the real issue—not just what is being presented on the surface.",
    },
    {
      title: "We Make Things Practical",
      description:
        "Good advice should be useful. Our recommendations are designed to be realistic and actionable.",
    },
    {
      title: "We See the Person Behind the Problem",
      description:
        "People challenges are rarely only about policies and processes. We address the underlying human dynamics.",
    },
    {
      title: "Professional Expertise with a Human Approach",
      description:
        "You get the structure and discipline of professional HR practice without losing the human element.",
    },
    {
      title: "We Think Beyond the Immediate Problem",
      description:
        "We don't just fix today's issue. We transform systems so the same problem doesn't keep repeating.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div>
        <Title small="The OG Crystal Difference" title="Why OG Crystal?" />
        {/* Left Column: Heading */}
        <div>
          <p className="text-gray-600 text-center leading-relaxed">
            We combine strategic HR discipline with authentic human insight to
            build resilient, high-performing workplace cultures.
          </p>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 mt-10 gap-2">
          {pillars.map((item, index) => (
            <div
              className={`p-6 rounded-2xl flex gap-2  border cursor-pointer border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 `}
              key={index}
            >
              <div className="size-15 rounded-full flex shrink-0 font-bold justify-center items-center  bg-[#EAF2FB]">{index + 1}</div>
              <div>
                <h3 className="text-md font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
