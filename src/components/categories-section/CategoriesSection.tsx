"use client";
import { useState, useEffect, useRef } from "react";
import { motion, Easing } from "framer-motion";
import { Link } from "react-router-dom";
import { Gem, LucideIcon, Flame, Package, Users, Drumstick } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import ImageWithFallback from "@/components/common/ImageWithFallback.tsx";

interface Category {
  name: string;
  icon: LucideIcon;
  description: string;
  link: string;
  image?: string;
}

const categories: Category[] = [
  { name: "Fresh Rabbit Meat", description: "Fresh Rabbit Meat", icon: Drumstick, link: "/products?category=Fresh Rabbit Meat" },
  { name: "Rabbit Cuts", description: "Fresh Rabbit Meat", icon: Package, link: "/products?category=Rabbit Cuts" },
  { name: "Fried Rabbit", description: "Fried Rabbit", icon: Flame, link: "/products?category=Fried Rabbit" },
  { name: "Family Packs", description: "Family Packs", icon: Users, link: "/products?category=Family Packs" },
  { name: "Others", icon: Gem, description: "Miscellaneous wholesale items", link: "/products?category=Others", image: undefined },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as Easing } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50, x: -50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
};

const CategoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  const scrollSpeed = 1;

  // Conditionally create the list of categories to display
  const categoriesToDisplay = isMobile ? [...categories, ...categories] : categories;

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || !isMobile) {
      return;
    }

    let animationFrameId: number;
    let lastTimestamp: DOMHighResTimeStamp;

    const scroll = (timestamp: DOMHighResTimeStamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed > 16 && !isPaused) {
        scrollElement.scrollLeft += scrollSpeed;
        
        const singleSetWidth = scrollElement.scrollWidth / 2; 

        if (scrollElement.scrollLeft >= singleSetWidth) {
          scrollElement.scrollLeft = 0;
        }
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isMobile, scrollSpeed]);

  return (
    <section className="relative py-[0.4rem]">
      <motion.div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          "p-6 rounded-xl bg-primary/40"
        )}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Existing introductory text - DO NOT REMOVE OR EDIT */}
        <motion.h2
          className="font-poppins font-bold text-xl md:text-4xl text-foreground"
          variants={fadeInUp}
        >
          Premium Rabbit Meat, Made Easy
        </motion.h2>
        <motion.p
          className="text-sm text-muted-foreground mt-2 mb-8 md:mb-12"
          variants={fadeInUp}
        >
          Fresh cuts, family packs, and ready-to-eat options you can trust
        </motion.p>

        {/* Category Cards Container */}
        <motion.div
          className="flex overflow-x-auto whitespace-nowrap gap-2 pb-4 md:grid md:grid-cols-4 md:gap-4 no-scrollbar"
          ref={scrollRef}
          onMouseEnter={() => isMobile && setIsPaused(true)}
          onMouseLeave={() => isMobile && setIsPaused(false)}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categoriesToDisplay.map((category, index) => (
            <motion.div
              key={`${category.name}-${index}`}
              variants={itemVariants}
              className="flex flex-col items-center cursor-pointer min-w-[120px] md:min-w-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={category.link} className="flex flex-col items-center">
                {/* Image Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md mb-3 bg-white flex items-center justify-center">
                  <ImageWithFallback
                    src={category.image} // Now explicitly undefined
                    alt={category.name}
                    containerClassName="w-full h-full"
                  />
                </div>
                {/* Category Name */}
                <p className="text-sm md:text-base lg:text-lg font-bold text-gray-900 text-center mt-2 leading-tight">
                  {category.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategoriesSection;