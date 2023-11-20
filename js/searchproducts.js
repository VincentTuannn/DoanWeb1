var ArrayListProducts = [
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
];
const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get('searchTerm');

if (searchTerm) {
    const searchResult = ArrayListProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (searchResult.length > 0) {
        ListSellingProducts(searchResult);
    } else {
        document.getElementById('item-selling-products').innerText = "Không tìm thấy kết quả phù hợp.";
    }
} else {
    ListSellingProducts(ArrayListProducts);
}

/* Hàm tìm kiếm xuất giá trị trong trang */ function handleSearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.getElementsByClassName('name');

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.textContent.toLowerCase();
        const productItem = product.parentElement.parentElement.parentElement;

        if (productName.includes(searchTerm)) {
            productItem.style.display = 'block';
        } else {
            productItem.style.display = 'none';
        }
    }

    return false; // Ngăn chặn việc gửi biểu mẫu
}