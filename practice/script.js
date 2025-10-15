var globalVar = "I am global";

function scopeExample() {
  var localVar = "I am Local";

  if (true) {
    var blockVar = " I am block scoper with var";
    let blockLet = " i am block scoped with let";
    const blockConst = "I am block scoper with const";
  }

  console.log({ globalVar: globalVar });
  console.log({ localVar: localVar });
  console.log({ blokVar: blockVar });
}

scopeExample();
