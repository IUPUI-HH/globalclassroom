function show() {
    document.getElementById('expander').style.display='block';
    document.getElementById('hide').style.display='inline';
    document.getElementById('show').style.display='none'; 
    return false;
}

function hide() {
    document.getElementById('expander').style.display='none';
    document.getElementById('hide').style.display='none';
    document.getElementById('show').style.display='inline'; 
    return false;
}