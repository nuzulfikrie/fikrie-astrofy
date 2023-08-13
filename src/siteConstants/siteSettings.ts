//---
//export dot env
import * as dotenv from "dotenv";
//---

dotenv.config();
//this file will store all site constant

export const configDev = {
  developerName: process.env.developerName,
  role: process.env.role,
  developerSite: process.env.developerSite,
  developerEmail: process.env.developerEmail,
  currentProject: process.env.currentProject,
  location: process.env.location,
  descriptionString:
    "Hi, I'm Fikrie. I'm a full stack developer based in Kuala Lumpur, Malaysia. I have a passion for web development and love to create for web and mobile devices.",

  xLink: process.env.xLink,
  facebookLink: process.env.facebookLink,
  linkedInLink: process.env.linkedInLink,
  githubLink: process.env.githubLink,
  devTolink: process.env.devTolink,
  devToApiLink: process.env.devToApiLink,
  devtoUsername: process.env.devtoUsername,
  tiktokLink: process.env.tiktokLink,
};
