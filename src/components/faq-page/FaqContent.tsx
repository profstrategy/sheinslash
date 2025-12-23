"use client";
import { motion, Easing } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
 {
    question: "What payment methods do you accept?",
    answer:
      "We accept Mobile Money payments (MTN and Airtel) as well as cash on delivery. Our goal is to make ordering convenient and accessible for all customers in Uganda.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes between 2–4 hours after order confirmation, depending on your location and order volume. We always strive for fast and reliable service.",
  },
  {
    question: "Which areas do you deliver to?",
    answer:
      "We currently deliver within Kampala and surrounding areas. Delivery fees may vary based on distance. Expansion to more regions is ongoing.",
  },
  {
    question: "Is your rabbit meat fresh and hygienically processed?",
    answer:
      "Yes. All our rabbit meat is sourced from trusted farmers and processed under strict hygiene standards. Fresh meat is cleanly cut, portioned, and properly packaged to maintain quality.",
  },
  {
    question: "Do you sell cooked rabbit meat?",
    answer:
      "Yes. We offer delicious fried rabbit portions that are fully cooked, well-seasoned, and ready to eat. These are perfect for quick meals or special occasions.",
  },
  {
    question: "Can I place bulk or event orders?",
    answer:
      "Absolutely. We offer family packs and custom bulk orders for events, offices, and parties. Please contact us ahead of time to help us prepare your order properly.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is confirmed, you will receive updates via phone or WhatsApp. You can also contact our support line for real-time delivery updates.",
  },
  {
    question: "What makes rabbit meat a healthy choice?",
    answer:
      "Rabbit meat is low in fat and cholesterol, high in protein, and easy to digest. It is an excellent choice for people focused on healthy eating and balanced nutrition.",
  },
]

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

const FaqContent = () => {
  return (
    <section className="py-12 md:py-16 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="font-poppins text-2xl md:text-3xl font-bold text-center mb-8 text-foreground"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Common Questions
      </motion.h2>

      <motion.div
        className="w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <AccordionItem value={`item-${index + 1}`} className="border-b">
                <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-4 text-left pl-0">
                  <div className="flex items-start w-full">
                    <span className="mr-2 text-primary flex-shrink-0">{index + 1}.</span>
                    <span className="flex-grow text-left">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-0 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FaqContent;