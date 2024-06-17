import { APIEvent } from "node_modules/@solidjs/start/dist/server";
import { pageSize } from "../page-size";
import { getEventsForPage, getRowCount } from "@/hooks/useDb";

export async function GET({ params }: APIEvent) {
  const pageNum = parseInt(params.page);
  if (params.sort !== "ASC" && params.sort !== "DESC")
    return new Response(
      JSON.stringify({ message: "`sort` query param must be `ASC` or `DESC`" }),
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

  let startIndex = pageNum - 1;

  let events = await getEventsForPage(startIndex, pageSize, params.sort);
  let rowCount = (await getRowCount()) ?? 0;

  let res = await new Promise((resolve) =>
    resolve({
      page: pageNum,
      pages: Math.ceil(rowCount / pageSize),
      rows: events.length,
      events: events,
    })
  );

  return res;
}
