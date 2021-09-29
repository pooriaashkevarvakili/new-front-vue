import {Notify} from "@/store/interface/notify";


async function getLastNotify() {
    return <Array<Notify>>[
        {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'red',
            icon: 'i-bug',
            created_at: '5 خرداد 1399',
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'green',
            icon: 'i-email-down',
            created_at: '5 خرداد 1399',
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'blue',
            icon: 'i-game-ps',
            created_at: '5 خرداد 1399',
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'green',
            icon: 'i-phone-call',
            created_at: '5 خرداد 1399',
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'green',
            icon: 'i-protect',
            created_at: '5 خرداد 1399',
            body: 'لورم ایپسون نوشته ای است',
        },
    ];
}

export {getLastNotify}
