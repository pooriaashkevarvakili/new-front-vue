/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of interview محتوایات the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
export interface Interview {
  image: string;
  fname: string;
  lname: string;
  id: number;
  email: string;
  department_id: number;
  jobTitle_id: number;
  resume: boolean;
  senddate: string;
  color: string;
  age: number;
  mobile: number;
  jobskill_id: number;
  description: string;
}