'use strict';

const { Service } = require('egg');

const model = require('../model/gallery');
const uuid = function() {
  return Date.now().toString(36);
};

class GalleryService extends Service {
  getGalleries() {
    return model.get('galleries').value();
  }

  pushGallery(meta) {
    const id = uuid();
    return model.get('galleries')
      .push({
        meta: Object.assign(meta, {
          id,
          create_at: Date.now(),
        }),
        photos: [],
      })
      .write();
  }

  getGalleryById(galleryId) {
    const album = model.get('galleries')
      .find({
        meta: {
          id: galleryId,
        },
      })
      .value();
    return album;
  }

  pushPhotos(galleryId, photo) {
    return model.get('galleries')
      .find({
        id: galleryId,
      })
      .get('photos')
      .push(photo);
  }
}

module.exports = GalleryService;
