function sendWA() {
    link = 'https://wa.me/919711890753?text='
      const name = document.getElementById('name').value;
      const contactNo = document.getElementById('contactNo').value;
      const message = document.getElementById('message').value;
      const msg = `Name: ${name ? name : '-'} \n \n Phone No: ${contactNo ? contactNo : '-'} \n msg: ${message ? message : '-'}`;
      link += msg;
      window.location.href = link;
    }
  