import queryString from 'query-string';

export const sendRequest = async <T>(props: IRequest) => {
    const {
        url: initialUrl, // Đổi tên biến nếu bạn cần thay đổi sau này
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {}
    } = props;

    let url = initialUrl; // Đổi sang let nếu có sự thay đổi giá trị url

    const options: Partial<RequestInit> = {
        method: method,
        headers: new Headers({ 'content-type': 'application/json', ...headers }),
        body: body ? JSON.stringify(body) : null,
        ...(nextOption && typeof nextOption === 'object' ? nextOption : {})
    };
    console.log("Sending request with body:", options.body); // Log để kiểm tra JSON.stringify
    if (useCredentials) options.credentials = "include";

    if (queryParams) {
        url = `${url}?${queryString.stringify(queryParams)}`;
    }

    return fetch(url, options).then(res => {
        if (res.ok) {
            return (res.json() as T) ;
        } else {
            return res.json().then(function (json) {
                return {
                    statusCode: res.status,
                    message: json?.message ?? "",
                    error: json?.error ?? ""
                } as T;
            });
        }
    });
};

export const sendRequestFile = async <T>(props: IRequest) => {
    const {
        url: initialUrl, // Đổi tên biến nếu bạn cần thay đổi sau này
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {}
    } = props;

    let url = initialUrl; // Đổi sang let nếu có sự thay đổi giá trị url

    const options: Partial<RequestInit> = {
        method: method,
        headers: new Headers({ 'content-type': 'application/json', ...headers }),
        body: body && Object.keys(body).length > 0 ? JSON.stringify(body) : null, // Chỉ stringify nếu body có dữ liệu
        ...(nextOption && typeof nextOption === 'object' ? nextOption : {})

      };

    if (useCredentials) options.credentials = "include";

    if (queryParams) {
        url = `${url}?${queryString.stringify(queryParams)}`;
    }

    return fetch(url, options).then(res => {
        if (res.ok) {
            return res.json() as T;
        } else {
            return res.json().then(function (json) {
                return {
                    statusCode: res.status,
                    message: json?.message ?? "",
                    error: json?.error ?? ""
                } as T;
            });
        }
    });
};

