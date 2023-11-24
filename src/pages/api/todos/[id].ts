import { APIContext, APIRoute } from "astro";

export const GET: APIRoute = ({params} : APIContext) => {

  const id = Number(params.id)

  return new Response(JSON.stringify({
      message: `${id}`
    })
  )
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