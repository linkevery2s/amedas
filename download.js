import { CSV } from "https://js.sabae.cc/CSV.js";
import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";
import { BufReader } from "https://deno.land/std@0.79.0/io/bufio.ts";
import { basename, dirname, extname } from "https://deno.land/std@0.130.0/path/mod.ts";

const data = await CSV.fetch("https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre3h00_rct.csv");

await Deno.writeTextFile("./data/all.csv", CSV.encode(data));


const file = await Deno.open("./data/all.csv");

try {
  const data = BufReader.create(file);

  const result = await parse(data, {skipFirstRow: true});

  await Deno.writeTextFile("./data/all.json", JSON.stringify(result,null,2));

} finally {
  file.close();
}