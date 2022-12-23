import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "scheduleList",
  title: "Schedule List",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "scheduleListItem" }],
    }),
  ],
});
