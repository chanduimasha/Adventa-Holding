"use client";

import CountUp from "react-countup";

interface Stat {
  num: number;
  text: string;
}

const stats: Stat[] = [
  {
    num: 15,
    text: "Years in Business",
  },
  {
    num: 750,
    text: "Corporate Customers",
  },
  {
    num: 370,
    text: "Successful Projects",
  },
  {
    num: 25,
    text: "Distribution Partnerships",
  },
  {
    num: 30,
    text: "Internal & External Staff",
  },
  {
    num: 3100,
    text: "Enterprise Solutions",
  },
  {
    num: 80,
    text: "Global & Local Brands",
  },
  {
    num: 99,
    text: "Success Ratio",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="py-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center h-32 w-full"
            >
              <div className="text-4xl font-bold text-black mb-4">
                <CountUp
                  end={item.num}
                  duration={300}
                  delay={0.1}
                  suffix={item.text === "Success Ratio" ? "%" : ""}
                />+
              </div>
              <h3 className="text-gray-500 text-lg font-medium text-center leading-tight">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;