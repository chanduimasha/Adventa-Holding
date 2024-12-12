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
    text: "Cooparate Customers",
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
    text: "Internal & External Staffs",
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
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-16 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start text-orange-600"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={100}
                  delay={3}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;