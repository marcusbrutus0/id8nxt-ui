import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    AddressDescription: Schema.Attribute.Text;
    AddressTitle: Schema.Attribute.String;
    ContactInfo: Schema.Attribute.String;
    CtaLink: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Headline: Schema.Attribute.Text & Schema.Attribute.Required;
    Menu: Schema.Attribute.Component<'shared.footer-menu', true> &
      Schema.Attribute.Required;
    PhoneNo: Schema.Attribute.Component<'shared.phone-item', true>;
    WriteToUsEmail: Schema.Attribute.Email;
    WriteToUsTitle: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    HeaderLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    NavLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SectionsClientTrust extends Struct.ComponentSchema {
  collectionName: 'components_sections_client_trust_s';
  info: {
    displayName: 'Client Trust ';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.link', false>;
    Logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsFeaturedWork extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_works';
  info: {
    displayName: 'Featured Work';
  };
  attributes: {
    ServicesLink: Schema.Attribute.Component<'shared.link', false>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    WorkItem: Schema.Attribute.Component<'shared.feat-work-item', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    CompanyName: Schema.Attribute.String;
    Header: Schema.Attribute.Component<'layout.header', true> &
      Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsOurBrands extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_brands';
  info: {
    displayName: 'Our Brands';
  };
  attributes: {
    BrandCards: Schema.Attribute.Component<'shared.brand-cards', true>;
    Heading: Schema.Attribute.String;
  };
}

export interface SectionsOurIdentity extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_identities';
  info: {
    displayName: 'Our Identity';
  };
  attributes: {
    AboutUsLink: Schema.Attribute.Component<'shared.link', false>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsOurResources extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_resources';
  info: {
    displayName: 'Our Resources';
  };
  attributes: {
    Resource: Schema.Attribute.Component<'shared.our-resource', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_services';
  info: {
    displayName: 'Our Services';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    FeatImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    Services: Schema.Attribute.Component<'shared.our-services', true> &
      Schema.Attribute.Required;
    ServicesLink: Schema.Attribute.Component<'shared.link', false>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    TestimonialCard: Schema.Attribute.Component<
      'shared.testimonial-card',
      true
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedBrandCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand_cards';
  info: {
    displayName: 'BrandCards';
  };
  attributes: {
    BrandSolutionsLink: Schema.Attribute.Component<'shared.link', false>;
    CardDescription: Schema.Attribute.String & Schema.Attribute.Required;
    CardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedFeatWorkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feat_work_items';
  info: {
    displayName: 'FeatWorkItem';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Size: Schema.Attribute.Enumeration<['Small ', 'Medium']>;
  };
}

export interface SharedFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_menus';
  info: {
    displayName: 'Footer Menu';
  };
  attributes: {
    MenuLink: Schema.Attribute.Component<'shared.link', true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Label: Schema.Attribute.String;
    URL: Schema.Attribute.Text;
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

export interface SharedOurResource extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_resources';
  info: {
    displayName: 'Our Resource';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    MetaData: Schema.Attribute.Text;
    ResourceImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedOurServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_services';
  info: {
    displayName: 'ServicesDescription';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Index: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPhoneItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_phone_items';
  info: {
    displayName: 'Phone Item';
  };
  attributes: {
    PhoneNo: Schema.Attribute.Integer;
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

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    Platform: Schema.Attribute.Enumeration<
      ['linkedIn', 'X', 'instagram', 'facebook']
    >;
    URL: Schema.Attribute.Text;
  };
}

export interface SharedTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_cards';
  info: {
    displayName: 'TestimonialCard';
  };
  attributes: {
    Designation: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Testimonial: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'sections.client-trust': SectionsClientTrust;
      'sections.featured-work': SectionsFeaturedWork;
      'sections.hero': SectionsHero;
      'sections.our-brands': SectionsOurBrands;
      'sections.our-identity': SectionsOurIdentity;
      'sections.our-resources': SectionsOurResources;
      'sections.our-services': SectionsOurServices;
      'sections.testimonials': SectionsTestimonials;
      'shared.brand-cards': SharedBrandCards;
      'shared.feat-work-item': SharedFeatWorkItem;
      'shared.footer-menu': SharedFooterMenu;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.our-resource': SharedOurResource;
      'shared.our-services': SharedOurServices;
      'shared.phone-item': SharedPhoneItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.testimonial-card': SharedTestimonialCard;
    }
  }
}
