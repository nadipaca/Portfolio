export type ChatResponseType = "ANSWER" | "REDIRECT" | "SHOW_DEMO" | "MISSING_INFO" | "ERROR";

export type RedirectTarget = "PROJECTS_SECTION" | "EXPERIENCE_SECTION" | "SKILLS_SECTION";

export interface ChatAnswerResponse {
  type: "ANSWER";
  content: string;
  sources?: string[];
}

export interface ChatRedirectResponse {
  type: "REDIRECT";
  target: RedirectTarget;
  message: string;
  suggestedProjectId?: string;
}

export interface ChatShowDemoResponse {
  type: "SHOW_DEMO";
  projectId: string;
  message: string;
}

export interface ChatMissingInfoResponse {
  type: "MISSING_INFO";
  message: string;
  availableOptions: string[];
}

export interface ChatErrorResponse {
  type: "ERROR";
  message: string;
  fallbackEnabled: boolean;
}

export type ChatResponse =
  | ChatAnswerResponse
  | ChatRedirectResponse
  | ChatShowDemoResponse
  | ChatMissingInfoResponse
  | ChatErrorResponse;

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  responseType?: ChatResponseType;
}

export interface ChatRequest {
  message: string;
  currentProjectId?: string;
  conversationId?: string;
}

