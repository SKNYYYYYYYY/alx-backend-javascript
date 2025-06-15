import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  uploadPhoto().then((resp) => { const {statusCode, body} = resp; });
  createUser().then((resp) =>{ const {firstName, lastName} = resp; });
}
