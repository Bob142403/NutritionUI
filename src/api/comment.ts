import { CommentType } from "../types/Comment";
import { request } from "./fetch/request";

const baseURL = "http://localhost:5001/comment";

export const commentApi = {
  // insert: async (category: any) =>
  //   await request(baseURL + "/insert", {
  //     method: "POST",
  //     body: JSON.stringify(category),
  //   }),

  async getComments(): Promise<CommentType[]> {
    return (await request(baseURL + `/getAll`).then((res) => res.json()))
      .comments;
  },
};
