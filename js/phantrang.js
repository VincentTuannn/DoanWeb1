const itemsPerPage = 10; 
let currentPage = 1;
function changePage(page) {
    currentPage = page;
    showPage();
}

function showPage() {
    const items = document.getElementsByClassName('item-show');
    
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
        }
    }

    renderPagination();
}

// ... (your existing JavaScript code)

function renderPagination() {
    const totalItems = document.getElementsByClassName('item-show').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginationContainer = document.getElementById('pagenumber');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('div');
        btn.innerText = i;
        btn.className = 'pagination-btn';
        btn.onclick = function () {
            changePage(i);
        };

        if (i === currentPage) {
            btn.classList.add('active');
        }

        paginationContainer.appendChild(btn);
    }
}
showPage();
