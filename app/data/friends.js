// ===============================================================================
// DATA
// Below data will hold all of the friend tables.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      "name":"Joe SomeBody",
      "photo":"",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    }
  
    ];
    
    
    // Note how we export the array. This makes it accessible to other files using require.
    module.exports = friendArray;