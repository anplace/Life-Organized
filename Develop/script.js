$(function () {

  // Code to save the users inputed text into local storage.
  $('.saveBtn').on('click',function(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    console.log(value);
    console.log(time);
  
    localStorage.setItem(time, value);
  })

  // Code to change the hour slots color dependent on the time set by the users local computer settings. 
  function updateHour (){
    var currentHour = dayjs().hour();

    console.log(currentHour);

    $('.time-block').each(function(){
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
      if (currentHour > blockHour) {
        $(this).addClass('past').removeClass('future');
      } else if(currentHour === blockHour) {
        $(this).addClass('present').removeClass('past').removeClass('future');
      }

    })
  }
  updateHour();

// Code to display the current Month, Day, and Year in the header of the website
  document.getElementById('currentDay').textContent = new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getDate() + ', ' + new Date().getFullYear();
  
});