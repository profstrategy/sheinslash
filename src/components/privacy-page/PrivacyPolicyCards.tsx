"use client";

import React from "react";
import { motion, Easing } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Database, BarChart2, Lock, UserCheck, Cookie, Share2 } from "lucide-react";

interface PrivacyInfo {
  icon: React.ElementType;
  title: string;
  description: string;
}

const policyInfos: PrivacyInfo[] = [
  {
    icon: Database,
    title: "Information We Collect",
    description:
      "We collect essential information such as your name, phone number, delivery address, and order details to process and deliver your orders efficiently.",
  },
  {
    icon: BarChart2,
    title: "How We Use Your Information",
    description:
      "Your information is used to confirm orders, process payments, provide delivery updates, and improve our services.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description:
      "We use appropriate security measures to protect your personal information from unauthorized access, loss, or misuse.",
  },
  {
    icon: UserCheck,
    title: "Your Privacy Rights",
    description:
      "You have the right to request access to, correction of, or deletion of your personal information, subject to applicable laws.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    description:
      "We use cookies and similar technologies to improve website functionality, understand user behavior, and enhance your browsing experience.",
  },
  {
    icon: Share2,
    title: "Information Sharing",
    description:
      "We do not sell your personal information. Data may only be shared with trusted partners such as payment providers and delivery services when necessary to fulfill your order.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50, x: -50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
};

const PrivacyPolicyCards = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {policyInfos.map((info, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card className="h-full p-4 text-center rounded-2xl">
              <motion.div
                className="h-8 w-8 mx-auto mb-3 text-primary"
                animate={{
                  y: [0, -5, 0],
                  rotateX: [0, 5, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut" as Easing,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.1,
                }}
              >
                {React.createElement(info.icon, { className: "h-full w-full" })}
              </motion.div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{info.title}</h3>
              <p className="text-xs text-muted-foreground">{info.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PrivacyPolicyCards;