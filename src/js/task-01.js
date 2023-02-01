const listRef = document.querySelector('#categories');

const listItemsRef = listRef.querySelectorAll('.item');
console.log(listItemsRef);
console.log(`Number of categories: ${listItemsRef.length}`);

listItemsRef.forEach(function (listItem) {
    const categoriesTitleRef = listItem.firstElementChild;
    const categoriesQuantityRef = listItem.lastElementChild;
    console.log('Category:', categoriesTitleRef.textContent);
    console.log('Elements:', categoriesQuantityRef.children.length);
   
})


