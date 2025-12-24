import { Flame, Package, Truck, Thermometer, ShieldCheck } from "lucide-react";
import { generateProductId } from "@/utils/id-generator";


export interface Product {
  id: string;
  name: string;
  category: string;
  images: string[];

  /** Price PER UNIT (not bulk) */
  price: number;

  /** Optional original unit price (for discounts) */
  originalPrice?: number;

  rating: number;
  reviewCount: number;

  /** UI helpers */
  tag?: string;
  tagVariant?: "default" | "secondary" | "destructive" | "outline";
  limitedStock?: boolean;

  /** Food-specific */
  minOrderQuantity: number; // 👈 REQUIRED (usually 1)
}



export interface ProductDetails extends Product {
  fullDescription: string;
  keyFeatures: string[];
  styleNotes: string; // New field for fashion styling tips
  detailedSpecs: {
    group: string;
    items: { label: string; value: string; icon?: React.ElementType }[];
  }[];
  reviews: {
    id: string;
    author: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    isVerifiedBuyer: boolean;
  }[];
  relatedProducts: string[];
}

// --- Generate new IDs for mapping ---
const ID_MAP = {
  "fresh-whole-rabbit": generateProductId("fresh-rabbit"),
  "rabbit-cuts-pack": generateProductId("fresh-rabbit"),
  "fried-rabbit-portion": generateProductId("fried-rabbit"),
  "family-rabbit-pack": generateProductId("family-pack"),
};

