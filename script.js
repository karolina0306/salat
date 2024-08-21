const square = document.querySelector('.square1');
    const square9 = document.querySelector('.square9');
    const square2 = document.querySelector('.square2');
    const square10 = document.querySelector('.square10');
    document.addEventListener('DOMContentLoaded', function() {
const square3 = document.querySelector('.square3');
    const square11 = document.querySelector('.square11');
    const square4 = document.querySelector('.square4');
    const square12 = document.querySelector('.square12');
    const square5 = document.querySelector('.square5');
    const square13 = document.querySelector('.square13');
    const square6 = document.querySelector('.square6');
    const square14 = document.querySelector('.square14');
    const square7 = document.querySelector('.square7');
    const square15 = document.querySelector('.square15');
    const square8 = document.querySelector('.square8');
    const square16 = document.querySelector('.square16');
    let isMoved = false;
    let initialPosition = square.style.left; 
    let initialPosition2 = square2.style.left; 
    let initialPosition3 = square3.style.left; 
    let initialPosition4 = square4.style.left; 
    let initialPosition5 = square5.style.left; 
    let initialPosition6 = square6.style.left; 
    let initialPosition7 = square7.style.left; 
    let initialPosition8 = square8.style.left; 
  
    square.addEventListener('click', function() {
      if (isMoved) {
        square.style.left = initialPosition; 
      } else {
        console.log('Square1 moved to:', square.style.left);
      }
  
      isMoved = !isMoved; 
    });
    square9.addEventListener('click', function() {
        if (isMoved) {
          square9.style.left = initialPosition; 
        } else {
          console.log('Square9 moved to:', square9.style.left);
        }
    
        isMoved = !isMoved; 
      });

      square2.addEventListener('click', function() {
        if (isMoved) {
          square2.style.left = initialPosition2; 
        } else {
          console.log('Square2 moved to:', square2.style.right);
        }
    
        isMoved = !isMoved; 
      });
      square10.addEventListener('click', function() {
          if (isMoved) {
            square10.style.left = initialPosition2; 
          } else {
            console.log('Square10 moved to:', square10.style.right);
          }
      
          isMoved = !isMoved; 
        });

        square3.addEventListener('click', function() {
          if (isMoved) {
            square3.style.left = initialPosition3; 
          } else {
            console.log('Square3 moved to:', square3.style.right);
          }
      
          isMoved = !isMoved; 
        });
        square11.addEventListener('click', function() {
            if (isMoved) {
              square11.style.left = initialPosition3; 
            } else {
              console.log('Square11 moved to:', square11.style.right);
            }
        
            isMoved = !isMoved; 
          });

          square4.addEventListener('click', function() {
            if (isMoved) {
              square4.style.left = initialPosition4; 
            } else {
              console.log('Square3 moved to:', square4.style.right);
            }
        
            isMoved = !isMoved; 
          });
          square12.addEventListener('click', function() {
              if (isMoved) {
                square12.style.left = initialPosition4; 
              } else {
                console.log('Square11 moved to:', square12.style.right);
              }
          
              isMoved = !isMoved; 
            });

            square5.addEventListener('click', function() {
              if (isMoved) {
                square5.style.left = initialPosition5; 
              } else {
                console.log('Square3 moved to:', square5.style.right);
              }
          
              isMoved = !isMoved; 
            });
            square13.addEventListener('click', function() {
                if (isMoved) {
                  square13.style.left = initialPosition5; 
                } else {
                  console.log('Square11 moved to:', square13.style.right);
                }
            
                isMoved = !isMoved; 
              });

              square6.addEventListener('click', function() {
                if (isMoved) {
                  square6.style.left = initialPosition6; 
                } else {
                  console.log('Square3 moved to:', square5.style.right);
                }
            
                isMoved = !isMoved; 
              });
              square14.addEventListener('click', function() {
                  if (isMoved) {
                    square14.style.left = initialPosition6; 
                  } else {
                    console.log('Square11 moved to:', square13.style.right);
                  }
              
                  isMoved = !isMoved; 
                });

                square7.addEventListener('click', function() {
                  if (isMoved) {
                    square7.style.left = initialPosition7; 
                  } else {
                    console.log('Square3 moved to:', square5.style.right);
                  }
              
                  isMoved = !isMoved; 
                });
                square15.addEventListener('click', function() {
                    if (isMoved) {
                      square15.style.left = initialPosition7; 
                    } else {
                      console.log('Square11 moved to:', square13.style.right);
                    }
                
                    isMoved = !isMoved; 
                  });

                  square8.addEventListener('click', function() {
                    if (isMoved) {
                      square8.style.left = initialPosition8; 
                    } else {
                      console.log('Square3 moved to:', square5.style.right);
                    }
                
                    isMoved = !isMoved; 
                  });
                  square16.addEventListener('click', function() {
                      if (isMoved) {
                        square16.style.left = initialPosition8; 
                      } else {
                        console.log('Square11 moved to:', square13.style.right);
                      }
                  
                      isMoved = !isMoved; 
                    });
  
    document.querySelector('.Vegetarian salad').addEventListener('click', function() {
      if (isMoved) {
        square.style.left = '0px'; 
      } else {
        square.style.right = '50px'; 
      }

      if (isMoved) {
        square9.style.left = '0px'; 
      } else {
        square9.style.right = '50px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square.style.left);
    });

    document.querySelector('.Salad with seafood').addEventListener('click', function() {
      if (isMoved) {
        square2.style.left = '1020px'; 
      } else {
        square2.style.right = '0px'; 
      }

      if (isMoved) {
        square10.style.left = '1020px'; 
      } else {
        square10.style.right = '0px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square2.style.left);
    });

    document.querySelector('.Salad with fish').addEventListener('click', function() {
      if (isMoved) {
        square3.style.left = '0px'; 
      } else {
        square3.style.right = '50px'; 
      }

      if (isMoved) {
        square11.style.left = '0px'; 
      } else {
        square11.style.right = '50px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square3.style.left);
    });

    document.querySelector('.Meat salad').addEventListener('click', function() {
      if (isMoved) {
        square4.style.left = '1020px'; 
      } else {
        square4.style.right = '0px'; 
      }

      if (isMoved) {
        square12.style.left = '1020px'; 
      } else {
        square12.style.right = '0px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square4.style.left);
    });

    document.querySelector('.napoleon').addEventListener('click', function() {
      if (isMoved) {
        square5.style.left = '0px'; 
      } else {
        square5.style.right = '50px'; 
      }

      if (isMoved) {
        square13.style.left = '0px'; 
      } else {
        square13.style.right = '50px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square5.style.left);
    });

    document.querySelector('.hotdog').addEventListener('click', function() {
      if (isMoved) {
        square6.style.left = '1020px'; 
      } else {
        square6.style.right = '50px'; 
      }

      if (isMoved) {
        square14.style.left = '1020px'; 
      } else {
        square14.style.right = '50px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square5.style.left);
    });

    document.querySelector('.brownie').addEventListener('click', function() {
      if (isMoved) {
        square7.style.left = '0px'; 
      } else {
        square7.style.right = '50px'; 
      }

      if (isMoved) {
        square15.style.left = '0px'; 
      } else {
        square15.style.right = '50px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square5.style.left);
    });

    document.querySelector('.khachapuri').addEventListener('click', function() {
      if (isMoved) {
        square8.style.left = '1020px'; 
      } else {
        square8.style.right = '50px'; 
      }

      if (isMoved) {
        square16.style.left = '1020px'; 
      } else {
        square16.style.right = '50px'; 
      }
  
      isMoved = !isMoved;
      console.log('Square moved to:', square5.style.left);
    });
  });
  
