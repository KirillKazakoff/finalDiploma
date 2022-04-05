export const getFullState = (params: any, state: any) => {
    const fullState = params ? { ...state, ...params } : state;
    return fullState;
};
