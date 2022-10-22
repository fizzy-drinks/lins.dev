const get = <T>({
  url,
  query = {},
}: {
  url: string | URL;
  query?: Record<string, string>;
}): Promise<T> => {
  const urlObject = new URL(url);

  if (query) {
    const params = new URLSearchParams(query);
    urlObject.search = params.toString();
  }

  return fetch(urlObject).then((res) => res.json());
};

export default get;
