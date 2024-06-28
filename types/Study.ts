import { PortableTextBlock } from "sanity";

export type Study = {
    _id?: string;
    heading: string;
    slug?: string;
    title: string;
    image: string;
    content?: PortableTextBlock[];
}