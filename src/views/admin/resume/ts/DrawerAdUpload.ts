/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the drawer add upload resume افزدن متقاضی صفحه دوم Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
export interface FileItem {
  /**
   * determines how the warinig will be displayed
   * @remarks
   * see {@link warningStyle|the warningStyle enum} for more details
   
   */
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}
export interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
