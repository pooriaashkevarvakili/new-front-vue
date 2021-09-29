/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/05-9:34
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the جدول ارشیو رزومه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
/**
 * @param
 * @example
 *
 */
import ResumeTableDropdown from "./ResumeTableDropdown.vue";
import { defineComponent } from "vue";
import { DataItem } from "./ts/DataITem";
import { data } from "./ResumeTableOne";
import { columns } from "./ResumeTableOne";
/**
 * Gets called when the user clicks on the button
 *
 * @param {SyntheticEvent} even the react `SyntheticEvent`
 * @param {String} run table resume of examples
 * @public this is a public method
 * @alpha  محتویات جدول ارشیورزومه
 */
const rowSelection = {
  onChange: (
    selectedRowKeys: (string | number)[],
    selectedRows: DataItem[]
  ) => {
    console.log(
      `selectedRowKeys:${selectedRowKeys},'selectedRows'`,
      selectedRows
    );
  },
  onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (
    selected: boolean,
    selectedRows: DataItem[],
    changeRows: DataItem[]
  ) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export default defineComponent({
  name: "tableRequestStatus",
  components: { ResumeTableDropdown },
  setup() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
});
