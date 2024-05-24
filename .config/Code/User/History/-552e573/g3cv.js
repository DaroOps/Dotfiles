export const getBentoAlbumIds = (data) => {
  let albumIds = [];
  data.forEach(album => {
    let [origin, endpoint, id] = album.data.uri.split(":")
          
      albumIds.push(id);
  });
  

};
