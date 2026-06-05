import Sidebar from "@/components/Sidebar";
import { getSession } from "@/utils";
import { homeController } from "@/controllers/home.controller";

export default function reserbas(){
    const user = getSession();

  setTimeout(() => {
    homeController();
  });

  return`
  
  `
}