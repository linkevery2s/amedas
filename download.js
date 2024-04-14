import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";

const res = await fetch("https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre3h00_rct.csv");
const data = await res.text();

const result = await parse(data);

await Deno.writeTextFile("./data/all.json", JSON.stringify(result));