function top1(a) {
    return a.find(x => a.indexOf(x) === a.lastIndexOf(x));
}

console.log(top1([1, 2, 2, 3, 4, 4]));



function top2(a, b) {
    return a.reduce((c, d) => c + d, 0) + b.reduce((c, d) => c + d, 0);
}
console.log(top2([1, 2], [3, 4]));





function top3(a) {
    return a.sort((b, c) =>
      a.filter(d => d === b).length - a.filter(d => d === c).length
    ).pop();
  }
  console.log(top3([1, 1, 2, 2, 2, 3]));
  





  function top4(a, b) {
    return a.filter(c => b.includes(c));
  }
  console.log(top4([1, 2, 3], [2, 3, 4]));
  
 




  function top5(a) {
    let b = a.length;
    return {
      positive: (a.filter(c => c > 0).length / b) * 100,
      negative: (a.filter(c => c < 0).length / b) * 100,
      zero: (a.filter(c => c === 0).length / b) * 100
    };
  }
  console.log(top5([1, -2, 0, 4, -5, 0])); 

  


  function top6(a) {
    return a.reduce((b, c) => (b.length > c.length ? b : c), "");
  }
  console.log(top6(["Ali", "Vali", "Abdulloh"]));

  




  function top8(a) {
    [a[0], a[a.length - 1]] = [a[a.length - 1], a[0]];
    return a;
  }
  console.log(top8([1, 2, 3, 4]));
  