type Params = {
    [key: string]: string | number;
};

function getUrl(params: Params, query: string) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach((param) => {
        const [key, value] = param;
        if (value || typeof value === 'number') {
            searchParams.append(key, value.toString());
        }
    });

    let url = query;
    if (searchParams) url += `?${searchParams.toString()}`;
    return url;
}

type GetCitiesParams = { name: string };
export function getCitiesUrl(params: GetCitiesParams) {
    const url = getUrl(params, 'cities');
    return url;
}

type GetRouteParams = { from_city_id: string; to_city_id: string };
export function getRoutesUrl(params: GetRouteParams) {
    const url = getUrl(params, '');
    return url;
}
