import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    title, 
    descriptionSEO,
    titleSEO,
    content[] {
      ...,
      link-> {
                  "slug": slug.current
            },
      linkTwo-> {
                  "slug": slug.current
            },
    }
  }
`;
export const headerQuery = groq`
  *[_type == "header"][0]{
    logo,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title,
      _id
    },
    social[],
  }
`;
export const footerQuery = groq`
  *[_type == "footer"][0]{
    copyright,
    number,
    email,
  }
`;

export const notFoundQuery = groq`
  *[_type == "notFound"][0] {
    title,
    description,
    descriptionSEO,
    titleSEO,
}
`;
