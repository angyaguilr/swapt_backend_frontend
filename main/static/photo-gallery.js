const increment_product_detail_12 = (classname) => {
    var count = document.getElementsByClassName(classname);
    for (var i = 0; i < count.length; i++) {
      count[i].innerHTML++;
    }
  };
  const decrement_product_detail_12 = (classname) => {
    var count = document.getElementsByClassName(classname);
    for (var i = 0; i < count.length; i++) {
      if (count[i].innerHTML > 0) count[i].innerHTML--;
    }
  };
  
  //
  
  let slides = document.querySelectorAll(".slide-ana_product_detail_12 > div");
  let slideSayisi = slides.length;
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
  }
  let loop = 0 + 1000 * slideSayisi;
  
  function goNext() {
    loop++;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  }
  function goPrev() {
    loop--;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  }
  