export type DeviceCategory = "phones" | "tablets" | "laptops";
export type DeviceCondition = "Like New" | "Excellent" | "Good";

export interface RefurbishedProduct {
  id: string;
  name: string;
  brand: "Apple" | "Samsung" | "Google" | "OnePlus";
  category: DeviceCategory;
  price: number;
  originalPrice: number;
  condition: DeviceCondition;
  storage: string;
  color: string;
  batteryHealth: string;
  warranty: string;
  rating: number;
  reviewsCount: number;
  image: string;
  specs: {
    display: string;
    processor: string;
    camera: string;
    ram: string;
  };
  features: string[];
  inStock: boolean;
  tag?: string;
}

export const refurbishedProducts: RefurbishedProduct[] = [
  {
    id: "iphone-15-pro-max-256",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "phones",
    price: 104999,
    originalPrice: 159900,
    condition: "Like New",
    storage: "256GB",
    color: "Natural Titanium",
    batteryHealth: "98%",
    warranty: "12 Months Certified Warranty",
    rating: 4.9,
    reviewsCount: 142,
    image: "/models/iphone.png",
    specs: {
      display: '6.7" Super Retina XDR OLED 120Hz',
      processor: "A17 Pro (3nm)",
      camera: "48MP Main + 5x Telephoto + 12MP Ultra-Wide",
      ram: "8GB",
    },
    features: [
      "100% Original Grade-A Titanium Body",
      "Factory Checked 32-Point Diagnostic Test",
      "Brand New Screen Protector & Cable Included",
      "7-Day Money-Back Guarantee",
    ],
    inStock: true,
    tag: "Best Seller",
  },
  {
    id: "iphone-14-128",
    name: "iPhone 14",
    brand: "Apple",
    category: "phones",
    price: 44999,
    originalPrice: 69900,
    condition: "Excellent",
    storage: "128GB",
    color: "Midnight Blue",
    batteryHealth: "94%",
    warranty: "12 Months Certified Warranty",
    rating: 4.8,
    reviewsCount: 289,
    image: "/models/iphone.png",
    specs: {
      display: '6.1" Super Retina XDR OLED',
      processor: "A15 Bionic",
      camera: "Dual 12MP System with Action Mode",
      ram: "6GB",
    },
    features: [
      "Clean IMEI & iCloud Unlocked",
      "Flawless Screen & Camera Lenses",
      "Free Fast Charger Adapter Included",
      "7-Day Hassle-Free Replacement",
    ],
    inStock: true,
    tag: "Popular",
  },
  {
    id: "samsung-s24-ultra-256",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "phones",
    price: 92999,
    originalPrice: 129999,
    condition: "Like New",
    storage: "256GB",
    color: "Titanium Gray",
    batteryHealth: "99%",
    warranty: "12 Months Certified Warranty",
    rating: 4.9,
    reviewsCount: 96,
    image: "/models/iphone.png",
    specs: {
      display: '6.8" Dynamic AMOLED 2X 120Hz',
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "200MP Quad Camera with AI Zoom",
      ram: "12GB",
    },
    features: [
      "Built-in S-Pen Stylus Included",
      "Galaxy AI Features Fully Functional",
      "Zero Scratches on Display & Frame",
      "1-Year Complete Store Warranty",
    ],
    inStock: true,
    tag: "Flagship",
  },
  {
    id: "samsung-s23-fe-128",
    name: "Samsung Galaxy S23 FE 5G",
    brand: "Samsung",
    category: "phones",
    price: 33999,
    originalPrice: 59999,
    condition: "Excellent",
    storage: "128GB",
    color: "Mint Green",
    batteryHealth: "95%",
    warranty: "6 Months Certified Warranty",
    rating: 4.7,
    reviewsCount: 78,
    image: "/models/iphone.png",
    specs: {
      display: '6.4" Dynamic AMOLED 2X',
      processor: "Exynos 2200",
      camera: "50MP Triple Camera with OIS",
      ram: "8GB",
    },
    features: [
      "Water & Dust Resistance Verified",
      "Original Samsung Battery Installed",
      "Complimentary Back Cover & Glass",
      "Same-Day Store Pickup Available",
    ],
    inStock: true,
  },
  {
    id: "google-pixel-8-pro-128",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "phones",
    price: 64999,
    originalPrice: 106999,
    condition: "Like New",
    storage: "128GB",
    color: "Bay Blue",
    batteryHealth: "97%",
    warranty: "12 Months Certified Warranty",
    rating: 4.8,
    reviewsCount: 64,
    image: "/models/iphone.png",
    specs: {
      display: '6.7" Super Actua OLED 120Hz',
      processor: "Google Tensor G3",
      camera: "50MP Pro Camera with Magic Eraser",
      ram: "12GB",
    },
    features: [
      "Pure Google Android Experience",
      "Temperature Sensor & AI Photos",
      "32-Point Quality Lab Certified",
      "12 Months Warranty Included",
    ],
    inStock: true,
    tag: "AI Powered",
  },
  {
    id: "oneplus-12-256",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "phones",
    price: 52999,
    originalPrice: 69999,
    condition: "Like New",
    storage: "256GB",
    color: "Silky Black",
    batteryHealth: "99%",
    warranty: "12 Months Certified Warranty",
    rating: 4.9,
    reviewsCount: 112,
    image: "/models/iphone.png",
    specs: {
      display: '6.82" 2K ProXDR Display 120Hz',
      processor: "Snapdragon 8 Gen 3",
      camera: "4th Gen Hasselblad Camera System",
      ram: "16GB",
    },
    features: [
      "100W SUPERVOOC Fast Charger Included",
      "5400mAh High-Capacity Battery",
      "OxygenOS Smooth Performance",
      "1-Year Warranty & Free Service",
    ],
    inStock: true,
    tag: "High Performance",
  },
  {
    id: "ipad-pro-11-m2",
    name: "iPad Pro 11-inch (M2 Chip)",
    brand: "Apple",
    category: "tablets",
    price: 58999,
    originalPrice: 81900,
    condition: "Like New",
    storage: "128GB Wi-Fi",
    color: "Space Gray",
    batteryHealth: "96%",
    warranty: "12 Months Certified Warranty",
    rating: 4.9,
    reviewsCount: 52,
    image: "/models/ipad.png",
    specs: {
      display: '11" Liquid Retina ProMotion 120Hz',
      processor: "Apple M2 8-Core CPU / 10-Core GPU",
      camera: "12MP Wide + 10MP Ultra-Wide with LiDAR",
      ram: "8GB Unified Memory",
    },
    features: [
      "Apple Pencil 2 & Magic Keyboard Compatible",
      "Face ID & 4-Speaker Audio System",
      "Tested & Certified by Apple Certified Techs",
      "Includes Original 20W USB-C Charger",
    ],
    inStock: true,
    tag: "Pro Tablet",
  },
  {
    id: "macbook-air-m2",
    name: "MacBook Air 13.6-inch (M2)",
    brand: "Apple",
    category: "laptops",
    price: 74999,
    originalPrice: 114900,
    condition: "Like New",
    storage: "256GB SSD / 8GB RAM",
    color: "Midnight",
    batteryHealth: "98% (Only 32 Cycle Count)",
    warranty: "12 Months Certified Warranty",
    rating: 4.9,
    reviewsCount: 88,
    image: "/models/macbook.png",
    specs: {
      display: '13.6" Liquid Retina True Tone',
      processor: "Apple M2 8-Core Chip",
      camera: "1080p FaceTime HD Camera",
      ram: "8GB Unified Memory",
    },
    features: [
      "MagSafe 3 Charging & 2x Thunderbolt Ports",
      "Up to 18 Hours All-Day Battery Life",
      "Flawless Keyboard & Force Touch Trackpad",
      "Original MagSafe Cable & Power Adapter",
    ],
    inStock: true,
    tag: "Best Value",
  },
];
