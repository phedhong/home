import { APIContext, APIRoute } from "astro";

// export const del :APIRoute = async ({request}) => {
//   const title = new URL(request.url).searchParams.get("title");
//   if (!title) return new Response(null, { status: 400});

//   await deleteResource(title);
//   return new Response(null, { status: 204});

// }

export const GET: APIRoute = (params: APIContext) => {

  console.log(params)


  return new Response(JSON.stringify({params}))

  // return new Response(JSON.stringify({
  //     message: "This was a GET!"
  //   })
  // )
}

export const POST: APIRoute = () => {
  return new Response(JSON.stringify({
      message: "This was a POST!"
    })
  )
}

export const DELETE: APIRoute = () => {
  return new Response(JSON.stringify({
      message: "This was a DELETE!"
    })
  )
}

export const ALL: APIRoute = () => {
  return new Response(JSON.stringify({
      message: `This was a All`
    })
  )
}