export interface FileFields {
  url: string;
  details: {
    size: number;
    image: { width: number; height: number };
  };
  fileName: string;
  contentType: string;
}

export interface ImageFields {
  description: string;
  file: FileFields;
  title: string;
}

export interface Image {
  sys: { id: string; linkType: string; type: string };
  fields: ImageFields;
}
