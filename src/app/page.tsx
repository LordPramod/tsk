"use client";

import {
  BriefcaseBusiness,
  Eye,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";
import {
  Card,
  DarkBanner,
  Hero,
  homeCardArr,
  StatBar,
  statBarArr,
  WhoWeAre,
} from "./shared";

export default function Home() {
  const statBarArr = [
    {
      value: "250+",
      label: "Projects Delivered",
      icon: <BriefcaseBusiness />,
    },
    {
      value: "40+",
      label: "Happy Clients",
      icon: <HeartHandshake />,
    },
    {
      value: "1M+",
      label: "Content Views",
      icon: <Eye />,
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: <RefreshCw />,
    },
  ];
  return (
    <div>
      <Hero
        description="Digital Chautari is an IT Company who are dedicated to solve your problems digitally."
        eyebrow="🚀 Welcome to Digital Chautari"
        title="We build digital bridges between
ideas and impact"
        highlightedTitle="digital bridges"
        hasButton
      />
      <div className="flex flex-col gap-8">
        <div className="section">
          <StatBar stats={statBarArr} />
        </div>
        <div className="section container-dc grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeCardArr.map((item, id) => (
            <Card
              key={id}
              description={item.description}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
        <DarkBanner
          eyebrow="Our Impact"
          title="Results that speak for themselves."
          stats={statBarArr}
        />
        <WhoWeAre />
      </div>
    </div>
  );
}
