import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "scheduleListItem",
  title: "Schedule List",

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
  ],
});
