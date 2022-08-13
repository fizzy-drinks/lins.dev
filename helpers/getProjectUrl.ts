const getProjectUrl = (source: 'gh' | 'gl', projectId: string): string => {
  if (source === 'gh') {
    return `https://github.com/fizzy-drinks/${projectId}`;
  }

  return `https://gitlab.com/fizzydrinks/${projectId}`;
};

export default getProjectUrl;
