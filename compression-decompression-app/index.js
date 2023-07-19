import zlib from "zlib";
import fs from "fs";
const compressFile = (file) => {
  if (!fs.existsSync(file)) {
    console.error(`${file} does not exists`);
    return process.exit(0);
  }

  fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file + ".gz"));
};

const decompressFile = (file) => {
  if (!fs.existsSync(file)) {
    console.error(`${file} does not exists`);
    return process.exit(0);
  }

  fs.createReadStream(file)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(file.replace(/\.gz/, "")));
};
//compressFile("input.txt");
decompressFile("input.txt.gz");
