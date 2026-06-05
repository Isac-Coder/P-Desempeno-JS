import  loginView from "@views/loginView";
import homeView from "@views/homeView";
import { isAuthenticated } from "@utils";

const routes = {
  "/": loginView,
  "/login": loginView,
  "/home": homeView,
  "/reservas": ""
};

const privateRoutes = ["/home"];

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");
  const path = window.location.pathname;

  if (privateRoutes.includes(path)) {
    const isAuthenticated = localStorage.getItem("user"); 

    if (!isAuthenticated) {
      history.replaceState({}, "", "/");
      app.innerHTML = loginView();
      return; 
    }
  }

  const view = routes[path] || loginView;
  app.innerHTML = view();
};

window.addEventListener("popstate", () => {
  router();
});


