export const getResponse = (statuscode, responseObj) => {
  const res = {
    isError: false,
    data: null,
  };
  if (statuscode == 200) {
    res.isError = false;
    res.data = responseObj;
  } else if (statuscode == 400) {
    res.isError = true;
    res.data = 'There is some authentication error';
  }
  return res;
};
