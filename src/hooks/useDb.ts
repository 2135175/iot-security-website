import sqlite3 from "sqlite3";

import {
  ActionOrigin,
  EventActionType,
  Event as ModuleEvent,
  eventFromRow,
} from "./useEvents";
import moment from "moment";

export const db = new sqlite3.Database("./db/data.db", (err: any) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Connected to DB");
}).run(
  `CREATE TABLE IF NOT EXISTS events (
    origin TEXT,
    action TEXT,
    timestamp INTEGER
  )`
);

export async function getRowCount(): Promise<null | number> {
  return await new Promise((resolve) => {
    db.get("SELECT count(1) from events", [], (err: any, row: any) => {
      if (err) {
        console.error(err);
        resolve(null);
      }

      resolve(row["count(1)"]);
    });
  });
}

export async function getEventsForPage(
  index: number,
  entriesPerPage: number,
  order: "ASC" | "DESC"
): Promise<ModuleEvent[]> {
  const offset = index * entriesPerPage;
  let resultRows: ModuleEvent[] = [];

  await new Promise((resolve) => {
    db.all(
      `SELECT origin O, action A, timestamp T from events ORDER BY timestamp ${order} LIMIT ${entriesPerPage} OFFSET ${offset}`,
      [],
      (err: any, rows: any) => {
        if (err) {
          console.error(err);
          resolve(null);
          return;
        }

        rows.forEach((row: any) => {
          resultRows.push(eventFromRow(row.O, row.A, row.T));
        });
        resolve(null);
      }
    );
  });

  return resultRows;
}

export async function insertEventIntoDb(
  origin: ActionOrigin,
  action: EventActionType
) {
  let now = moment.now();

  await new Promise((resolve) => {
    db.run(
      "INSERT INTO events(origin, action, timestamp) VALUES(?, ?, ?)",
      [origin, action, now],
      (err: any) => {
        if (err) {
          console.error(err);
          resolve(null);
          return;
        }

        console.log("Inserted event into db", [origin, action, now]);
        resolve(null);
      }
    );
  });
}
