import { insertEventIntoDb } from "@/hooks/useDb";
import {
  eventFromRow,
  fromActionOriginString,
  fromEventActionString,
} from "@/hooks/useEvents";
import { APIEvent } from "node_modules/@solidjs/start/dist/server";

export async function POST({ params, request }: APIEvent) {
  if (
    params.type !== "AlarmTriggered" &&
    params.type !== "Arm" &&
    params.type !== "Disarm" &&
    params.type !== "Lock" &&
    params.type !== "Unlock"
  )
    return new Response(
      JSON.stringify({
        message:
          "`type` query param must be `Alarm Triggered` `Arm`, `Disarm`, `Lock`, or `Unlock`",
      }),
      { status: 400, statusText: "Bad request" }
    );

  if (params.type === "AlarmTriggered") {
    params.type = "Alarm Triggered";
  }

  const data = await request.json();
  const origin = fromActionOriginString(data.origin);
  const actionType = fromEventActionString(params.type);

  await insertEventIntoDb(origin, actionType);

  return new Response("", { status: 201, statusText: "Created" });
}
