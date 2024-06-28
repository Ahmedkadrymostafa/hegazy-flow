import { Study } from "@/types/Study";
import { Testi } from "@/types/Testi";
import { createClient, groq } from "next-sanity";

export async function getStudies(): Promise<Study[]> {
    const client = createClient({
    projectId: "r7q2ct86",
    dataset: "production",
    apiVersion: "2024-06-27",
    useCdn: true,
    })

    return client.fetch(
        groq`*[_type == 'studies']{
            _id,
            heading,
            "slug": slug.current,
            title,
            "image": image.asset->url,
            content
        }`
    )
}
export async function getTestimonials(): Promise<Testi[]> {
    const client = createClient({
    projectId: "r7q2ct86",
    dataset: "production",
    apiVersion: "2024-06-27",
    useCdn: true,
    })

    return client.fetch(
        groq`*[_type == 'testi']{
            _id,
            "image": image.asset->url,
        }`
    )
}