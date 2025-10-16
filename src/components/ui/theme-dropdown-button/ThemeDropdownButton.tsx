import { ChevronDown, ThemeDropdown } from "../svgs"

import ThemeDropdownList from "./ThemeDropdownList"

function ThemeDropdownButton() {
	return (
		<div className="group dropdown dropdown-bottom dropdown-end">
			<div
				tabIndex={0}
				role="button"
				className="btn btn-sm btn-ghost rounded-sm gap-1.5 px-1">
				<div className="border border-base-content/10 rounded-md">
					<ThemeDropdown className="transition-transform duration-300 ease-in-out group-hover:rotate-90 size-5"/>
				</div>
				{/* <ChevronDown /> */}
			</div>
			<ThemeDropdownList />
		</div>
	)
}

export default ThemeDropdownButton
