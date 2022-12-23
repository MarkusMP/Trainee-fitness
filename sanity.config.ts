import { visionTool } from "@sanity/vision";
import { previewDocumentNode } from "plugins/previewPane";
import { productionUrl } from "plugins/productionUrl";
import { pageStructure, singletonPlugin } from "plugins/settings";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "./lib/sanity.api";
import { media, mediaAssetSource } from "sanity-plugin-media";
import home from "schemas/singletons/home";
import header from "schemas/singletons/header";
import links from "schemas/objects/links";
import footer from "schemas/singletons/footer";
import hero from "schemas/sections/hero";
import feature from "schemas/sections/feature";
import featureItem from "schemas/objects/featureItem";
import about from "schemas/sections/about";
import aboutItem from "schemas/objects/aboutItem";
import classes from "schemas/sections/classes";
import classesItem from "schemas/objects/classesItem";
import schedule from "schemas/sections/schedule";
import scheduleList from "schemas/objects/scheduleList";
import scheduleListItem from "schemas/objects/scheduleListItem";
import contact from "schemas/sections/contact";
import notFound from "schemas/singletons/notFound";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [home.name];

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId: projectId || "",
  dataset: dataset || "production",
  title,
  plugins: [
    deskTool({
      structure: pageStructure([home, header, footer, notFound]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    media(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
  },
  schema: {
    types: [
      // Singletons
      home,
      header,
      footer,
      notFound,
      // Documents
      // Objects
      links,
      featureItem,
      aboutItem,
      classesItem,
      scheduleList,
      scheduleListItem,
      // sections
      hero,
      feature,
      about,
      classes,
      schedule,
      contact,
    ],
  },
});
