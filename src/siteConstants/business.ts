// Business details shown in the footer and on the policy / contact pages.
// CHIP (chip-in.asia) requires the registered business name and SSM number
// in the site footer, plus a business address and contact details.
// Replace every [PLACEHOLDER] below with the real, SSM-registered details.

export const business = {
  name: process.env.businessName ?? "[BUSINESS NAME]",
  ssmNo: process.env.businessSsmNo ?? "[SSM NO.]",
  address: process.env.businessAddress ?? "[BUSINESS ADDRESS]",
  phone: process.env.businessPhone ?? "[PHONE]",
  email: process.env.businessEmail ?? "nuzulfikrie@fikriesalam.dev",
  hours:
    process.env.businessHours ??
    "[BUSINESS HOURS, e.g. Monday to Friday, 9:00 am to 6:00 pm (MYT)]",
  lastUpdated: "19 October 2026",
};

export const policyLinks = [
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/shipping-policy", label: "Delivery & Return Policy" },
  { href: "/contact", label: "Contact" },
];
