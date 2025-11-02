import { Keyword } from "@/app/config";
import {React} from "@/components/ui/svgs"

function KeywordsItem({keyword, itemIndex}: {keyword: Keyword, itemIndex: number}) {

    return (
        // Find the right color palette
        <div className='flex flex-col justify-end items-center w-28 h-28 p-1 border-radius-theme text-md shadow-2xl shadow-base-content/10' style={{backgroundColor: `var(--color-${keyword.backgroundColor})`, color: `var(--color-${keyword.contentColor})`}}>
            <React />
            {keyword.value}
        </div>
    );
}

export default KeywordsItem;