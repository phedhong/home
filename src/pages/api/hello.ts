import type { APIContext, APIRoute } from "astro";


const deleteResource = async (str: string) => { console.log(str)}
const addResource = async (str: string) => { console.log(str)}
const listResources = async (str: string) => { console.log(str)}


export const DEL :APIRoute = async ({request} : APIContext) => {
  const title = new URL(request.url).searchParams.get("title");
  if (!title) return new Response(null, { status: 400});

  await deleteResource(title);
  return new Response(null, { status: 204});

}

export const GET :APIRoute = async ({request}) => {
  
  console.log(request)
  
  return new Response(
    JSON.stringify({  body: "Post Successful!" }),
    { status: 200 }
  );
}


export const POST :APIRoute = async ({request}) => {

    try {

      await addResource(request);

    } catch (error) {
      console.error(error)
    }
  
    return new Response(
      JSON.stringify({
        body: "Post Successful!"
      }),
      { status: 200 }
    );
  };