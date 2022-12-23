import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "header",
  title: "Header",
  icon: MenuIcon,

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "logo",
      title: "Logo",
    }),
    defineField({
      name: "menuItems",
      title: "Menu Item list",
      description: "Links displayed on the header of your site.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [
            {
              type: "home",
            },
            {
              type: "links",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "social",
      type: "array",
      title: "Social Links",
      description: "Enter your Social Media URLs",
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Choose Social Media",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" },
                ],
              },
            },
            {
              type: "url",
              name: "url",
              title: "Full Profile URL",
            },
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url",
            },
          },
        },
      ],
    }),
  ],
});
