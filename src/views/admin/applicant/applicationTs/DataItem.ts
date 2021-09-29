/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/06/21-9:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the data item table  Application manage by this .
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
