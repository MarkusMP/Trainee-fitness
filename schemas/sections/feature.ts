import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "feature",
  title: "Feature",

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
      type: "string",
      name: "btnText",
      title: "Button Text",
    }),
    defineField({
      type: "string",
      name: "titleTwo",
      title: "Work Hours",
    }),
    defineField({
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "featureItem" }],
    }),
  ],
});
