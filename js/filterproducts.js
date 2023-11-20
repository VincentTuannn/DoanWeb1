var listthuonghieu = document.getElementById('item-thuonghieu');
var groupfilterthuonghieu = document.getElementById('group-filter-thuonghieu');

var listgia = document.getElementById('item-gia');
var groupfiltergia = document.getElementById('group-filter-gia');

var listmausac = document.getElementById('item-mausac');
var groupfiltermausac = document.getElementById('group-filter-mausac');

var listcpu = document.getElementById('item-cpu');
var groupfiltercpu = document.getElementById('group-filter-cpu');

var listvga = document.getElementById('item-vga');
var groupfiltervga = document.getElementById('group-filter-vga');

listthuonghieu.addEventListener('click', function(){
    if ( groupfilterthuonghieu.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfilterthuonghieu.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfilterthuonghieu.style.display = 'none';
    }
});

listgia.addEventListener('click', function(){
    if ( groupfiltergia.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltergia.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltergia.style.display = 'none';
    }
});

listmausac.addEventListener('click', function(){
    if ( groupfiltermausac.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltermausac.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltermausac.style.display = 'none';
    }
});

listcpu.addEventListener('click', function(){
    if ( groupfiltercpu.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltercpu.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltercpu.style.display = 'none';
    }
});

listvga.addEventListener('click', function(){
    if ( groupfiltervga.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltervga.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltervga.style.display = 'none';
    }
});