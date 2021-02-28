import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const formatDate = (date) => {
  if (!date) return "";
  return dayjs(date).format("D MMM YYYY");
};
