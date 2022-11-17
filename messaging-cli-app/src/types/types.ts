export type clientCmdParams = {
    host?: string;
    port: number;
    username: string;
}

export type hostCmdParams = {
    port: number;
    username: string;
}

export type messageParams = {
    user: string;
    text: string;
}

export interface UserParams {
    username: string;
    socket: any;
}

export interface ClientParams extends UserParams {
    host: string | undefined,
    port: number;
}

export interface HostParams extends UserParams {
    port: number;
}
