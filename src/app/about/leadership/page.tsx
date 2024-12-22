"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import FooterNew from "@/components/footer";
import { useRouter } from "next/navigation";

import {
  LinkedinIcon,
  TwitterIcon,
  ChevronDown,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

// Types
interface Leader {
  id: number;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  linkedIn?: string;
  twitter?: string;
  achievements: string[];
}

interface AdvisoryMember {
  id: number;
  name: string;
  expertise: string;
  photoUrl: string;
}

const LeadershipPage = () => {
  const router = useRouter(); // Initialize the router
  // Sample data - In real app, this would come from an API or CMS
  const executives: Leader[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "20+ years of experience in technology and innovation. Former VP at Fortune 500 companies.",
      photoUrl: "/assets/feedbacks/feedback3.jpeg",
      linkedIn: "#",
      twitter: "#",
      achievements: [
        "Led company to 300% growth in 3 years",
        "Named Top 40 Under 40 by Forbes",
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Chief Technology Officer",
      bio: "PhD in Computer Science. Pioneer in AI and machine learning technologies.",
      photoUrl: "/assets/feedbacks/feedback4.jpeg",
      linkedIn: "#",
      twitter: "#",
      achievements: [
        "15+ patents in AI technology",
        "Built scalable infrastructure supporting 1M+ users",
      ],
    },
    {
      id: 3,
      name: "David Lee",
      title: "Chief Technology Officer",
      bio: "Expert in software development and AI with 15+ years in leading tech companies. Former Director of Engineering at a global SaaS firm.",
      photoUrl: "/assets/feedbacks/feedback1.jpeg",
      linkedIn: "#",
      twitter: "#",
      achievements: [
        "Developed AI-driven solutions that increased operational efficiency by 45%",
        "Published 10+ research papers in top-tier tech journals",
      ],
    },
  ];

  const advisoryBoard: AdvisoryMember[] = [
    {
      id: 1,
      name: "Dr. Emily Roberts",
      expertise: "AI Ethics & Governance",
      photoUrl: "/assets/feedbacks/feedback2.jpeg",
    },
    {
      id: 2,
      name: "Mr. John Carter",
      expertise: "Cybersecurity Analyst",
      photoUrl: "/assets/feedbacks/feedback3.jpeg",
    },
    {
      id: 3,
      name: "Ms. Sophia Thompson",
      expertise: "Data Scientist",
      photoUrl: "/assets/feedbacks/feedback4.jpeg",
    },
    {
      id: 4,
      name: "Prof. Michael Green",
      expertise: "Quantum Computing Researcher",
      photoUrl: "/assets/feedbacks/feedback5.jpeg",
    },
    {
      id: 5,
      name: "Dr. Olivia Brown",
      expertise: "Blockchain Architect",
      photoUrl: "/assets/feedbacks/feedback6.jpeg",
    },
    {
      id: 6,
      name: "Dr. Emily Roberts",
      expertise: "AI Ethics & Governance",
      photoUrl: "/assets/feedbacks/feedback1.jpeg",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-50 xl:pt-16 pt-12">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-orange-500">Leadership</span> Team
            </h1>
            <p className="text-xl text-gray-600 pt-4 text-center">
              Meet the visionaries and industry experts driving innovation and
              excellence at our company. Our leadership team brings decades of
              combined experience in technology, business, and transformation.
            </p>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-4 bg-white pb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">
              Executive Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {executives.map((executive) => (
                <Card key={executive.id} className="bg-white shadow-xl ">
                  <CardContent className="p-6">
                    <img
                      src={executive.photoUrl}
                      alt={executive.name}
                      className="w-full h-72 rounded-lg mb-6 shadow-xl transform hover:scale-105 transition-transform"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {executive.name}
                    </h3>
                    <p className="text-orange-500 font-medium mb-4">
                      {executive.title}
                    </p>
                    <p className="text-gray-600 mb-6">{executive.bio}</p>
                    <div className="flex space-x-4 mb-6">
                      {executive.linkedIn && (
                        <a
                          href={executive.linkedIn}
                          className="text-gray-600 hover:text-orange-500"
                        >
                          <LinkedinIcon size={20} />
                        </a>
                      )}
                      {executive.twitter && (
                        <a
                          href={executive.twitter}
                          className="text-gray-600 hover:text-orange-500"
                        >
                          <TwitterIcon size={20} />
                        </a>
                      )}
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {executive.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="text-gray-600 flex items-start"
                          >
                            <ArrowRight
                              size={16}
                              className="mr-2 mt-1 flex-shrink-0"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-16 bg-gray-200 shadow-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Advisory Board
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisoryBoard.map((advisor) => (
                <Card
                  key={advisor.id}
                  className="bg-white transform hover:scale-105 transition-transform"
                >
                  <CardContent className="p-6">
                    <img
                      src={advisor.photoUrl}
                      alt={advisor.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                      {advisor.name}
                    </h3>
                    <p className="text-orange-500 text-center font-medium">
                      {advisor.expertise}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Philosophy Section */}
        <section className="py-16 bg-white shadow-2xl">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in fostering a culture of innovation, collaboration,
                and continuous learning. Our leadership team is committed to
                creating an inclusive environment where diverse perspectives
                drive creative solutions.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-700">
                <PlayCircle className="mr-2" size={20} />
                Watch Our Story
              </Button>
            </div>
          </div>
        </section>

        {/* Vision and Goals Section */}
        <section className="py-16 bg-gray-200 shadow-xl">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Vision & Goals
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Our vision is to revolutionize the technology landscape
                  through innovative solutions that empower businesses and
                  individuals alike. We are committed to sustainable growth,
                  ethical practices, and creating lasting value for our
                  stakeholders.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Strategic Objectives
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ChevronDown className="mr-2 mt-1" size={16} />
                          <span className="text-gray-600">
                            Expand global presence in key markets
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronDown className="mr-2 mt-1" size={16} />
                          <span className="text-gray-600">
                            Drive innovation in AI and machine learning
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        2024 Initiatives
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ChevronDown className="mr-2 mt-1" size={16} />
                          <span className="text-gray-600">
                            Launch next-gen platform
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronDown className="mr-2 mt-1" size={16} />
                          <span className="text-gray-600">
                            Expand R&D investments
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Join Our Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We are always looking for talented individuals to join our team and
              help shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-white text-orange-500 hover:bg-orange-600 hover:text-white"
                onClick={() => router.push("/careers")} // Navigate to Contact Us page
              >
                View Careers
              </Button>
              <Button
                className="bg-white text-orange-500 hover:bg-orange-600 hover:text-white"
                onClick={() => router.push("/contact")} // Navigate to Contact Us page
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
      <FooterNew />
    </div>
  );
};

export default LeadershipPage;
