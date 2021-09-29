/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the فرم دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
export interface FormBasicInformation {
  /**
   * determines how the warinig will be displayed
   * @remarks
   * see {@link warningStyle|the warningStyle enum} for more details
   
   */
  id: string;
  numberLetter: string;
  letterDiscription: string;
  letterDate: string;
  informationSend: string;
}
