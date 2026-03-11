import type { Schema, Struct } from "@strapi/strapi";

export interface LayoutFooter extends Struct.ComponentSchema {
	collectionName: "components_layout_footers";
	info: {
		displayName: "Footer";
	};
	attributes: {
		ContactInfo: Schema.Attribute.Component<"shared.contact-info", true>;
		CtaLink: Schema.Attribute.Component<"shared.link", false> & Schema.Attribute.Required;
		description: Schema.Attribute.Text & Schema.Attribute.Required;
		footerBgImg: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		headline: Schema.Attribute.Text & Schema.Attribute.Required;
		Menu: Schema.Attribute.Component<"shared.footer-menu", true> & Schema.Attribute.Required;
		OfficeAddress: Schema.Attribute.Component<"shared.office-address", false>;
		Socials: Schema.Attribute.Component<"shared.socials", false>;
		WriteToUs: Schema.Attribute.Component<"shared.write-to-us", false>;
	};
}

export interface LayoutHeader extends Struct.ComponentSchema {
	collectionName: "components_layout_headers";
	info: {
		displayName: "Header";
	};
	attributes: {
		headerLogo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		NavLinks: Schema.Attribute.Component<"shared.link", true>;
	};
}

export interface SectionsClientTrust extends Struct.ComponentSchema {
	collectionName: "components_sections_client_trust_s";
	info: {
		displayName: "Client Trust ";
	};
	attributes: {
		Button: Schema.Attribute.Component<"shared.link", false>;
		CompanyLogo: Schema.Attribute.Component<"shared.company-logo", true>;
		title: Schema.Attribute.Text;
	};
}

export interface SectionsFeaturedWork extends Struct.ComponentSchema {
	collectionName: "components_sections_featured_works";
	info: {
		displayName: "Featured Work";
	};
	attributes: {
		featuredWorklogo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		ServicesLink: Schema.Attribute.Component<"shared.link", false>;
		title: Schema.Attribute.String & Schema.Attribute.Required;
		WorkItem: Schema.Attribute.Component<"shared.feat-work-item", true>;
	};
}

export interface SectionsHero extends Struct.ComponentSchema {
	collectionName: "components_sections_heroes";
	info: {
		displayName: "Hero";
	};
	attributes: {
		companyName: Schema.Attribute.String;
		heroImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
			Schema.Attribute.Required;
	};
}

export interface SectionsOurBrands extends Struct.ComponentSchema {
	collectionName: "components_sections_our_brands";
	info: {
		displayName: "Our Brands";
	};
	attributes: {
		BrandCards: Schema.Attribute.Component<"shared.brand-cards", true>;
		heading: Schema.Attribute.String;
		leftScrollIndicator: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		rightScrollIndicator: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
	};
}

export interface SectionsOurIdentity extends Struct.ComponentSchema {
	collectionName: "components_sections_our_identities";
	info: {
		displayName: "Our Identity";
	};
	attributes: {
		AboutUsLink: Schema.Attribute.Component<"shared.link", false>;
		description: Schema.Attribute.Text;
		title: Schema.Attribute.String;
	};
}

export interface SectionsOurResources extends Struct.ComponentSchema {
	collectionName: "components_sections_our_resources";
	info: {
		displayName: "Our Resources";
	};
	attributes: {
		Resource: Schema.Attribute.Component<"shared.our-resource", true>;
		ResourceCtaBtn: Schema.Attribute.Component<"shared.link", false>;
		title: Schema.Attribute.Text;
	};
}

