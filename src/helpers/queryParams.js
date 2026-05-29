export function getQueryParams(){

  const params =
    new URLSearchParams(window.location.search);

  return {

    status: params.get("status"),

    search: params.get("search"),

    user: params.get("user")
  };
}