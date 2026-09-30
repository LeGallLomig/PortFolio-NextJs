import type { ParcoursItem } from "@/data/parcours";

export default function TimeLineItem({item}: {item: ParcoursItem}) {
    return (
        <li className="relative border border-slate-700 pb-10 pl-6 last:pb-0">
            <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-sky-400"/>
            <p className="text-sm text-slate-400"> {item.periode} </p>
            <h3 className="text-lg font-semibold"> {item.titre} </h3>
            <p className="text-sm text-sky-400">{item.lieu}</p>
            <p className="mt-2 text-slate-300">{item.description}</p>
        </li>
    );
}