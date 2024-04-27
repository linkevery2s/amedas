import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";
import { BufReader } from "https://deno.land/std@0.79.0/io/bufio.ts";
import { basename, dirname, extname } from "https://deno.land/std@0.130.0/path/mod.ts";

// CSV ファイルの URL
const url = "https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre1h00_rct.csv";

// CSV ファイルを取得
const res = await fetch(url);
const raw = await res.arrayBuffer();
const decoder = new TextDecoder("shift_jis");
const rawString = decoder.decode(raw);

await Deno.writeTextFile("./data/1h.csv", rawString);

const file = await Deno.open("./data/1h.csv");

try {
  const data = BufReader.create(file);

  const result = await parse(data, { skipFirstRow: true });

  await Deno.writeTextFile("./data/1h.json", JSON.stringify(result, null, 2));

} finally {
  file.close();
}

// CSV ファイルの URL
const url2 = "https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre3h00_rct.csv";

// CSV ファイルを取得
const res2 = await fetch(url2);
const raw2 = await res2.arrayBuffer();
const decoder2 = new TextDecoder("shift_jis");
const rawString2 = decoder2.decode(raw2);

await Deno.writeTextFile("./data/3h.csv", rawString2);

const file2 = await Deno.open("./data/3h.csv");

try {
  const data2 = BufReader.create(file2);

  const result2 = await parse(data2, { skipFirstRow: true });

  await Deno.writeTextFile("./data/3h.json", JSON.stringify(result2, null, 2));

} finally {
  file2.close();
}


// CSV ファイルの URL
const url3 = "https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre6h00_rct.csv";

// CSV ファイルを取得
const res3 = await fetch(url3);
const raw3 = await res3.arrayBuffer();
const decoder3 = new TextDecoder("shift_jis");
const rawString3 = decoder3.decode(raw3);

await Deno.writeTextFile("./data/6h.csv", rawString3);

const file3 = await Deno.open("./data/6h.csv");

try {
  const data3 = BufReader.create(file3);

  const result3 = await parse(data3, { skipFirstRow: true });

  await Deno.writeTextFile("./data/6h.json", JSON.stringify(result3, null, 2));

} finally {
  file3.close();
}


// CSV ファイルの URL
const url4 = "https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre12h00_rct.csv";

// CSV ファイルを取得
const res4 = await fetch(url4);
const raw4 = await res4.arrayBuffer();
const decoder4 = new TextDecoder("shift_jis");
const rawString4 = decoder4.decode(raw4);

await Deno.writeTextFile("./data/12h.csv", rawString4);

const file4 = await Deno.open("./data/12h.csv");

try {
  const data4 = BufReader.create(file4);

  const result4 = await parse(data4, { skipFirstRow: true });

  await Deno.writeTextFile("./data/12h.json", JSON.stringify(result4, null, 2));

} finally {
  file4.close();
}


// CSV ファイルの URL
const url5 = "https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre24h00_rct.csv";

// CSV ファイルを取得
const res5 = await fetch(url5);
const raw5 = await res5.arrayBuffer();
const decoder5 = new TextDecoder("shift_jis");
const rawString5 = decoder5.decode(raw5);

await Deno.writeTextFile("./data/24h.csv", rawString5);

const file5 = await Deno.open("./data/24h.csv");

try {
  const data5 = BufReader.create(file5);

  const result5 = await parse(data5, { skipFirstRow: true });

  await Deno.writeTextFile("./data/24h.json", JSON.stringify(result5, null, 2));

} finally {
  file5.close();
}

// last update
let dt = new Date();

let ts = dt.getTime();

let ts_after = ts + (1000 * 60 * 60 * 9);

let date = new Date(ts_after);

console.log(date);

const year = date.getFullYear();

const month = date.getMonth() + 1;

const day = date.getDate();

const hour = date.getHours();

const minute = date.getMinutes();

const now_day = year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分";

const write = Deno.writeTextFile("./data/lastupdate.json", '[{"lastupdate":' + '"' + now_day + '"}]');