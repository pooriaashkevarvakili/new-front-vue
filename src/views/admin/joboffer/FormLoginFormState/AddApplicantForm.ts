/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the تایپ های فرم ها Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
export interface AddApplicantForm {
  /**
   * determines how the warinig will be displayed
   * @remarks
   * see {@link warningStyle|the warningStyle enum} for more details
   
   */
  age: string;
  skillForm: string;
  email: string;
  mobile: string;
  description: string;
}
