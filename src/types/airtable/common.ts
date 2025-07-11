// Common types used across multiple tables
export type Attachment = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails?: {
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    full: { url: string; width: number; height: number };
  };
  // SEO and Accessibility fields
  altText?: string;
  title?: string;
  caption?: string;
  focalPoint?: 'center' | 'top' | 'bottom' | 'left' | 'right';
};

// Enhanced image interface with required SEO fields for new implementations
export interface SEOImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  width?: number;
  height?: number;
  focalPoint?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

export type RecordLink = {
  id: string;
};

// Common fields that appear in multiple tables
export interface BaseFields {
  id: string;
  createdTime: string;
}

// Common SEO fields
export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
}

// Common publishing fields
export interface PublishingFields {
  published: boolean;
  publishedDate?: string;
  lastUpdated: string;
}

// Common content fields
export interface ContentFields {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  featuredImage?: Attachment[];
} 