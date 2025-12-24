"use client";
import { motion, Easing } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, x: -50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
};

const AboutHero = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Badge variant="outline" className="mb-4 text-sm">Who We Are</Badge>
        <div className="space-y-2">
          <h1 className="font-poppins text-2xl md:text-6xl font-bold text-foreground">
            Healthy Meat For You
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Taltex Meathub is an innovative online restaurant specializing in fresh and fried rabbit meat. We
            combine high-quality food production with digital convenience, offering customers a healthier
            alternative to ordinary meat. Our focus is on hygiene, nutrition, and fast delivery to homes, offices,
            and events across Uganda.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;