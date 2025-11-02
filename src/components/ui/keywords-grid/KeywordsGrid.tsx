import { Keywords } from "@/app/config";
import KeywordsItem from "./KeywordsItem";

function KeywordsGrid({keywords}: {keywords: Keywords}) {
    return (
        <div className="grid grid-cols-3 place-items-center gap-2">
            {keywords.map((keyword, i) => (
                <KeywordsItem key={i} keyword={keyword} itemIndex={i}/>
            ))}
        </div>
    );
}

export default KeywordsGrid;