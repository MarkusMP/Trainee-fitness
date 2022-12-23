import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "aboutItem",
  title: "About Item",

  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      title: "Image",
      description: "Upload image here.",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
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
