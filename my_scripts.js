function toggleblock(blockId, btnId)
{
   var block = document.getElementById(blockId); // bio
   var btnText = document.getElementById(btnId); // readmore
   if (block.style.display == 'none') {
    block.style.display = "inline";
    btnText.innerHTML = "[Read less] ";
   } else {
    block.style.display = 'none';
    btnText.innerHTML = "[Read more] ";
   }
}

function hideblock(blockId, btnId)
{
   var block = document.getElementById(blockId);
   var btnText = document.getElementById(btnId);
   block.style.display = 'none';
   btnText.innerHTML = "[Read more] ";
}
