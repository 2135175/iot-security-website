import { APIEvent } from "node_modules/@solidjs/start/dist/server";

export async function POST({ params, request }: APIEvent) {
  if (
    params.type !== "arm" &&
    params.type !== "disarm" &&
    params.type !== "lock" &&
    params.type !== "unlock"
  )
    return new Response(
      JSON.stringify({
        message:
          "`type` query param must be `arm`, `disarm`, `lock`, or `unlock`",
      }),
      { status: 400, statusText: "Bad request" }
    );

  const actionType = params.type;
  const data = await request.json();
  const origin = data.origin;

  console.log(`Added ${actionType} action from ${origin} origin`);
}
