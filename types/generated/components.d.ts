import type { Schema, Struct } from '@strapi/strapi';

export interface SelecteContente extends Struct.ComponentSchema {
  collectionName: 'components_selecte_contentes';
  info: {
    displayName: 'contente';
    icon: 'check';
  };
  attributes: {};
}

export interface SelecteContenue extends Struct.ComponentSchema {
  collectionName: 'components_selecte_contenues';
  info: {
    displayName: 'contenue';
  };
  attributes: {};
}

export interface SelecteLien extends Struct.ComponentSchema {
  collectionName: 'components_selecte_liens';
  info: {
    displayName: 'lien';
  };
  attributes: {
    annonce: Schema.Attribute.Relation<'oneToOne', 'api::annonce.annonce'>;
    legende: Schema.Attribute.String;
    lien: Schema.Attribute.String;
  };
}

export interface SelectePhoto extends Struct.ComponentSchema {
  collectionName: 'components_selecte_photos';
  info: {
    displayName: 'photo';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    legende: Schema.Attribute.String;
    photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SelecteText extends Struct.ComponentSchema {
  collectionName: 'components_selecte_texts';
  info: {
    displayName: 'text';
    icon: 'book';
  };
  attributes: {
    annonce: Schema.Attribute.Relation<'oneToOne', 'api::annonce.annonce'>;
    bool: Schema.Attribute.Boolean;
    bool_princpale: Schema.Attribute.Boolean;
    date: Schema.Attribute.DateTime;
    date_debit: Schema.Attribute.DateTime;
    date_fin: Schema.Attribute.DateTime;
    email: Schema.Attribute.Email;
    enum_type: Schema.Attribute.Enumeration<['gauche', 'droite']>;
    json: Schema.Attribute.JSON;
    media_principale: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_secondaire: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    nombre_decimal: Schema.Attribute.Decimal;
    nombre_entier: Schema.Attribute.Integer;
    numbre_decimal: Schema.Attribute.Decimal;
    numbre_entier: Schema.Attribute.Integer;
    passe_word: Schema.Attribute.Password;
    riche_marck: Schema.Attribute.RichText;
    riche_text: Schema.Attribute.Blocks;
    single_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitre: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
  };
}

export interface SelecteVideo extends Struct.ComponentSchema {
  collectionName: 'components_selecte_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    fichier: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    legende: Schema.Attribute.String;
    lien: Schema.Attribute.String;
    url: Schema.Attribute.String;
    video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'selecte.contente': SelecteContente;
      'selecte.contenue': SelecteContenue;
      'selecte.lien': SelecteLien;
      'selecte.photo': SelectePhoto;
      'selecte.text': SelecteText;
      'selecte.video': SelecteVideo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
