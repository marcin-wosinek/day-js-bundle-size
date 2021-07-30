import dayjs from "dayjs";

console.log("Yesterday was", dayjs().subtract(1, "day").toDate());
