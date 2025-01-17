import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Globe,
  Shield,
  Award,
  Rocket,
  Target,
  BarChart3,
  GitBranch,
} from "lucide-react";

const JourneySection = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const timelineData = [
    {
      id: 1,
      year: "2008",
      icon: Rocket,
      title: "Foundation",
      color: "#FF6B6B",
      stats: { clients: 10, projects: 5, growth: "100%" },
      description: "Established as a firm",
      details:
        "Launched with core focus on IT infrastructure and networking solutions",
    },
    {
      id: 2,
      year: "2009",
      icon: Globe,
      title: "TIPL Partnership",
      color: "#4ECDC4",
      stats: { clients: 25, projects: 15, growth: "150%" },
      description: "Strategic alliance formation",
      details: "Expanded service portfolio with enterprise solutions",
    },
    {
      id: 3,
      year: "2010",
      icon: Shield,
      title: "Green IT Certified",
      color: "#45B7D1",
      stats: { clients: 40, projects: 30, growth: "180%" },
      description: "Environmental milestone",
      details: "Achieved sustainability benchmarks in IT operations",
    },
    {
      id: 4,
      year: "2016",
      icon: Award,
      title: "CIDA Excellence",
      color: "#96C93D",
      stats: { clients: 100, projects: 75, growth: "200%" },
      description: "Industry recognition",
      details: "Recognized for outstanding project delivery and quality",
    },
    {
      id: 5,
      year: "2017",
      icon: GitBranch,
      title: "Incorporation",
      color: "#9B59B6",
      stats: { clients: 150, projects: 120, growth: "250%" },
      description: "Corporate milestone",
      details: "Transformed into a full-fledged corporation",
    },
    {
      id: 6,
      year: "2018",
      icon: Target,
      title: "Decade Mark",
      color: "#F39C12",
      stats: { clients: 200, projects: 180, growth: "300%" },
      description: "10 years of excellence",
      details: "Celebrated a decade of innovation and growth",
    },
    {
      id: 7,
      year: "2019",
      icon: BarChart3,
      title: "C3 Standards",
      color: "#E74C3C",
      stats: { clients: 250, projects: 220, growth: "350%" },
      description: "Process innovation",
      details: "Implemented advanced project delivery framework",
    },
  ];

  return (
    <section className="dark:bg-neutral-900 bg-zinc-200 py-16 xl:pt-32 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="xl:text-6xl text-4xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff]">
            Journey Through Innovation
          </h2>
          <p className="mt-8 text-center dark:text-gray-200 text-neutral-900">
            At Aventa Holdings Pvt Ltd, we are your trusted partner for
            achieving digital success. Our journey is driven by a steadfast
            dedication to delivering cutting-edge technology solutions. We
            specialize in Data Networking, Surveillance, Telephony, Security,
            and much more. As leaders in emerging technologies like Cloud
            Services, IoT, and Robotics, we are committed to helping you
            navigate the path to digital excellence. Join us in shaping a
            seamless and innovative future together.
          </p>
        </motion.div>

        <div className="relative xl:px-40 px-4">
          {/* Timeline line with gradient */}
          <div className="absolute xl:ml-40 ml-4 left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-[#50ade5ff] to-purple-500" />

          <div className="space-y-6">
            {timelineData.map((event, index) => {
              const Icon = event.icon;
              const isActive = activeEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector line */}
                  <div
                    className="absolute left-0 top-8 w-8 h-0.5"
                    style={{ backgroundColor: event.color }}
                  />

                  <div className="ml-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveEvent(isActive ? null : event.id)}
                      className={`
                        relative bg-gray-800 rounded-lg p-4 cursor-pointer
                        border border-gray-700 transition-all duration-300
                        ${
                          isActive
                            ? "ring-2 ring-offset-2 ring-offset-gray-900"
                            : ""
                        }
                      `}
                      style={{
                        borderColor: isActive ? event.color : undefined,
                      }}
                    >
                      {/* Top section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: event.color }}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span
                                className="text-sm font-semibold"
                                style={{ color: event.color }}
                              >
                                {event.year}
                              </span>
                              <span className="text-lg font-bold text-white">
                                {event.title}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          className="text-gray-400"
                        >
                          <Zap className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Expandable content */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="bg-gray-900 rounded-lg p-3 text-center">
                                <div
                                  className="text-2xl font-bold"
                                  style={{ color: event.color }}
                                >
                                  {event.stats.clients}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Clients
                                </div>
                              </div>
                              <div className="bg-gray-900 rounded-lg p-3 text-center">
                                <div
                                  className="text-2xl font-bold"
                                  style={{ color: event.color }}
                                >
                                  {event.stats.projects}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Projects
                                </div>
                              </div>
                              <div className="bg-gray-900 rounded-lg p-3 text-center">
                                <div
                                  className="text-2xl font-bold"
                                  style={{ color: event.color }}
                                >
                                  {event.stats.growth}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Growth
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {event.details}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
