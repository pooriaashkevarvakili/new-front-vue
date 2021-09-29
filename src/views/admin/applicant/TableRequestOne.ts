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
import { DataItem } from "./applicationTs/DataItem";
/**
 * Gets called when the user clicks on the button
 *
 * @param {SyntheticEvent} even the react `SyntheticEvent`
 * @param {String} run table Request applicant of examples
 * @public this is a public method
 * @alpha دیتاهای جدول در درخواست استخدام
 * @returns data tables
 */
export const columns = [
  {
    title: "شماره درخواست",
    dataIndex: "ApplicationNumber",
    key: "ApplicationNumber",
  },
  {
    title: "عنوان شغل",
    dataIndex: "jobtitle",
    key: "jobtitle",
    width: "12%",
  },
  {
    title: "متقاضیان",
    dataIndex: "applicant",
    width: "30",
    key: "applicant",
  },
  {
    title: "عمیات",
    dataIndex: "operation",
    width: "30",
    key: "operation",
    slots: { customRender: "operation" },
  },
];
export const data: DataItem[] = [
  {
    key: 1,
    ApplicationNumber: "995637",
    jobtitle: "برنامه نویس وب سایت",
    applicant: "10",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 2,
    ApplicationNumber: "987214",
    jobtitle: "فروشنده کت وشلوار",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 3,
    ApplicationNumber: "989810",
    jobtitle: "برنامه نویس اندروید",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 4,
    ApplicationNumber: "980455",
    jobtitle: "کارشناس حسابداری",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 5,
    ApplicationNumber: "989810",
    jobtitle: "مسئول انبار",
    applicant: "Pooria",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 6,
    ApplicationNumber: "987902",
    jobtitle: "کارشناس سئوومارکتینگ",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 7,
    ApplicationNumber: "98023",
    jobtitle: "برنامه نویس پایتون",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 8,
    ApplicationNumber: "984386",
    jobtitle: "کارشناس بازرگانی",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 9,
    ApplicationNumber: "987902",
    jobtitle: "کارشناس تست نرم افزار",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
  {
    key: 10,
    ApplicationNumber: "979832",
    jobtitle: "کارشناس بازرگانی",
    applicant: "new york",
    children: [
      {
        key: 11,
        ApplicationNumber: "john brown",
        jobtitle: 42,
        applicant: "new york",
      },
    ],
  },
];
