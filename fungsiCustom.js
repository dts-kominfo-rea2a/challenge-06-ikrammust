// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallback) => {
  // read data1.json
  fs.readFile(file1, 'utf8', (err, rawData1) => {
    if(err) {throw err};

    // parsing data and get the last word
    const data1 = JSON.parse(rawData1);
    const finalData1 = getLastWord(data1.message);
    
    // read data2.json
    fs.readFile(file2, 'utf8', (err, rawData2) => {
      if(err) {throw err};

      // parsing data and get the last word
      const data2 = JSON.parse(rawData2);
      const finalData2 = getLastWord(data2[0].message);

      // read data3.json
      fs.readFile(file3, 'utf8', (err, rawData3) => {
        if(err) {throw err};

        // parsing data and get the last word
        const data3 = JSON.parse(rawData3);
        const finalData3 = getLastWord(data3[0].data.message);

        // callback with allData's
        fnCallback(err, [finalData1, finalData2, finalData3]);
      });

    });

  });

  function getLastWord(arrData) {
    // split words with space and make it new array.
    let lastWord = arrData.split(" ");

    // return the last word
    return lastWord[lastWord.length - 1];
  }

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
