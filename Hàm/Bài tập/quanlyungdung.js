let phone = ['Xiaomi Redmi Note 10', 'Apple IPhone 13 Pro','Google pixel 8 Pro'
                    ,'Samsung Galaxy Note 24 Ultra', 'Apple IPhone 15 promax', ];

function hienThi(phone) {
    let total1 = phone.length;
    document.getElementById('total').innerHTML = 'Total :' + total1;
    let num = '';
    for (let i = 0; i < phone.length; i++) {
        num = num + "<tr>" + "<th class='text'>" + (i + 1) + " ."  + phone[i] + "</th>"
            + "<th>" + "<button onclick='edit(phone)'>Edit</button>" + "</th>"
            + "<th>" + "<button onclick='xoa(phone)'>Delete</button>" + "</th>" + "</tr>";
    }
    return num;
}

function add(phone) {
    let newPhone = document.getElementById('product').value;
    phone.push(newPhone);
    document.getElementById('result').innerHTML = hienThi(phone);
}
function edit(phone) {
    let index = prompt('Nhập số thứ tự máy muốn sửa tên:');
    let newPhone = prompt('Nhập tên mới cho máy:');
    phone[index - 1] = newPhone;
    document.getElementById('result').innerHTML = hienThi(phone);
}
function xoa(phone) {
    let index = parseInt(prompt('Nhập số thứ tự máy muốn xóa:'));
    phone.splice(index - 1,1);
    document.getElementById('result').innerHTML = hienThi(phone);
}
document.getElementById('result').innerHTML = hienThi(phone);