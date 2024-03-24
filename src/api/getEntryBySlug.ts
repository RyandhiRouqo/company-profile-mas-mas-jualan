import { appConfig } from "@/app/utils/config";
import { ContentfulResponse } from "@/types/contentful.types";


const { accessToken, baseUrl, environmentId, spaceId } = appConfig;

export const getEntriBySlug = async (slug: string): Promise<ContentfulResponse> => {

    const res = await fetch(
        baseUrl +
        `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&fields.slug=${slug}`,
        {
            next: { revalidate: 10 }
        }

    );
    return res.json();
};