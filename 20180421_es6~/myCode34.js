"use strict"

console.log("==============================");

try {
  sports();
  const result = Member;
} catch(e) {
  console.log(e);
}

class Meber {

}

// 호이스팅 안됨





const type = "Type";
class Sports {
  static ["get" + type](kind) {
    return kind ? "스포츠" : "음악";
  }

}
Sports[];



console.log("==============================");
