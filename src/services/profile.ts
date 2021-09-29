import {User} from "@/store/interface/user";


async function getTodayBirthday() {
    return <Array<User>>[
        {
            id: 1,
            name: 'مژگان رحیمی',
            position: 'برنامه نویس'
        }, {
            id: 1,
            name: 'سامان ابراهیمی',
            position: 'حسابدار',
        }
    ];
}

export {getTodayBirthday}
