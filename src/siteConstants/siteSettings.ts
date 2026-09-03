//---
//export dot env
import * as dotenv from "dotenv";
//---

dotenv.config();
//this file will store all site constant

export const configDev = {
  developerName: process.env.developerName ?? "Nuzul Fikrie Salam",
  role: process.env.role ?? "Full Stack Developer",
  developerSite: process.env.developerSite ?? "https://fikriesalam.dev",
  developerEmail:
    process.env.developerEmail ?? "nuzulfikriesalam@fikriesalam.dev",
  currentProject: process.env.currentProject ?? "",
  location: process.env.location ?? "Kuala Lumpur, Malaysia",
  descriptionString:
    process.env.descriptionString ??
    "Hi, I'm Fikrie. I'm a full stack developer based in Kuala Lumpur, Malaysia. I have a passion for web development and love to create for web and mobile devices.",

  xLink: process.env.xLink ?? "https://twitter.com/fikriesalam_m2t",
  facebookLink: process.env.facebookLink ?? "",
  linkedInLink:
    process.env.linkedInLink ??
    "https://www.linkedin.com/in/nuzul-fikrie-b828b855/",
  githubLink: process.env.githubLink ?? "https://github.com/nuzulfikrie",
  devTolink: process.env.devTolink ?? "https://dev.to/nuzulfikrie",
  devToApiLink: process.env.devToApiLink ?? "",
  devtoUsername: process.env.devtoUsername ?? "nuzulfikrie",
  tiktokLink: process.env.tiktokLink ?? "https://www.tiktok.com/@nuzulfikrie08",
};
