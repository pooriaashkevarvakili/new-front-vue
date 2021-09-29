/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the dropdown img home joboffer Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { Moment } from "moment";
export interface DropDownImg {
  /**
   * determines how the warinig will be displayed
   * @remarks
   * see {@link warningStyle|the warningStyle enum} for more details
   
   */
  name: string;
  region: string | undefined;
  date1: Moment | undefined;
  delivery: boolean;
  type: string[];
  search: string;
  resource: string;
  desc: string;
}
