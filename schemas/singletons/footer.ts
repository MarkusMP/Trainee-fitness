import { InsertBelowIcon } from "@sanity/icons";

import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  icon: InsertBelowIcon,

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
      name: "email",
      title: "Email",
    }),
    defineField({
      type: "string",
      name: "copyright",
      title: "Copyright Text",
    }),
    defineField({
      type: "string",
      name: "number",
      title: "Number",
    }),
  ],
});
