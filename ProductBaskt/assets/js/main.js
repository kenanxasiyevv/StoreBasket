if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn');

for (let btn of buttons) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (this.previousElementSibling !== null) {
      let id = this.parentElement.parentElement.id;
      let model = this.previousElementSibling.innerHTML;
      let price = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
      let img = this.parentElement.previousElementSibling.src;

      let allproducts = JSON.parse(localStorage.getItem('products'));

      let existProd = allproducts.find(item => item.Id === parseInt(id));

      if (existProd === undefined) {
        allproducts.push({
          Id: parseInt(id),
          Image: img,
          Count: 1,
          Model: model,
          Price: price,
        });
        document.querySelector('.toaster').innerHTML = 'Successfully added!'
        document.querySelector('.toaster').style.backgroundColor = 'green'
      } else {
        existProd.Count += 1;
        document.querySelector('.toaster').innerHTML = 'Already added!'
        document.querySelector('.toaster').style.backgroundColor = 'red'
      }

      document.querySelector('.toaster').style.right = '5%'
      setTimeout(() => {
        document.querySelector('.toaster').style.right = '-20%'
      }, 1300);

      localStorage.setItem('products', JSON.stringify(allproducts));
      showCount();
    }
  });
}

function showCount() {
  let products = JSON.parse(localStorage.getItem('products'));
  document.querySelector('sup').innerHTML = products.length;
}

showCount();
