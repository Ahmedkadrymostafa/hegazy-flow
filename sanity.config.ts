import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from '@sanity/vision'

const config = defineConfig({
    name: "default",
    projectId: "r7q2ct86",
    dataset: "production",
    title: "hegazy flows",
    apiVersion: "2024-06-27",
    basePath: "/ar/admin",
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas }
})
export default config;
