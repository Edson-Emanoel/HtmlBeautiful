const searchInput = document.getElementById("search")

searchInput.addEventListener("input", (e) => {
      const value = formatString(e.target.value);

      const items   = document.querySelectorAll('.items .item')
      let noResults = document.getElementById('no_results')

      let hasResult = false;

      if(value != ''){
            items.forEach(item => {
                  const itemTitle = item.querySelector('.item-title').textContent;
                  const itemDescription = item.querySelector('.item-description')
      
                  if(formatString(itemTitle.textContent).indexOf(value) !== -1 || formatString(itemDescription).indexOf(value !== -1)){
                        item.style.display = "flex";
      
                        hasResult = true;
                  } else {
                        item.style.display = "none";
                  }
            })
      
            if(hasResult){
                  noResults.style.display = "none";
            } else {
                  noResults.style.display = "block";
            }
      } else {
            items.forEach(item => item.style.display = "flex");

            noResults.style.display = "none";
      }
});

function formatString (value){
      return value
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
}