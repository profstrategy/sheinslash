"use client";
import { motion, Easing } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from "@/components/common/ImageWithFallback.tsx"; // Import ImageWithFallback

const fadeInUp = {
  hidden: { opacity: 0, y: 50, x: -50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
};

const AboutStory = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left flex flex-col gap-8"
        >
           <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Reasons Behind Our Existence
          </h2>
          <div>
            <Badge variant="outline" className="mb-4 text-sm">Our Mission</Badge>
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                To make premium, healthy, and affordable rabbit meat accessible to Ugandans through fast and
                reliable delivery.
              </p>
            </div>
          </div>
          <div>
            <Badge variant="outline" className="mb-4 text-sm">Our Vision </Badge>
            {/* <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Empowering Resellers Across Nigeria
          </h2> */}
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                To become Uganda’s leading health-focused eatery, recognized for exceptional rabbit meat
                products.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13f7c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Fashion-related image
              alt="Our Story"
              containerClassName="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;