import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetch("https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre3h00_rct.csv");

await Deno.writeTextFile("./data/all.csv", CSV.encode(data));