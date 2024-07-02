import { toast } from "react-toastify";

export const notify = (message, type) => {
  console.log("toast");
  toast[type](message);
};
export const API_URL = "http://localhost:8080";
