var Link = {
  setColor:function(color){
    //   var category = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < category.length) {
    //     category[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color', color);
}
}
var Body = {
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
}

function nightdayhandler(self){
  if (self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

  Link.setColor('white');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

  Link.setColor('black');
  }

}
