import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";
import encoding from 'https://cdn.skypack.dev/encoding-japanese';
import { download, Destination } from "https://deno.land/x/download/mod.ts";

const url = 'https://www.data.jma.go.jp/obd/stats/data/mdrr/pre_rct/alltable/pre24h00_rct.csv';

try {
  const destination: Destination = {
    file: 'download.csv',
    dir: './data'
  }

  const fileObj = await download(url, destination);

} catch (err) {
  console.log(err)
}


const bytes = await Deno.readFile("data/download.csv");
const decoder = new TextDecoder("shift-jis");
const str = decoder.decode(bytes);

const result = await parse(str, {skipFirstRow: true});

await Deno.writeTextFile("data/download.json", JSON.stringify(result));

