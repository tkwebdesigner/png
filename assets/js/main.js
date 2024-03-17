function resizeGridItem(item){
    grid = document.getElementsByClassName("d_grid_images_row")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.d_grid_image_box').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
 }
 
 function resizeAllGridItems(){
    allItems = document.getElementsByClassName("d_grid_image_box");
    for(x=0;x<allItems.length;x++){
       resizeGridItem(allItems[x]);
    }
 }
 
 window.onload = resizeAllGridItems();
 
 window.addEventListener("resize", resizeAllGridItems);
 
 allItems = document.getElementsByClassName("d_grid_image_box");
 for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
 }
 
 function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
 }