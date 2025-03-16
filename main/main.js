$(document).ready(function () {
    const products = [
        { id: 1, name: "Laptop Dell XPS", price: "$1200", status: "In Stock" },
        { id: 2, name: "iPhone 14 Pro", price: "$999", status: "Out of Stock" },
        { id: 3, name: "Samsung Galaxy S22", price: "$899", status: "In Stock" },
        { id: 4, name: "MacBook Air M2", price: "$1100", status: "In Stock" },
        { id: 5, name: "Sony WH-1000XM5", price: "$399", status: "Out of Stock" },
        { id: 6, name: "Apple Watch Series 8", price: "$429", status: "In Stock" },
        { id: 7, name: "Dell Ultrasharp Monitor", price: "$499", status: "In Stock" },
        { id: 8, name: "HP Pavilion Gaming Laptop", price: "$850", status: "Out of Stock" },
        { id: 9, name: "Logitech MX Master 3", price: "$99", status: "In Stock" },
        { id: 10, name: "Razer BlackWidow Keyboard", price: "$129", status: "In Stock" },
        { id: 11, name: "Bose QuietComfort 45", price: "$329", status: "In Stock" },
        { id: 12, name: "GoPro Hero 11", price: "$499", status: "Out of Stock" },
        { id: 13, name: "Canon EOS R5", price: "$3899", status: "In Stock" },
        { id: 14, name: "Nikon Z9", price: "$5499", status: "Out of Stock" },
        { id: 15, name: "PlayStation 5", price: "$499", status: "In Stock" },
        { id: 16, name: "Xbox Series X", price: "$499", status: "In Stock" },
        { id: 17, name: "Nintendo Switch OLED", price: "$349", status: "Out of Stock" },
        { id: 18, name: "Apple iPad Pro 12.9", price: "$1099", status: "In Stock" },
        { id: 19, name: "Samsung Galaxy Tab S8", price: "$799", status: "In Stock" },
        { id: 20, name: "DJI Mavic 3", price: "$2049", status: "Out of Stock" },
    ]

    const display = (products) => {
        $("td").remove();
        products.forEach((e, index) => {
            const product = `
                <tr>
                    <td class="text-center">${e.id}</td>
                    <td class="text-start">${e.name}</td>
                    <td class="text-start">${e.status}</td>
                    <td class="text-center" data-id="${index}">
                        <span class="btn btn-info btn-sm view " data-bs-toggle="modal" data-bs-target="#view-modal"><i class="bi bi-eye"></i></span>
                        <span class="btn btn-warning btn-sm edit " data-bs-toggle="modal" data-bs-target="#edit-modal"><i class="bi bi-pencil"></i></span>
                        <span class="btn btn-danger btn-sm del " data-bs-toggle="modal" data-bs-target="#del-modal"><i class="bi bi-trash"></i></span>
                    </td>
                </tr>
            
            `
            $("#tBody-product").append(product)

        })
    }
    display(products)

    $("#input-srearch").on("input", function () {
        const fillerProduct = products.filter((e) => {
            return e.name.toLowerCase().includes($(this).val().toLowerCase())
        })
        display(fillerProduct)
    })

    $(document).on("click", ".view", function () {
        const product = products[$(this).parent().data("id")]

        $(".view-name").html(`<span>Name: </span>${product.name}`)
        $(".view-price").html(`<span>Price: </span>${product.price}`)
        $(".view-status").html(`<span>Status: </span>${product.status}`)
    })

    $(document).on("click", ".edit", function () {
        const product = products[$(this).parent().data("id")]
        $("#input-name").val(product.name)
        $("#input-price").val(product.price)
        $("#input-status").val(product.status)

        $("#saveChanges").off("click").click(function () {
            product.name = $("#input-name").val()
            product.price = $("#input-price").val()
            product.status = $("#input-status").val()
            display(products)
            console.log(products)

        })
    })

    $(document).on("click", ".del", function () {
        const product = $(this).parent()

        $("#deleteChanges").off("click").click(function () {
            products.splice(product.data("id"), 1)
            product.parent().remove()
            console.log(products)
            display(products)
        })

    })

    $("#addChanges").off("click").click(function () {
        const input = $(this).parent().find("input")
        const name = input[0].value
        const price = Number(input[1].value)
        const status = input[2].value
        const id = products[products.length - 1].id + 1
        products.push({id, name, price, status})
        display(products)
    })

})