import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "contact",
  title: "Contact",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "btnText",
      title: "Button Form Text",
    }),
    defineField({
      name: "titleTwo",
      type: "string",
      title: "Title Two",
    }),
    defineField({
      name: "locationName",
      type: "string",
      title: "Location Name",
    }),
    defineField({
      name: "locationUrl",
      type: "string",
      title: "Location URL",
    }),
  ],
});
