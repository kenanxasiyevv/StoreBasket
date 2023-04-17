function FetchItems() {
    let itemList = JSON.parse(localStorage.getItem('products'));
    let alertMessage = document.querySelector('.alert');

    if (itemList.length === 0) {
        alertMessage.classList.remove('d-none');
        document.querySelector('table').classList.remove('d-none');
    } else {
        alertMessage.classList.add('d-none');

        let x = '';
        itemList.forEach(item => {
            x += `
          <tr>
            <th id="${item.Id}" scope="row">${item.Id}</th>
            <td>
              <img src=${item.Image}>
            </td>
            <td>${item.Model}</td>
            <td>
              <input id="countvalue" type="number" min="1" value=${item.Count}>
            </td>
            <td>${item.Price}<strong>$</strong></td>
            <td>${(parseInt(item.Price)) * parseInt(item.Count)} USD</td>
            <td>
              <button class="btn btn-danger">Remove</button>
            </td>
          </tr>
        `;
        });
        document.querySelector('tbody').innerHTML = x;

        let button = document.querySelectorAll('.btn-danger');

        for (let btn of button) {
            btn.onclick = function () {
                let id = parseInt(this.parentElement.parentElement.firstChild.id);
                let itemList = JSON.parse(localStorage.getItem('products'));
                itemList.splice(id - 1, 1);
                localStorage.setItem('products', JSON.stringify(itemList));
                FetchItems();
                showCount();
                window.location.reload()
            }
        }
    }
}

FetchItems();

let countvalues = document.querySelectorAll('#countvalue');

for (let i = 0; i < countvalues.length; i++) {
    countvalues[i].addEventListener('input', changeCount);
}

function changeCount() {
    let itemList = JSON.parse(localStorage.getItem('products'));

    for (let i = 0; i < countvalues.length; i++) {
        let count = parseInt(countvalues[i].value);
        itemList[i].Count = count;
    }

    localStorage.setItem('products', JSON.stringify(itemList));

    window.location.reload();
}







