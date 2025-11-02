import { LanguageIcon } from "../svgs";
import LanguageDropdownList from "./LanguageDropdownList";

function LanguageDropdownButton() {
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div
				tabIndex={0}
				role="button"
				className="btn btn-sm btn-ghost rounded-sm gap-1.5 px-1"
                aria-label="Language"
                title="Change Language">
				<div className="border border-base-content/10 rounded-md">
                    <LanguageIcon className="size-5 text-base-content/70"/>
				</div>
			</div>
            <LanguageDropdownList />
        </div>
    );
}

export default LanguageDropdownButton;