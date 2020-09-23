const SET_JSON = 'json/SET_JSON' as const;
const GET_JSON_SAGA = 'json/GET_JSON_SAGA' as const;

const setJson = (payload: any) => ({
  type: SET_JSON,
  payload,
});

const getJsonSaga = () => ({
  type: GET_JSON_SAGA,
});

export const jsonActionCreater = {
  setJson,
  getJsonSaga,
};

export const jsonAction = {
  SET_JSON,
  GET_JSON_SAGA,
};

type JsonAction = ReturnType<typeof setJson> | ReturnType<typeof getJsonSaga>;
export default JsonAction;
