import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "about",
  title: "About",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "aboutItem" }],
    }),
  ],
});
