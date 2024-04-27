import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";
import { BufReader } from "https://deno.land/std@0.79.0/io/bufio.ts";
import { basename, dirname, extname } from "https://deno.land/std@0.130.0/path/mod.ts";

// CSV ファイルの URL
const url = "https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre3h00_rct.csv";

// CSV ファイルを取得
const res = await fetch(url);
const raw = await res.arrayBuffer();
const decoder = new TextDecoder("shift_jis");
const rawString = decoder.decode(raw);


await Deno.writeTextFile("./data/all.csv", rawString);

const file = await Deno.open("./data/all.csv");

try {
  const data = BufReader.create(file);

  const result = await parse(data, {skipFirstRow: true});

  await Deno.writeTextFile("./data/all.json", JSON.stringify(result,null,2));

} finally {
  file.close();
}