export const request = (url: string, options?: RequestInit) => {
  return fetch(url, {
    ...options,
    headers: options && options.headers ? {} : headerForDietData,
  });
};

export const headerForDietData = {
  Authorization: localStorage.getItem("token") || "",
  "Content-type": "application/json; charset=UTF-8",
};
