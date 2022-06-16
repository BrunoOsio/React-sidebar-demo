import { useContext } from "react";
import { MainContext } from "../contexts";

export const useMenu = () => useContext(MainContext);