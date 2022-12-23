import "server-only";

import { apiVersion, dataset, projectId, useCdn } from "lib/sanity.api";
import {
  footerQuery,
  headerQuery,
  homePageQuery,
  notFoundQuery,
} from "lib/sanity.queries";
import { createClient } from "next-sanity";
import type {
  FooterPayload,
  HeaderPayload,
  HomePagePayload,
  NotFoundPayload,
} from "../types";

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null;
};

export async function getHomePage({
  token,
}: {
  token?: string;
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery);
}

export async function getHeader({
  token,
}: {
  token?: string;
}): Promise<HeaderPayload | undefined> {
  return await sanityClient(token)?.fetch(headerQuery);
}

export async function getFooter({
  token,
}: {
  token?: string;
}): Promise<FooterPayload | undefined> {
  return await sanityClient(token)?.fetch(footerQuery);
}

export async function getNotFoundPage({
  token,
}: {
  token?: string;
}): Promise<NotFoundPayload | undefined> {
  return await sanityClient(token)?.fetch(notFoundQuery);
}
