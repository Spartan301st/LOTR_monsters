type headersType = {
  method: string;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
};
export const getData = async <T>(
  url: string,
  headers: headersType
): Promise<T> => {
  const response = await fetch(url, headers);
  return await response.json();
};
