import {Task} from "@/store/interface/task";


async function getLastTasks() {
    return <Array<Task>>[
        {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'red',
            created_at: '5 خرداد 1399',
            tags: ['کار جدید'],
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'green',
            created_at: '5 خرداد 1399',
            tags: ['کار جدید'],
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'blue',
            created_at: '5 خرداد 1399',
            tags: ['کار جدید'],
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'green',
            created_at: '5 خرداد 1399',
            tags: ['کار جدید'],
            body: 'لورم ایپسون نوشته ای است',
        }, {
            id: 1,
            title: 'دیزاین صفحه داشبورد',
            color: 'green',
            created_at: '5 خرداد 1399',
            tags: ['کار جدید'],
            body: 'لورم ایپسون نوشته ای است',
        },
    ];
}

export {getLastTasks}
