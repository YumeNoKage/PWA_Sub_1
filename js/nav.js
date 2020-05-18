document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    const ulT = document.querySelectorAll('.tabs');
    M.Tabs.init(ulT);
  });