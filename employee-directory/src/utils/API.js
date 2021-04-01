import $ from 'jquery';

// Export an object containing methods we'll use for accessing the Random User Generator API

export default {
  getEmployees: function() {
    return $.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      });;
  },
};
