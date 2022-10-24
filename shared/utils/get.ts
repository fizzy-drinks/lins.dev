const get = async <T>({
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

  const response = await fetch(urlObject);
  if (!response.ok) {
    throw new Error('Request failed with status ' + response.status);
  }

  return response.json();
};

export default get;
