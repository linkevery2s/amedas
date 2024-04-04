import { download, Destination } from "https://deno.land/x/download/mod.ts";

const url = 'https://www.data.jma.go.jp/stats/data/mdrr/pre_rct/alltable/pre3h00_rct.csv';

try {
  const destination: Destination = {
    file: 'data.csv',
    dir: './'
  }

  const fileObj = await download(url, destination);
} catch (err) {
  console.log(err)
}
