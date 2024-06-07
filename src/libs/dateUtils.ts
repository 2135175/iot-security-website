import moment, { MomentInput } from "moment";

export function formatDate(date: MomentInput) {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}
