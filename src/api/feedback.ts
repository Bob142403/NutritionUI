import { request } from "./fetch/request";

const baseURL = "https://nutritionback-lsmy.onrender.com/feedback";

export const feedbackApi = {
  insert: async (feedback: { formId: string | undefined; feedback: string }) =>
    await request(baseURL + "/insert", {
      method: "POST",
      body: JSON.stringify(feedback),
    }),
};
