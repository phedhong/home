import { APIRoute } from "astro";

import { deleteResource, addResource, listResources } from "../../data/resources";

export const del :APIRoute = async ({request}) => {
  const title = new URL(request.url).searchParams.get("title");
  if (!title) return new Response(null, { status: 400});

  await deleteResource(title);
  return new Response(null, { status: 204});

}