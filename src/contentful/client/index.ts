import { config } from "@/config/config";
import { createClient } from "contentful";

export const contentfulClient = createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessTokens,
})
