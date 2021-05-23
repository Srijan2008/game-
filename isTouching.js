function isTouching(m1,f2) {

    if (m1.x-f2.x < f2.width/2 + m1.width/2 &&
      f2.x-m1.x < f2.width/2 + m1.width/2 &&
      m1.y-f2.y < f2.height/2 + m1.height/2 &&
      f2.y-m1.y < f2.height/2 + m1.height/2
   )   {
       
      return true;
  
  } else {
  
    return false;
  
  }
  
  }
  