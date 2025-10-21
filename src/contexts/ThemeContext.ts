import { Theme } from "@/app/config";
import { createContext, Dispatch, SetStateAction } from "react";

type TContext = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<TContext | undefined>(undefined);

export default ThemeContext;