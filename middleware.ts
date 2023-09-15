export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dasdhboard",
    "/INSERT_MAIN_PATH_HERE/:ALL_SUBPATHS_ARE_PROTECTED",
  ],
};
