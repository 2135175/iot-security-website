import { APIEvent } from "node_modules/@solidjs/start/dist/server";

export async function GET({ params }: APIEvent) {
  const pageNum = parseInt(params.page);
  if (params.sort !== "asc" && params.sort !== "des")
    return new Response(
      JSON.stringify({ message: "`sort` query param must be `asc` or `des`" }),
      { status: 400, statusText: "Bad request" }
    );
  if (pageNum < 1)
    return new Response(
      JSON.stringify({ message: "`page` number must be greater than 0" }),
      { status: 400, statusText: "Bad request" }
    );

  console.log(
    `Request to get page ${params.page} of event-logs sorted in ${params.sort} order`
  );

  let data: Event[] = []

  return new Response(JSON.stringify({data: data}), { status: 200, statusText: "Ok" });
}