export interface SectionsOurServices extends Struct.ComponentSchema {
	collectionName: "components_sections_our_services";
	info: {
		displayName: "Our Services";
	};
	attributes: {
		description: Schema.Attribute.Text & Schema.Attribute.Required;
		featImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
			Schema.Attribute.Required;
		Services: Schema.Attribute.Component<"shared.our-services", true> & Schema.Attribute.Required;
		ServicesLink: Schema.Attribute.Component<"shared.link", false>;
		title: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
	collectionName: "components_sections_testimonials";
	info: {
		displayName: "Testimonials";
	};
	attributes: {
		TestimonialCard: Schema.Attribute.Component<"shared.testimonial-card", true> &
			Schema.Attribute.Required;
		title: Schema.Attribute.Text & Schema.Attribute.Required;
	};
}

export interface SharedBrandCards extends Struct.ComponentSchema {
	collectionName: "components_shared_brand_cards";
	info: {
		displayName: "BrandCards";
	};
	attributes: {
		BrandSolutionsLink: Schema.Attribute.Component<"shared.link", false>;
		cardDescription: Schema.Attribute.String & Schema.Attribute.Required;
		cardImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
			Schema.Attribute.Required;
		cardLogo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
	};
}

export interface SharedCompanyLogo extends Struct.ComponentSchema {
	collectionName: "components_shared_company_logos";
	info: {
		displayName: "CompanyLogo";
	};
	attributes: {
		image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
	};
}

export interface SharedContactInfo extends Struct.ComponentSchema {
	collectionName: "components_shared_contact_infos";
	info: {
		displayName: "ContactInfo";
	};
	attributes: {
		phoneNo: Schema.Attribute.Integer;
		title: Schema.Attribute.String;
	};
}

export interface SharedFeatWorkItem extends Struct.ComponentSchema {
	collectionName: "components_shared_feat_work_items";
	info: {
		displayName: "FeatWorkItem";
	};
	attributes: {
		caption: Schema.Attribute.Text;
		image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
	};
}

export interface SharedFooterMenu extends Struct.ComponentSchema {
	collectionName: "components_shared_footer_menus";
	info: {
		displayName: "Footer Menu";
	};
	attributes: {
		MenuLink: Schema.Attribute.Component<"shared.link", true>;
		title: Schema.Attribute.Text & Schema.Attribute.Required;
	};
}

export interface SharedLink extends Struct.ComponentSchema {
	collectionName: "components_shared_links";
	info: {
		displayName: "Link";
	};
	attributes: {
		label: Schema.Attribute.String;
		URL: Schema.Attribute.Text;
	};
}

export interface SharedMedia extends Struct.ComponentSchema {
	collectionName: "components_shared_media";
	info: {
		displayName: "Media";
		icon: "file-video";
	};
	attributes: {
		file: Schema.Attribute.Media<"images" | "files" | "videos">;
	};
}

export interface SharedOfficeAddress extends Struct.ComponentSchema {
	collectionName: "components_shared_office_addresses";
	info: {
		displayName: "OfficeAddress";
	};
	attributes: {
		address: Schema.Attribute.Text;
		title: Schema.Attribute.String;
	};
}

export interface SharedOurResource extends Struct.ComponentSchema {
	collectionName: "components_shared_our_resources";
	info: {
		displayName: "Our Resource";
	};
	attributes: {
		description: Schema.Attribute.Text;
		metaCommentsImg: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		metaData: Schema.Attribute.Text;
		metaViewsImg: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		resourceImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		title: Schema.Attribute.Text & Schema.Attribute.Required;
	};
}

export interface SharedOurServices extends Struct.ComponentSchema {
	collectionName: "components_shared_our_services";
	info: {
		displayName: "ServicesDescription";
	};
	attributes: {
		description: Schema.Attribute.Text;
		index: Schema.Attribute.String & Schema.Attribute.Required;
		title: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface SharedPhoneItem extends Struct.ComponentSchema {
	collectionName: "components_shared_phone_items";
	info: {
		displayName: "Phone Item";
	};
	attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
	collectionName: "components_shared_quotes";
	info: {
		displayName: "Quote";
		icon: "indent";
	};
	attributes: {
		body: Schema.Attribute.Text;
		title: Schema.Attribute.String;
	};
}

export interface SharedRichText extends Struct.ComponentSchema {
	collectionName: "components_shared_rich_texts";
	info: {
		description: "";
		displayName: "Rich text";
		icon: "align-justify";
	};
	attributes: {
		body: Schema.Attribute.RichText;
	};
}

export interface SharedSeo extends Struct.ComponentSchema {
	collectionName: "components_shared_seos";
	info: {
		description: "";
		displayName: "Seo";
		icon: "allergies";
		name: "Seo";
	};
	attributes: {
		metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
		metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
		shareImage: Schema.Attribute.Media<"images">;
	};
}

export interface SharedSlider extends Struct.ComponentSchema {
	collectionName: "components_shared_sliders";
	info: {
		description: "";
		displayName: "Slider";
		icon: "address-book";
	};
	attributes: {
		files: Schema.Attribute.Media<"images", true>;
	};
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
	collectionName: "components_shared_social_links";
	info: {
		displayName: "SocialLinks";
	};
	attributes: {
		icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		url: Schema.Attribute.Text;
	};
}

export interface SharedSocials extends Struct.ComponentSchema {
	collectionName: "components_shared_socials";
	info: {
		displayName: "Socials";
	};
	attributes: {
		SocialLinks: Schema.Attribute.Component<"shared.social-links", true>;
		title: Schema.Attribute.Text;
	};
}

export interface SharedTestimonialCard extends Struct.ComponentSchema {
	collectionName: "components_shared_testimonial_cards";
	info: {
		displayName: "TestimonialCard";
	};
	attributes: {
		designation: Schema.Attribute.Text;
		image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		name: Schema.Attribute.String & Schema.Attribute.Required;
		text: Schema.Attribute.Text & Schema.Attribute.Required;
	};
}

export interface SharedWriteToUs extends Struct.ComponentSchema {
	collectionName: "components_shared_write_to_us";
	info: {
		displayName: "WriteToUs";
	};
	attributes: {
		email: Schema.Attribute.Email;
		title: Schema.Attribute.String;
	};
}

declare module "@strapi/strapi" {
	export module Public {
		export interface ComponentSchemas {
			"layout.footer": LayoutFooter;
			"layout.header": LayoutHeader;
			"sections.client-trust": SectionsClientTrust;
			"sections.featured-work": SectionsFeaturedWork;
			"sections.hero": SectionsHero;
			"sections.our-brands": SectionsOurBrands;
			"sections.our-identity": SectionsOurIdentity;
			"sections.our-resources": SectionsOurResources;
			"sections.our-services": SectionsOurServices;
			"sections.testimonials": SectionsTestimonials;
			"shared.brand-cards": SharedBrandCards;
			"shared.company-logo": SharedCompanyLogo;
			"shared.contact-info": SharedContactInfo;
			"shared.feat-work-item": SharedFeatWorkItem;
			"shared.footer-menu": SharedFooterMenu;
			"shared.link": SharedLink;
			"shared.media": SharedMedia;
			"shared.office-address": SharedOfficeAddress;
			"shared.our-resource": SharedOurResource;
			"shared.our-services": SharedOurServices;
			"shared.phone-item": SharedPhoneItem;
			"shared.quote": SharedQuote;
			"shared.rich-text": SharedRichText;
			"shared.seo": SharedSeo;
			"shared.slider": SharedSlider;
			"shared.social-links": SharedSocialLinks;
			"shared.socials": SharedSocials;
			"shared.testimonial-card": SharedTestimonialCard;
			"shared.write-to-us": SharedWriteToUs;
		}
	}
}
