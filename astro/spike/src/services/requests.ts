export const IsAuthorized = () => {
  return (
    import.meta.env.BASIC_AUTH_USERNAME != null &&
    import.meta.env.BASIC_AUTH_PASSWORD != null
  );
};

export const BasicAuthRequest = async (url: string) => {
  return await fetch(url, {
    headers: new Headers({
      Authorization: `Basic ${btoa(
        `${import.meta.env.BASIC_AUTH_USERNAME}:${
          import.meta.env.BASIC_AUTH_PASSWORD
        }`
      )}`,
    }),
  });
};
