// let url = "http://localhost/javascript-pelajaran/ajax/ajax.php";
// let url = "https://dummyjson.com/products/1";
let url = "https://dummyjson.com/products";

$(document).ready(function () {
  function getData() {
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response);
        let out;
        $.each(response.products, function (key, val) {
          console.log(val);
          out += `<tr>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                 </tr>`;
        });

        // data = response.products.map(a=>out+=`<tr><td>${a.title}</td><td>${a.description}</td></tr>`)
        // document.querySelector("#dummyjson").innerHTML = out;
        $("#dummyjson").html(out);
      },
    });
  }
  getData();
});

// $(document).ready(function () {
//     function selectData() {
//         $.ajax({
//             type: "get",
//             url: url,
//             dataType: "json",
//             success: function (response) {
//                 console.log(response);
//                 let out = "";
//                 let No = 1;
//                 $.each(response, function (key, val) {
//                      console.log(val);
//                     out += `<tr>
//                         <td>${No++}</td>
//                         <td>${val.buah}</td>
//                         <td>${val.deskripsi}</td>
//                         <td>${val.harga}</td>
//                         <td>${val.gambar}</td>
//                     </tr>`;
//                 });

//                 $("#isidata").html(out);
//             }
//         });
//     }

//     selectData();
// });
