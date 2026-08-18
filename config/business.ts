export const businessConfig = {
  name: "Chand Mobile",
  shortName: "CHAND MOBILE",
  tagline: "Your Phone. Our Expertise.",
  description:
    "Professional smartphone repairs including screen replacement, battery replacement, charging port repair and more. Fast service, quality parts and warranty-backed repairs.",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+919876543210",
  email: "hello@chandmobile.com",
  address: "142 MG Road, Sector 17",
  city: "Your City",
  state: "Punjab",
  zip: "160017",
  country: "IN",
  latitude: 30.7333,
  longitude: 76.7794,
  rating: "4.9",
  reviewCount: "612",
  devicesRepaired: "10,000+",
  satisfaction: "98%",
  warranty: "1 Year",
  hours: [
    { day: "Monday – Friday", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "11:00 AM – 5:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.6201384073356!2d76.77971331513133!3d30.734689681636254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be656209b%3A0xe510f214cc96c565!2sSector%2017%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsapp.replace("+", "")}?text=${encoded}`;
}

export function telLink() {
  return `tel:${businessConfig.phoneRaw}`;
}
