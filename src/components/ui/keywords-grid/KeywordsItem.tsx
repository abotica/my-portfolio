import { Keyword } from "@/app/config";

function KeywordsItem({keyword, itemIndex}: {keyword: Keyword, itemIndex: number}) {

    return (
        // Find the right color palette
        <div className='btn border-radius-theme m-0.5 flex shrink grow text-2xl' style={{backgroundColor: `${keyword.backgroundColor}`, color: `${keyword.contentColor}`}}>
            {keyword.value}
        </div>
    );
}

export default KeywordsItem;