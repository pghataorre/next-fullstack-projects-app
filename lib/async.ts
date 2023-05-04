import { resolve } from "path/posix"

export const delay = (time) => new Promise(() => {
  setTimeout(() => resolve(), time);
})