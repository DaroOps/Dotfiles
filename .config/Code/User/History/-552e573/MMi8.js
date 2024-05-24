export const getBentoAlbumIds = async (data) => {
  let albumIds = [];
  console.log(data);
  await data;
  let iterable = await data

  console.log(iterable);

  iterable.forEach(album => {
    let [origin, endpoint, id] = album.data.uri.split(":")
          
      albumIds.push(id);
  });
  

};
