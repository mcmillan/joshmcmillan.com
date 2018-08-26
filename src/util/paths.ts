const blogNamespace = "/bllleeeerrrrghhhhh";

export const blogPath = (path?: string) => {
  if (!path) {
    return blogNamespace;
  }

  return `${blogNamespace}/${path}`;
};
