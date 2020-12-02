import { ResponseDefault } from "../";

export interface ResponseLogin extends ResponseDefault {
  access_token: string;
  student_uuid: string;
}
