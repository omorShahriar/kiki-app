export function getStrapiMedia(media) {
  if (media.data) {
    const attr = Array.isArray(media.data)
      ? media.data[0].attributes
      : media.data.attributes;
    const { url, width, height } = attr;
    const imageUrl = url.startsWith("/")
      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
      : url;
    return { imageUrl, width, height };
  }
  return { imageUrl: null };
}
