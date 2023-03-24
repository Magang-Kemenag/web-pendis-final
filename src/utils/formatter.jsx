import moment from "moment/moment";

export const formatDateEn = (str) => {
  moment.locale("en");
  return moment(str).format("dddd DD MMMM YYYY");
};
