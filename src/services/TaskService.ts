import { addDays, startOfDay } from "date-fns";

const tasks = [
    {
        id: 'taskId1',
        description: 'ליצור יכולת ליצור משימות חדשות לפי תאריך',
        timestamp: startOfDay(new Date()).getTime()
    },
    {
        id: 'taskId2',
        description: 'לעשות את האתר יותר צבעוני (טיפה)',
        timestamp: startOfDay(new Date()).getTime()
    },
    {
        id: 'taskId3',
        description: 'לחשוב מה צריך שיהיה בכל משימה',
        timestamp:startOfDay(addDays(new Date(), 1)).getTime()
    },
]

type GetTasksQuery = {
    timestamp?: number;
}

const getTasks = (query: GetTasksQuery) => {
    const { timestamp } = query;

    return tasks.filter(task => task.timestamp === timestamp);
}

export const TaskService = {
    getTasks
}