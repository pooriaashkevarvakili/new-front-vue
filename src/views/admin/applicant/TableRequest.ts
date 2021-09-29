/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the  درخواست استخدام ts جدول Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
/**
 * @param
 * @example
 *
 */
import DropDownInfomation from "./DropDownInformation.vue";
import DropDownMore from "./DropDownMore.vue";
import { defineComponent } from "vue";
import { DataItem } from "./applicationTs/DataItem";
import { data } from "./TableRequestOne";
import { columns } from "./TableRequestOne";
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
  components: { DropDownMore, DropDownInfomation },
  setup() {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run table Requests applicant of examples
     * @public this is a public method
     * @alpha دیتاهای  جدول  در درخواست استخدام
     */
    return {
      data,
      columns,
      rowSelection,
    };
  },
});
