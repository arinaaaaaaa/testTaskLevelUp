function phoneValidate(event) {
    var button = String.fromCharCode(event.keyCode);
    var regex = /[0-9]|\./;
    if( !regex.test(button) ) {
      event.returnValue = false;
    }
  }