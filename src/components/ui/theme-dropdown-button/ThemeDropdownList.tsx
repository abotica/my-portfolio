"use client"
import {themes} from "@/app/config"
import { useTheme } from "@/lib/hooks/useTheme";
import { capitalizeEachWord } from "@/lib/utils/capitalizeEachWord"

function ThemeDropdownList() {
    const {theme, setTheme} = useTheme();

	return (

        // Use TS for tabIndex?
		<ul
			tabIndex={-1}
			className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm shadow-base-content/90 mt-6">
			
            {themes.map((theme, i) => (
                <li key={i} onClick={() => setTheme(theme)}><a>{capitalizeEachWord(theme)}</a></li>
            ) )}
		</ul>
	)
}

export default ThemeDropdownList
