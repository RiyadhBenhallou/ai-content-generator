import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const authConfig = {
  providers: [github, google],
};
