import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.string().optional(),
            heroImage: image().optional(),
            badge: z.string().optional(),
        }),
});

const storeCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/store" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            custom_link_label: z.string(),
            custom_link: z.string().optional(),
            updatedDate: z.coerce.date(),
            pricing: z.string().optional(),
            oldPricing: z.string().optional(),
            badge: z.string().optional(),
            checkoutUrl: z.string().optional(),
            heroImage: image().optional(),
            details: z.boolean().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

export const collections = {
    'blog': blogCollection,
    'store': storeCollection
};
