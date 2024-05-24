export const getBentoAlbumIds = (data) => {
  let albumIds = [];
  data.albums.items.forEach(album => {
    let [origin, endpoint, id] = album.data.uri.split(":")
          
      albumIds.push(id);
  });
  

};
