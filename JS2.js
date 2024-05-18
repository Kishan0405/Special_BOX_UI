    function searchCountry() {
      var input, filter, select, option, txtValue;
      input = document.getElementById('countrySearch');
      filter = input.value.toUpperCase();
      select = document.getElementById('country_code');
      option = select.getElementsByTagName('option');

      for (var i = 0; i < option.length; i++) {
        txtValue = option[i].textContent || option[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          option[i].style.display = "";
        } else {
          option[i].style.display = "none";
        }
      }
    }

    function selectCountryCode() {
      var input, filter, select, option, txtValue;
      input = document.getElementById('countrySearch');
      filter = input.value.toUpperCase();
      select = document.getElementById('country_code');
      option = select.getElementsByTagName('option');

      for (var i = 0; i < option.length; i++) {
        txtValue = option[i].textContent || option[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          select.value = option[i].value;
          break;
        }
      }
    }