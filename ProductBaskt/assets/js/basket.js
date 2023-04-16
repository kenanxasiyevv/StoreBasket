function FetchItems() {
    let itemList = JSON.parse(localStorage.getItem('products'));
    let alertMessage = document.querySelector('.alert');

    if (itemList.length === 0) {
        alertMessage.classList.remove('d-none')
        document.querySelector('table').classList.remove('d-none')
    }
    else {


        alertMessage.classList.add('d-none')

        let x = '';
        itemList.forEach(item => {
            x += `
    <tr>
        <th scope="row">${item.Id}</th>
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
    `
        })
        document.querySelector('tbody').innerHTML = x;


    }

}
FetchItems()


    
  







