import { APIEvent } from "node_modules/@solidjs/start/dist/server";

export const pageSize = 10;

export async function GET({ params }: APIEvent) {
  console.log(`Request to get log page size`);

  return new Response(JSON.stringify({ size: pageSize }), {
    status: 200,
    statusText: "Ok",
  });
}
