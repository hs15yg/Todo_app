export function getSession(){

  return JSON.parse(
    localStorage.getItem("user")
  );
}

export function logout(){

  localStorage.removeItem("user");

  window.location.hash = "#/";
}

export function protectRoute(){

  const user = getSession();

  if(!user){

    window.location.hash = "#/";
  }
}