export const getBentoAlbumIds = async (data) => {
  let albumIds = [];
  console.log(data);
  await data;
  data.forEach(album => {
    let [origin, endpoint, id] = album.data.uri.split(":")
          
      albumIds.push(id);
  });
  

};