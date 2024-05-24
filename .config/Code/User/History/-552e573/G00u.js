export const getBentoAlbumIds = async (data) => {
  let albumIds = [];

  for await (const item of data) {
    console.log(item);
    const [origin, endpoint, id] = item.data.uri.split(":");
    albumIds.push(id);
  }

  return albumIds;
};