export const mockProducts: ProductDetails[] = [
  {
    id: ID_MAP["fresh-whole-rabbit"],
    name: "Fresh Whole Rabbit",
    category: "Fresh Rabbit Meat",
    images: [
      "/images/rabbit/fresh-whole-1.jpg",
      "/images/rabbit/fresh-whole-2.jpg",
    ],
    price: 45000,
    originalPrice: 50000,
    minOrderQuantity: 1,

    rating: 4.8,
    reviewCount: 112,
    tag: "Fresh",
    tagVariant: "secondary",
    limitedStock: true,

    fullDescription:
      "Freshly processed whole rabbit meat, hygienically handled and packed to preserve quality and freshness. Ideal for home cooking, grilling, or traditional recipes.",

    keyFeatures: [
      "Freshly slaughtered and cleaned",
      "High-protein, low-fat meat",
      "No preservatives or additives",
      "Hygienically packaged",
    ],

    styleNotes:
      "Best prepared by slow cooking, grilling, or stewing. Can be portioned into cuts before cooking.",

    detailedSpecs: [
      {
        group: "Product Details",
        items: [
          { label: "Weight", value: "1.2 – 1.5 kg", icon: Package },
          { label: "Processing", value: "Fresh, not frozen" },
          { label: "Shelf Life", value: "24 hours refrigerated", icon: Thermometer },
        ],
      },
      {
        group: "Handling & Safety",
        items: [
          { label: "Packaging", value: "Sealed food-grade pack", icon: ShieldCheck },
          { label: "Delivery", value: "Same-day delivery", icon: Truck },
        ],
      },
    ],

    reviews: [
      {
        id: "rev1",
        author: "Joseph K.",
        rating: 5,
        date: "2024-08-10",
        title: "Very fresh",
        comment: "The meat arrived very fresh and clean. Cooked perfectly.",
        isVerifiedBuyer: true,
      },
    ],

    relatedProducts: [
      ID_MAP["rabbit-cuts-pack"],
      ID_MAP["fried-rabbit-portion"],
    ],
  },

  {
    id: ID_MAP["rabbit-cuts-pack"],
    name: "Fresh Rabbit Cuts Pack",
    category: "Fresh Rabbit Meat",
    images: [
      "/images/rabbit/cuts-1.jpg",
      "/images/rabbit/cuts-2.jpg",
    ],
    price: 38000,
    minOrderQuantity: 1,

    rating: 4.7,
    reviewCount: 86,
    tag: "Popular",
    tagVariant: "default",

    fullDescription:
      "Pre-cut fresh rabbit portions, cleaned and ready to cook. Perfect for quick meals and easy preparation.",

    keyFeatures: [
      "Ready-to-cook cuts",
      "Evenly portioned pieces",
      "Ideal for frying or stews",
      "Hygienic handling",
    ],

    styleNotes:
      "Season lightly and fry, grill, or add to soups and stews.",

    detailedSpecs: [
      {
        group: "Product Details",
        items: [
          { label: "Weight", value: "1 kg approx", icon: Package },
          { label: "Cut Type", value: "Mixed portions" },
        ],
      },
    ],

    reviews: [
      {
        id: "rev2",
        author: "Grace M.",
        rating: 5,
        date: "2024-08-08",
        title: "Very convenient",
        comment: "Loved that it was already cut. Saved me time.",
        isVerifiedBuyer: true,
      },
    ],

    relatedProducts: [
      ID_MAP["fresh-whole-rabbit"],
      ID_MAP["family-rabbit-pack"],
    ],
  },

  {
    id: ID_MAP["fried-rabbit-portion"],
    name: "Fried Rabbit Portion",
    category: "Fried Rabbit",
    images: [
      "/images/rabbit/fried-1.jpg",
      "/images/rabbit/fried-2.jpg",
    ],
    price: 25000,
    minOrderQuantity: 1,

    rating: 4.9,
    reviewCount: 140,
    tag: "Best Seller",
    tagVariant: "destructive",

    fullDescription:
      "Crispy, well-seasoned fried rabbit prepared fresh on order. Ready-to-eat and packed hot for delivery.",

    keyFeatures: [
      "Freshly fried on order",
      "Well seasoned",
      "Crispy outside, tender inside",
      "Ready to eat",
    ],

    styleNotes:
      "Best enjoyed hot. Pairs well with chips, rice, or local sauces.",

    detailedSpecs: [
      {
        group: "Meal Info",
        items: [
          { label: "Portion Size", value: "Single serving", icon: Flame },
          { label: "Spice Level", value: "Medium" },
        ],
      },
    ],

    reviews: [
      {
        id: "rev3",
        author: "Brian O.",
        rating: 5,
        date: "2024-08-12",
        title: "Delicious!",
        comment: "Arrived hot and tasted amazing. Will order again.",
        isVerifiedBuyer: true,
      },
    ],

    relatedProducts: [ID_MAP["rabbit-cuts-pack"]],
  },

  {
    id: ID_MAP["family-rabbit-pack"],
    name: "Family Rabbit Pack",
    category: "Family Packs",
    images: ["/images/rabbit/family-pack-1.jpg"],
    price: 120000,
    minOrderQuantity: 1,

    rating: 4.8,
    reviewCount: 54,
    tag: "Value Pack",
    tagVariant: "outline",

    fullDescription:
      "A value family pack containing multiple fresh rabbit portions, ideal for families and small gatherings.",

    keyFeatures: [
      "Multiple rabbits included",
      "Better value for families",
      "Fresh and hygienic",
      "Ideal for events",
    ],

    styleNotes:
      "Store refrigerated and cook within 24 hours for best quality.",

    detailedSpecs: [
      {
        group: "Pack Details",
        items: [
          { label: "Contents", value: "3 whole rabbits", icon: Package },
          { label: "Best For", value: "Families & events" },
        ],
      },
    ],

    reviews: [
      {
        id: "rev4",
        author: "Sarah L.",
        rating: 5,
        date: "2024-08-05",
        title: "Great value",
        comment: "Perfect for our family gathering. Very fresh.",
        isVerifiedBuyer: true,
      },
    ],

    relatedProducts: [ID_MAP["fresh-whole-rabbit"]],
  },
];

export const getProductById = (id: string): ProductDetails | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByIds = (ids: string[]): ProductDetails[] => {
  return ids.map(id => getProductById(id)).filter((product): product is ProductDetails => product !== undefined);
};

// Helper to get a few random products for recommendations
export const getRandomProducts = (count: number, excludeId?: string): Product[] => {
  const filteredProducts = excludeId ? mockProducts.filter(p => p.id !== excludeId) : mockProducts;
  const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(p => ({
    id: p.id,
    name: p.name,
    category: p.category,
    images: p.images,
    price: p.price,
    rating: p.rating,
    reviewCount: p.reviewCount,
    tag: p.tag,
    limitedStock: p.limitedStock,
    minOrderQuantity: p.minOrderQuantity
  }));
};

// Helper to get products for "Recently Viewed" (now uses actual IDs)
export const getRecentlyViewedProducts = (recentlyViewedIds: string[], currentProductId?: string): Product[] => {
  // Filter out the current product from the list of IDs if it's there
  const filteredIds = recentlyViewedIds.filter(id => id !== currentProductId);
  // Get the actual product objects based on these IDs
  const products = getProductsByIds(filteredIds);
  return products;
};