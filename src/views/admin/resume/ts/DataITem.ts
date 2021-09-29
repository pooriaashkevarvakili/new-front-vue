/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/06/21-9:41
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the ِDataItem resume applicant request job افزودن متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
export interface DataItem {
  /**
   * determines how the warinig will be displayed
   * @remarks
   * see {@link warningStyle|the warningStyle enum} for more details
   
   */
  key: number;
  ApplicationNumber: string;
  jobtitle: string | number;
  applicant: string;
  children?: DataItem[];
}
