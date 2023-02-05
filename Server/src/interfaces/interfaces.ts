interface iUser {
    id?: string;
    username?: string;
    pwd?: string;
    email?: string;
}

interface iTask {
    id?: number;
    task?: string;
    user_id?: number;
}
export { iTask, iUser };
