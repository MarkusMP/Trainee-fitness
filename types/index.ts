export interface Image {
  _type: string;
  alt?: string;
  asset: {
    _ref: string;
    _types: string;
  };
}

export interface MenuItem {
  _type: string;
  slug?: string;
  title?: string;
  _id?: string;
}

export interface HomePagePayload {
  titleSEO?: string;
  descriptionSEO?: string;
  title?: string;
  ogImage?: Image;
  content?: any[];
}

export interface HeaderPayload {
  menuItems?: MenuItem[];
  social?: socialItem[];
  logo?: string;
}

export interface FooterPayload {
  email?: string;
  copyright?: string;
  number?: string;
}

export interface socialItem {
  _key?: string;
  media?: string;
  url?: string;
}

export interface HeroPayload {
  image?: Image;
  title?: string;
  description?: string;
  btnText?: string;
  btnTextTwo?: string;
  link?: { slug?: string };
  linkTwo: { slug?: string };
}

export interface FeaturePayload {
  title?: string;
  description?: string;
  btnText?: string;
  titleTwo?: string;
  list?: FeatureItem[];
}

export interface FeatureItem {
  title?: string;
  description?: string;
  _key?: string;
}

export interface AboutPayload {
  title?: string;
  description?: string;
  list?: AboutItem[];
}

export interface AboutItem {
  name?: string;
  description?: string;
  _key?: string;
  image?: Image;
  social?: socialItem[];
}

export interface classesPayload {
  title?: string;
  description?: string;
  list?: ClassesItem[];
}

export interface ClassesItem {
  title?: string;
  subTitle?: string;
  description?: string;
  price?: string;
  _key?: string;
  image?: Image;
}

export interface SchedulePayload {
  title?: string;
  description?: string;
  list?: ScheduleList[];
}

export interface ScheduleList {
  title?: string;
  _key?: string;
  list?: ScheduleListItem[];
}

export interface ScheduleListItem {
  title?: string;
  _key?: string;
  description?: string;
}

export interface contactPayload {
  title?: string;
  btnText?: string;
  titleTwo?: string;
  locationName?: string;
  locationUrl?: string;
}

export interface NotFoundPayload {
  title?: string;
  description?: string;
  titleSEO?: string;
  descriptionSEO?: string;
}
