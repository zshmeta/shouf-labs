import { useContext } from "react";
import { SelectedComponentContext } from "../components/SelectedComponent";


export function useCurrentComponent() {
  return useContext(SelectedComponentContext);
}
