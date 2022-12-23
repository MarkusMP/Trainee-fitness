import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "classesItem",
  title: "Classes Item",

  fields: [
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
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "subTitle",
      title: "Sub Title",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "string",
      name: "price",
      title: "Price",
    }),
  ],
});
