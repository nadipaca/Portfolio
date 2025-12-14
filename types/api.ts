export interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

