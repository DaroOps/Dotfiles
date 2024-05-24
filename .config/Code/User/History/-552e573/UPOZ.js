export const getBentoAlbumIds = () =>{
  const bentoFindedElement = document.querySelector('bento-finded');
  const albumIds = [];
  
  if (bentoFindedElement) {
    const albumCards = bentoFindedElement.querySelectorAll('album-card');
    
    albumCards.forEach(albumCard => {
      const albumId = albumCard.getAttribute('id');
      
      if (albumId) {
        albumIds.push(albumId);
      }
    });
    
}   
return albumIds;
}