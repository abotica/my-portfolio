import { ChevronDown, ThemeIcon } from "../svgs"

import ThemeDropdownList from "./ThemeDropdownList"

function ThemeDropdownButton() {
	return (
		<div className="group dropdown dropdown-bottom dropdown-end">
			<div
				tabIndex={0}
				role="button"
				aria-label="Theme selection dropdown"
				className="btn btn-sm btn-ghost rounded-sm gap-1.5 px-1">
				<div className="border border-base-content/10 rounded-md">
					<ThemeIcon className="transition-transform duration-300 ease-in-out group-hover:rotate-90 size-5"/>
				</div>
				<ChevronDown className="hidden tablet:block"/>
			</div>
			<ThemeDropdownList />
		</div>
	)
}

export default ThemeDropdownButton
