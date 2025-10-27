import { Keywords } from "@/app/config";
import KeywordsItem from "./KeywordsItem";

function KeywordsGrid({keywords}: {keywords: Keywords}) {
    return (
        <div className="flex flex-wrap">
            {keywords.map((keyword, i) => (
                <KeywordsItem key={i} keyword={keyword} itemIndex={i}/>
            ))}
        </div>
    );
}

export default KeywordsGrid;