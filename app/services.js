import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const photoGallery = createApi({
  reducerPath: "photoGallery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    // photos
    editorialImages: builder.query({
      query: (page) => ({
        url: `photos?page=${page}&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    AnimeImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Anime&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    WallpaperImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Wallpaper&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    TextureImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Texture&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    NatureImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Nature&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    FashionImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Fashion&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    WildlifeImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Wildlife&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    MarineImages: builder.query({
      query: (page) => ({
        url: `search/photos?page=${page}&per_page=30&query=Marine&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    photoDetail: builder.query({
      query: (id, page) => ({
        url: `photos/${id}?page=${page}&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),

    // users
    usersProfile: builder.query({
      query: (id) => ({
        url: `users/${id}?client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    usersPhotos: builder.query({
      query: (id) => ({
        url: `users/${id}/photos?page=1&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    usersLikedPhotos: builder.query({
      query: (id) => ({
        url: `users/${id}/likes?page=1&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    usersCollection: builder.query({
      query: (id) => ({
        url: `users/${id}/collections?page=1&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),

    // search
    searchPhotos: builder.query({
      query: ({ searched, page }) => ({
        url: `search/photos?page=${page}&per_page=30&query=${searched}&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    searchCollections: builder.query({
      query: ({ searched, page }) => ({
        url: `search/collections?page=${page}&per_page=30&query=${searched}&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    searchUsers: builder.query({
      query: ({ searched, page }) => ({
        url: `search/users?page=${page}&per_page=30&query=${searched}&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),

    // collections
    collectionDetails: builder.query({
      query: (id) => ({
        url: `collections/${id}?client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    collectionPhotos: builder.query({
      query: (id) => ({
        url: `collections/${id}/photos?page=1&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    collectionRelatedCollection: builder.query({
      query: (id) => ({
        url: `collections/${id}/related?client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useEditorialImagesQuery,
  useAnimeImagesQuery,
  useFashionImagesQuery,
  useWallpaperImagesQuery,
  useTextureImagesQuery,
  useNatureImagesQuery,
  useWildlifeImagesQuery,
  useMarineImagesQuery,
  usePhotoDetailQuery,
  useSearchPhotosQuery,
  useSearchCollectionsQuery,
  useSearchUsersQuery,
  useUsersProfileQuery,
  useUsersPhotosQuery,
  useUsersLikedPhotosQuery,
  useUsersCollectionQuery,
  useCollectionDetailsQuery,
  useCollectionRelatedCollectionQuery,
  useCollectionPhotosQuery,
} = photoGallery;
