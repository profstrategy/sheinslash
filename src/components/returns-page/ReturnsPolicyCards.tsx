"use client";
import React from "react";
import { motion, Easing } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Package, Clock, ShieldCheck, XCircle, Tag, CheckCircle2 } from "lucide-react"; // Added CheckCircle2 icon

interface PolicyInfo {
  icon: React.ElementType;
  title: string;
  description: string;
}

const policyInfos: PolicyInfo[] = [
  {
    icon: XCircle,
    title: "No Returns or Refunds on Food Items",
    description:
      "Due to the perishable nature of our products, all fresh and cooked rabbit meat sales are final once delivered.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm Order Details Before Checkout",
    description:
      "Please confirm your order items, quantities, delivery address, and contact details carefully before placing your order.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Hygiene Assurance",
    description:
      "All rabbit meat is hygienically processed, properly handled, and inspected before packaging and dispatch.",
  },
  {
    icon: Package,
    title: "Safe & Secure Packaging",
    description:
      "Orders are packed in food-grade containers designed to maintain freshness and prevent contamination during delivery.",
  },
  {
    icon: Tag,
    title: "Bulk & Event Orders Policy",
    description:
      "Bulk, family, and event orders are prepared based on confirmed requests and are non-refundable once processing begins.",
  },
  {
    icon: Clock,
    title: "Timely Preparation & Delivery",
    description:
      "Orders are prepared promptly after confirmation to ensure freshness and delivered as quickly as possible.",
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

const ReturnsPolicyCards = () => {
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

export default ReturnsPolicyCards;