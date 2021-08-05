import dayjs from "dayjs";

const today = dayjs(),
  quarterStart = dayjs().startOf("quarter"),
  diffDays = today.diff(quarterStart, "days");

console.log("Yesterday was", dayjs().subtract(1, "day").toDate());

console.log(
  "The quarter started on",
  quarterStart.format("YYYY-MM-DD"),
  "and today, it is",
  diffDays,
  "days since then"
);
