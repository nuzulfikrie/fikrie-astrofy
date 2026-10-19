// Business details shown in the footer and on the policy / contact pages.
// CHIP (chip-in.asia) requires the registered business name and SSM number
// in the site footer, plus a business address and contact details.
// Optional fields (address, phone, hours) are hidden wherever they are unset.

const optional = (value: string | undefined) =>
  value && value.trim() !== "" ? value : undefined;

export const business: {
  name: string;
  ssmNo: string;
  address?: string;
  phone?: string;
  email: string;
  location: string;
  hours?: string;
  lastUpdated: string;
} = {
  name: process.env.businessName ?? "NUZUL FIKRIE BIN SALAM",
  ssmNo: process.env.businessSsmNo ?? "202403321561 (KT0581196-A)",
  address: optional(process.env.businessAddress),
  phone: optional(process.env.businessPhone),
  email: process.env.businessEmail ?? "nuzulfikrie@fikriesalam.dev",
  location: process.env.businessLocation ?? "Kuala Lumpur, Malaysia",
  hours: optional(process.env.businessHours),
  lastUpdated: "19 October 2026",
};

export const policyLinks = [
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/shipping-policy", label: "Delivery & Return Policy" },
  { href: "/contact", label: "Contact" },
];
