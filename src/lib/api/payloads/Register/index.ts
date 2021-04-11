export interface CheckCodeRes {
  grade: number;
  group: number;
  name: string;
  student_number: number;
  phone_number: string;
}

export interface RegisterManagement {
  id: string;
  password: string;
}

export interface RegisterReq extends RegisterManagement {
  code: string;
}
