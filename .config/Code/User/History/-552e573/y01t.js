export const getBentoAlbumIds = (data) => {
  const bentoFindedElement = document.querySelector("bento-finded");
  let albumIds = [];

  if (bentoFindedElement) {
    const albumCards = bentoFindedElement.querySelectorAll("album-card");

    albumCards.forEach((albumCard) => {
      const albumId = albumCard.getAttribute("id");

      if (albumId) {
        albumIds.push(albumId);
      }
    });
  }
  return albumIds;
};
