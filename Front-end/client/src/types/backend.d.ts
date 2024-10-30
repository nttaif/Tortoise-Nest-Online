export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: unknown };  // Use `unknown` instead of `any` for stricter type-checking
        queryParams?: Record<string, string | number | boolean>;  // Define `queryParams` more precisely
        useCredentials?: boolean;
        headers?: Record<string, string>;  // Use a string-to-string mapping for headers
        nextOption?: unknown;  // Replace `any` with `unknown` if you don't have a specific type for `nextOption`
    }

    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IModelPaginate<T> {
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        },
        result: T[]
    }
    interface ILogin{
        user: {
            email: string;
            _id: string;
            name: string;
            role:string;
            image:string;
        },
        access_token: string;
    }
}
