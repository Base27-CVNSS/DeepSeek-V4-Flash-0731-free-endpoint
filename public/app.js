const copy = {
  vi: {
    checking: "Đang kiểm tra", online: "Gateway sẵn sàng", degraded: "Tạm gián đoạn", offline: "Cần cấu hình", language: "Ngôn ngữ", theme: "Đổi giao diện",
    settings: "Cài đặt", openSidebar: "Mở danh sách hội thoại", newChat: "Cuộc trò chuyện mới", recentChats: "Gần đây", noChats: "Chưa có cuộc trò chuyện nào.",
    privacyTitle: "Khóa API được bảo vệ", privacyBody: "Khóa provider chỉ nằm trên Worker, không gửi xuống trình duyệt.",
    model: "Mô hình", autoFree: "Auto · Miễn phí", fast: "Nhanh", reasoning: "Suy luận", coding: "Lập trình", noRoute: "Chưa có tuyến API",
    exportChat: "Xuất Markdown", deleteChat: "Xóa hội thoại", providerPool: "NHÓM PROVIDER", refresh: "Làm mới",
    welcomeEyebrow: "MỘT ĐIỂM CHAT · NHIỀU API MIỄN PHÍ", welcomeTitle: "Hỏi bất cứ điều gì. Router lo phần còn lại.",
    welcomeBody: "Một giao diện cho nhiều nhà cung cấp. Gateway tự chọn tuyến khả dụng, tôn trọng quota và chuyển tuyến khi có lỗi tạm thời.",
    promptResearch: "Nghiên cứu nhanh", promptResearchSub: "Tóm tắt một chủ đề phức tạp", promptCode: "Viết và rà soát mã", promptCodeSub: "Tạo API có xử lý lỗi an toàn",
    promptTranslate: "Dịch ba ngôn ngữ", promptTranslateSub: "Việt, Anh và Trung giản thể", promptCompare: "So sánh mô hình", promptCompareSub: "Chọn tuyến phù hợp cho tác vụ",
    serverKeys: "Khóa phía máy chủ", responsibleFailover: "Failover có trách nhiệm", threeLanguages: "3 ngôn ngữ",
    placeholder: "Nhập tin nhắn cho Base27 AI…", toSend: "để gửi", send: "Gửi", stop: "Dừng",
    disclaimer: "API miễn phí có thể chậm hoặc tạm hết quota. Hãy kiểm tra thông tin quan trọng và không gửi dữ liệu nhạy cảm.",
    lastRequest: "YÊU CẦU GẦN NHẤT", provider: "Provider", servedModel: "Model thực", latency: "Độ trễ", routingPolicy: "CHÍNH SÁCH ROUTER",
    responsibleTitle: "Miễn phí, minh bạch, có giới hạn", responsibleBody: "Router tôn trọng Retry-After, circuit breaker và điều khoản provider. Không xoay khóa hoặc IP để né quota.",
    sequentialFailover: "Failover tuần tự", circuitBreaker: "Circuit breaker", honestAvailability: "Không cam kết 24/7",
    connection: "KẾT NỐI GATEWAY", settingsIntro: "Kết nối giao diện với Worker tương thích OpenAI của bạn.", gatewayUrl: "URL gateway", gatewayToken: "Gateway token (tùy chọn)",
    tokenNote: "Token gateway chỉ được lưu trong phiên của tab. Khóa OpenRouter, Groq, Gemini và các provider khác phải được lưu bằng Worker secrets.",
    show: "Hiện", hide: "Ẩn", cancel: "Hủy", save: "Lưu và kiểm tra", you: "Bạn", assistant: "Base27 AI", routedBy: "Định tuyến qua",
    configured: "Khả dụng", notConfigured: "Chưa cấu hình", paused: "Tạm nghỉ", availableSummary: "{ready}/{total} provider khả dụng",
    routing: "Đang chọn tuyến API…", testingProviders: "Đang thử provider khả dụng…", waitingProvider: "Đang chờ phản hồi từ mô hình…",
    clearConfirm: "Xóa cuộc trò chuyện này? Thao tác không thể hoàn tác.", copied: "Đã sao chép", copy: "Sao chép", regenerate: "Tạo lại câu trả lời", exported: "Đã xuất hội thoại",
    stopped: "Đã dừng yêu cầu", emptyExport: "Hội thoại chưa có nội dung để xuất.", authRequired: "Gateway yêu cầu token hợp lệ. Hãy mở Cài đặt để kết nối lại.",
    rateLimited: "Các API miễn phí đang giới hạn tần suất. Hãy thử lại{retry}.", noProviders: "Chưa có provider khả dụng. Hãy cấu hình Worker secrets hoặc chờ circuit breaker mở lại.",
    requestFailed: "Không thể hoàn tất yêu cầu", configHelp: "Kiểm tra URL gateway, token truy cập và trạng thái provider.", unknown: "Không xác định", justNow: "Vừa xong", messages: "tin nhắn",
    prompts: {
      research: "Giải thích ngắn gọn nhưng có cấu trúc về cách một LLM router định tuyến giữa nhiều API miễn phí. Nêu rõ lợi ích, giới hạn và rủi ro.",
      code: "Viết một ví dụ Node.js gọi API Chat Completions tương thích OpenAI, có timeout, xử lý 429 và không làm lộ API key.",
      translate: "Dịch câu sau sang tiếng Việt, tiếng Anh và tiếng Trung giản thể, giữ nguyên ý và giọng điệu: Chào mừng bạn đến với Base27 AI.",
      compare: "So sánh các tuyến free/auto, free/fast, free/reasoning và free/coding. Đề xuất trường hợp sử dụng phù hợp cho từng tuyến."
    },
    system: "Luôn trả lời bằng tiếng Việt rõ ràng, có cấu trúc. Nêu giới hạn hoặc sự không chắc chắn thay vì bịa thông tin."
  },
  en: {
    checking: "Checking", online: "Gateway ready", degraded: "Temporarily degraded", offline: "Setup required", language: "Language", theme: "Toggle theme",
    settings: "Settings", openSidebar: "Open conversations", newChat: "New conversation", recentChats: "Recent", noChats: "No conversations yet.",
    privacyTitle: "API keys protected", privacyBody: "Provider keys stay on the Worker and are never sent to the browser.",
    model: "Model", autoFree: "Auto · Free", fast: "Fast", reasoning: "Reasoning", coding: "Coding", noRoute: "No API route yet",
    exportChat: "Export Markdown", deleteChat: "Delete conversation", providerPool: "PROVIDER POOL", refresh: "Refresh",
    welcomeEyebrow: "ONE CHAT · MULTIPLE FREE APIS", welcomeTitle: "Ask anything. The router handles the rest.",
    welcomeBody: "One interface for multiple providers. The gateway selects an available route, respects quotas, and fails over on temporary errors.",
    promptResearch: "Quick research", promptResearchSub: "Summarize a complex topic", promptCode: "Write and review code", promptCodeSub: "Build an API with safe errors",
    promptTranslate: "Translate three languages", promptTranslateSub: "Vietnamese, English, Simplified Chinese", promptCompare: "Compare models", promptCompareSub: "Choose the right route for a task",
    serverKeys: "Server-side keys", responsibleFailover: "Responsible failover", threeLanguages: "3 languages",
    placeholder: "Message Base27 AI…", toSend: "to send", send: "Send", stop: "Stop",
    disclaimer: "Free APIs can be slow or temporarily out of quota. Verify important information and never send sensitive data.",
    lastRequest: "LATEST REQUEST", provider: "Provider", servedModel: "Served model", latency: "Latency", routingPolicy: "ROUTER POLICY",
    responsibleTitle: "Free, transparent, and bounded", responsibleBody: "The router respects Retry-After, circuit breakers, and provider terms. It never rotates keys or IPs to evade quotas.",
    sequentialFailover: "Sequential failover", circuitBreaker: "Circuit breaker", honestAvailability: "No 24/7 guarantee",
    connection: "GATEWAY CONNECTION", settingsIntro: "Connect this interface to your OpenAI-compatible Worker.", gatewayUrl: "Gateway URL", gatewayToken: "Gateway token (optional)",
    tokenNote: "The gateway token is stored only for this tab session. OpenRouter, Groq, Gemini, and other provider keys must remain in Worker secrets.",
    show: "Show", hide: "Hide", cancel: "Cancel", save: "Save and test", you: "You", assistant: "Base27 AI", routedBy: "Routed by",
    configured: "Available", notConfigured: "Not configured", paused: "Paused", availableSummary: "{ready}/{total} providers available",
    routing: "Selecting an API route…", testingProviders: "Trying an available provider…", waitingProvider: "Waiting for the model response…",
    clearConfirm: "Delete this conversation? This cannot be undone.", copied: "Copied", copy: "Copy", regenerate: "Regenerate response", exported: "Conversation exported",
    stopped: "Request stopped", emptyExport: "There is nothing to export yet.", authRequired: "The gateway requires a valid token. Open Settings to reconnect.",
    rateLimited: "Free APIs are rate-limited right now. Try again{retry}.", noProviders: "No provider is currently available. Configure Worker secrets or wait for the circuit breaker to recover.",
    requestFailed: "The request could not be completed", configHelp: "Check the gateway URL, access token, and provider status.", unknown: "Unknown", justNow: "Just now", messages: "messages",
    prompts: {
      research: "Explain concisely and structurally how an LLM router routes across multiple free APIs. Include benefits, limits, and risks.",
      code: "Write a Node.js example that calls an OpenAI-compatible Chat Completions API with a timeout, 429 handling, and no exposed API key.",
      translate: "Translate this sentence into Vietnamese, English, and Simplified Chinese while preserving meaning and tone: Welcome to Base27 AI.",
      compare: "Compare the free/auto, free/fast, free/reasoning, and free/coding routes. Recommend the best use case for each."
    },
    system: "Always answer clearly in English with useful structure. State limitations or uncertainty instead of inventing facts."
  },
  zh: {
    checking: "正在检查", online: "网关可用", degraded: "暂时不可用", offline: "需要配置", language: "语言", theme: "切换主题",
    settings: "设置", openSidebar: "打开对话列表", newChat: "新对话", recentChats: "最近", noChats: "暂无对话。",
    privacyTitle: "API 密钥受保护", privacyBody: "服务商密钥仅保存在 Worker 中，不会发送到浏览器。",
    model: "模型", autoFree: "自动 · 免费", fast: "快速", reasoning: "推理", coding: "编程", noRoute: "尚无 API 路由",
    exportChat: "导出 Markdown", deleteChat: "删除对话", providerPool: "服务商池", refresh: "刷新",
    welcomeEyebrow: "一个聊天窗口 · 多个免费 API", welcomeTitle: "尽管提问，其余交给路由器。",
    welcomeBody: "一个界面连接多个服务商。网关会选择可用路由、遵守配额，并在临时错误时进行故障转移。",
    promptResearch: "快速研究", promptResearchSub: "总结复杂主题", promptCode: "编写和审查代码", promptCodeSub: "构建安全错误处理的 API",
    promptTranslate: "三语翻译", promptTranslateSub: "越南语、英语、简体中文", promptCompare: "比较模型", promptCompareSub: "为任务选择合适路由",
    serverKeys: "服务端密钥", responsibleFailover: "负责任的故障转移", threeLanguages: "3 种语言",
    placeholder: "向 Base27 AI 发送消息…", toSend: "发送", send: "发送", stop: "停止",
    disclaimer: "免费 API 可能较慢或暂时没有配额。请核实重要信息，切勿发送敏感数据。",
    lastRequest: "最近请求", provider: "服务商", servedModel: "实际模型", latency: "延迟", routingPolicy: "路由策略",
    responsibleTitle: "免费、透明、有边界", responsibleBody: "路由器遵守 Retry-After、熔断器和服务条款，绝不轮换密钥或 IP 来规避配额。",
    sequentialFailover: "顺序故障转移", circuitBreaker: "熔断器", honestAvailability: "不保证 24/7 可用",
    connection: "网关连接", settingsIntro: "将此界面连接到兼容 OpenAI 的 Worker。", gatewayUrl: "网关 URL", gatewayToken: "网关令牌（可选）",
    tokenNote: "网关令牌仅保存在当前标签页会话中。OpenRouter、Groq、Gemini 等服务商密钥必须存放在 Worker secrets 中。",
    show: "显示", hide: "隐藏", cancel: "取消", save: "保存并测试", you: "你", assistant: "Base27 AI", routedBy: "路由服务商",
    configured: "可用", notConfigured: "未配置", paused: "暂停", availableSummary: "{ready}/{total} 个服务商可用",
    routing: "正在选择 API 路由…", testingProviders: "正在尝试可用服务商…", waitingProvider: "正在等待模型响应…",
    clearConfirm: "删除此对话吗？此操作无法撤销。", copied: "已复制", copy: "复制", regenerate: "重新生成回答", exported: "对话已导出",
    stopped: "请求已停止", emptyExport: "暂无内容可导出。", authRequired: "网关需要有效令牌。请打开设置重新连接。",
    rateLimited: "免费 API 当前受到速率限制。请稍后重试{retry}。", noProviders: "当前没有可用服务商。请配置 Worker secrets，或等待熔断器恢复。",
    requestFailed: "无法完成请求", configHelp: "请检查网关 URL、访问令牌和服务商状态。", unknown: "未知", justNow: "刚刚", messages: "条消息",
    prompts: {
      research: "请简洁且有结构地解释 LLM 路由器如何在多个免费 API 之间路由，并说明其优势、限制和风险。",
      code: "编写一个 Node.js 示例，调用兼容 OpenAI 的 Chat Completions API，包含超时、429 处理，并且不暴露 API 密钥。",
      translate: "将以下句子翻译成越南语、英语和简体中文，并保留原意和语气：欢迎使用 Base27 AI。",
      compare: "比较 free/auto、free/fast、free/reasoning 和 free/coding 路由，并为每种路由推荐合适的使用场景。"
    },
    system: "始终使用清晰、结构化的简体中文回答。请说明限制或不确定性，不要编造信息。"
  }
};

const STORAGE_KEY = "base27-chats-v2";
const ACTIVE_KEY = "base27-active-chat";
const MAX_CHATS = 30;
const MAX_MESSAGES = 80;

function safeParse(value, fallback) {
  try { return JSON.parse(value) ?? fallback; } catch { return fallback; }
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function newConversation() {
  const now = Date.now();
  return { id: makeId(), title: "", createdAt: now, updatedAt: now, model: "free/auto", messages: [], lastRoute: null };
}

function loadChats() {
  const stored = safeParse(localStorage.getItem(STORAGE_KEY), []);
  if (Array.isArray(stored) && stored.length) return stored.filter((chat) => chat && Array.isArray(chat.messages)).slice(0, MAX_CHATS);
  const legacy = safeParse(localStorage.getItem("base27-chat"), []);
  if (Array.isArray(legacy) && legacy.length) {
    const migrated = newConversation();
    migrated.messages = legacy.slice(-MAX_MESSAGES);
    migrated.title = legacy.find((message) => message.role === "user")?.content?.slice(0, 52) || "";
    return [migrated];
  }
  return [newConversation()];
}

const state = {
  language: localStorage.getItem("base27-language") || (navigator.language.startsWith("zh") ? "zh" : navigator.language.startsWith("en") ? "en" : "vi"),
  theme: localStorage.getItem("base27-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"),
  apiBase: localStorage.getItem("base27-api-base") || window.location.origin,
  token: sessionStorage.getItem("base27-gateway-token") || "",
  chats: loadChats(),
  activeChatId: localStorage.getItem(ACTIVE_KEY),
  providers: [],
  busy: false,
  abortController: null,
  routeTimers: []
};

if (!state.chats.some((chat) => chat.id === state.activeChatId)) state.activeChatId = state.chats[0].id;

const elements = {
  language: document.querySelector("#language-select"), theme: document.querySelector("#theme-button"),
  status: document.querySelector("#global-status"), statusLabel: document.querySelector("#global-status-label"), providerCount: document.querySelector("#provider-count"),
  sidebar: document.querySelector("#conversation-sidebar"), chatList: document.querySelector("#chat-list"), chatCount: document.querySelector("#chat-count"),
  newChat: document.querySelector("#new-chat"), mobileSidebar: document.querySelector("#mobile-sidebar-button"),
  insights: document.querySelector("#insights-panel"), mobileInsights: document.querySelector("#mobile-insights-button"), backdrop: document.querySelector("#drawer-backdrop"),
  activeTitle: document.querySelector("#active-chat-title"), model: document.querySelector("#model-select"), route: document.querySelector("#last-route"),
  exportChat: document.querySelector("#export-chat"), clear: document.querySelector("#clear-chat"), conversation: document.querySelector("#conversation"), welcome: document.querySelector("#welcome"),
  form: document.querySelector("#chat-form"), prompt: document.querySelector("#prompt"), charCount: document.querySelector("#character-count"),
  send: document.querySelector("#send-button"), stop: document.querySelector("#stop-button"),
  refresh: document.querySelector("#refresh-status"), providerList: document.querySelector("#provider-list"), providerSummary: document.querySelector("#provider-summary"),
  routeProvider: document.querySelector("#route-provider"), routeModel: document.querySelector("#route-model"), routeLatency: document.querySelector("#route-latency"),
  settingsButton: document.querySelector("#settings-button"), dialog: document.querySelector("#settings-dialog"), gatewayUrl: document.querySelector("#gateway-url"),
  gatewayToken: document.querySelector("#gateway-token"), toggleToken: document.querySelector("#toggle-token"), saveSettings: document.querySelector("#save-settings"),
  toastRegion: document.querySelector("#toast-region")
};

function t(key) { return copy[state.language]?.[key] ?? copy.vi[key] ?? key; }
function activeChat() { return state.chats.find((chat) => chat.id === state.activeChatId) || state.chats[0]; }
function apiUrl(path) { return `${state.apiBase.replace(/\/+$/, "")}${path}`; }
function authHeaders() { return state.token ? { Authorization: `Bearer ${state.token}` } : {}; }

function saveChats() {
  state.chats.sort((a, b) => b.updatedAt - a.updatedAt);
  state.chats = state.chats.slice(0, MAX_CHATS);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.chats)); } catch { /* Storage may be unavailable or full. */ }
  localStorage.setItem(ACTIVE_KEY, state.activeChatId);
}

function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = `toast${isError ? " is-error" : ""}`;
  toast.textContent = message;
  elements.toastRegion.append(toast);
  setTimeout(() => toast.remove(), 3200);
}

function iconButton(symbol, label, className = "message-action") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.title = label;
  button.setAttribute("aria-label", label);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", symbol);
  svg.append(use);
  button.append(svg);
  return button;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(t("copied"));
  } catch {
    showToast(`${t("requestFailed")}: clipboard`, true);
  }
}

function appendPlainText(container, text) {
  const blocks = text.split(/\n{2,}/);
  for (const block of blocks) {
    if (!block) continue;
    const paragraph = document.createElement("p");
    paragraph.textContent = block;
    container.append(paragraph);
  }
}

function renderRichText(container, value) {
  const text = String(value || "");
  const pattern = /```([^\n`]*)\n?([\s\S]*?)```/g;
  let cursor = 0;
  let match;
  while ((match = pattern.exec(text))) {
    appendPlainText(container, text.slice(cursor, match.index));
    const pre = document.createElement("pre");
    const label = document.createElement("span");
    label.className = "code-label";
    label.textContent = match[1].trim() || "code";
    const code = document.createElement("code");
    code.textContent = match[2].replace(/\n$/, "");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy";
    button.textContent = t("copy");
    button.addEventListener("click", () => copyText(code.textContent));
    pre.append(label, button, code);
    container.append(pre);
    cursor = pattern.lastIndex;
  }
  appendPlainText(container, text.slice(cursor));
}

function relativeTime(timestamp) {
  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1000));
  if (seconds < 60) return t("justNow");
  const locale = state.language === "zh" ? "zh-CN" : state.language;
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  if (seconds < 3600) return formatter.format(-Math.round(seconds / 60), "minute");
  if (seconds < 86400) return formatter.format(-Math.round(seconds / 3600), "hour");
  return formatter.format(-Math.round(seconds / 86400), "day");
}

function displayTitle(chat) { return chat.title?.trim() || t("newChat"); }

function renderChatList() {
  elements.chatList.replaceChildren();
  elements.chatCount.textContent = String(state.chats.filter((chat) => chat.messages.length).length);
  const visible = [...state.chats].sort((a, b) => b.updatedAt - a.updatedAt);
  if (!visible.some((chat) => chat.messages.length)) {
    const empty = document.createElement("p");
    empty.className = "chat-list-empty";
    empty.textContent = t("noChats");
    elements.chatList.append(empty);
    return;
  }
  for (const chat of visible.filter((entry) => entry.messages.length)) {
    const item = document.createElement("div");
    item.className = `chat-item${chat.id === state.activeChatId ? " is-active" : ""}`;
    const mark = document.createElement("span");
    mark.className = "chat-item-icon";
    mark.textContent = "B";
    const select = document.createElement("button");
    select.type = "button";
    select.className = "chat-item-copy";
    const title = document.createElement("strong");
    title.textContent = displayTitle(chat);
    const time = document.createElement("small");
    time.textContent = `${relativeTime(chat.updatedAt)} · ${chat.messages.length} ${t("messages")}`;
    select.append(title, time);
    select.addEventListener("click", () => selectChat(chat.id));
    const remove = iconButton("#i-trash", t("deleteChat"), "chat-delete");
    remove.addEventListener("click", () => deleteChat(chat.id));
    item.append(mark, select, remove);
    elements.chatList.append(item);
  }
}

function updateRouteDisplay(route = activeChat().lastRoute) {
  elements.routeProvider.textContent = route?.provider || "—";
  elements.routeModel.textContent = route?.model || "—";
  elements.routeLatency.textContent = route?.latency ? `${route.latency} ms` : "—";
  elements.route.textContent = route ? `${t("routedBy")}: ${route.provider} · ${route.model} · ${route.latency} ms` : t("noRoute");
}

function messageNode(message, index) {
  const article = document.createElement("article");
  article.className = `message message-${message.role}${message.error ? " message-error" : ""}`;
  article.dataset.index = String(index);
  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = message.error ? "!" : message.role === "user" ? "U" : "B";
  const content = document.createElement("div");
  content.className = "message-content";
  const header = document.createElement("div");
  header.className = "message-header";
  const meta = document.createElement("div");
  meta.className = "message-meta";
  const author = document.createElement("strong");
  author.textContent = message.role === "user" ? t("you") : t("assistant");
  meta.append(author);
  if (message.provider) {
    const badge = document.createElement("span");
    badge.className = "route-badge";
    badge.textContent = `${message.provider}${message.model ? ` · ${message.model}` : ""}`;
    meta.append(badge);
  }
  const actions = document.createElement("div");
  actions.className = "message-actions";
  const copyButton = iconButton("#i-copy", t("copy"));
  copyButton.addEventListener("click", () => copyText(message.content));
  actions.append(copyButton);
  if (message.role === "assistant" && !message.error) {
    const retry = iconButton("#i-retry", t("regenerate"));
    retry.addEventListener("click", () => regenerate(index));
    actions.append(retry);
  }
  const body = document.createElement("div");
  body.className = "message-body";
  renderRichText(body, message.content);
  header.append(meta, actions);
  content.append(header, body);
  article.append(avatar, content);
  return article;
}

function renderMessages() {
  const chat = activeChat();
  elements.conversation.querySelectorAll(".message, .routing-message").forEach((node) => node.remove());
  elements.welcome.hidden = chat.messages.length > 0;
  chat.messages.forEach((message, index) => elements.conversation.append(messageNode(message, index)));
  elements.activeTitle.textContent = displayTitle(chat);
  elements.model.value = chat.model || "free/auto";
  updateRouteDisplay(chat.lastRoute);
  renderChatList();
  requestAnimationFrame(() => { elements.conversation.scrollTop = elements.conversation.scrollHeight; });
}

function routingNode() {
  const article = document.createElement("article");
  article.className = "message routing-message";
  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = "B";
  const content = document.createElement("div");
  content.className = "message-content";
  const meta = document.createElement("div");
  meta.className = "message-meta";
  const author = document.createElement("strong"); author.textContent = t("assistant"); meta.append(author);
  const progress = document.createElement("div");
  progress.className = "routing-progress";
  const dots = document.createElement("span");
  dots.className = "routing-dots";
  for (let index = 0; index < 3; index += 1) dots.append(document.createElement("span"));
  const label = document.createElement("span");
  label.className = "routing-label";
  label.textContent = t("routing");
  progress.append(dots, label);
  content.append(meta, progress);
  article.append(avatar, content);
  return article;
}

function clearRouteTimers() {
  state.routeTimers.forEach(clearTimeout);
  state.routeTimers = [];
}

function setBusy(busy) {
  state.busy = busy;
  elements.conversation.setAttribute("aria-busy", String(busy));
  elements.prompt.disabled = busy;
  elements.send.hidden = busy;
  elements.stop.hidden = !busy;
}

function createChat(force = false) {
  const current = activeChat();
  if (!force && current && current.messages.length === 0) {
    closeDrawers();
    elements.prompt.focus();
    return;
  }
  const chat = newConversation();
  state.chats.unshift(chat);
  state.activeChatId = chat.id;
  saveChats();
  renderMessages();
  closeDrawers();
  elements.prompt.focus();
}

function selectChat(id) {
  if (state.busy || !state.chats.some((chat) => chat.id === id)) return;
  state.activeChatId = id;
  saveChats();
  renderMessages();
  closeDrawers();
}

function deleteChat(id) {
  if (state.busy || !confirm(t("clearConfirm"))) return;
  state.chats = state.chats.filter((chat) => chat.id !== id);
  if (!state.chats.length) state.chats = [newConversation()];
  if (state.activeChatId === id) state.activeChatId = state.chats[0].id;
  saveChats();
  renderMessages();
}

function applyLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  elements.language.value = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => { const value = t(node.dataset.i18nTitle); node.title = value; node.setAttribute("aria-label", value); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel)));
  renderMessages();
  renderProviderList(state.providers);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.querySelector('meta[name="theme-color"]').content = state.theme === "light" ? "#f4f7fb" : "#07101c";
}

function renderProviderList(providers) {
  elements.providerList.replaceChildren();
  const list = Array.isArray(providers) ? providers : [];
  const ready = list.filter((provider) => provider.available).length;
  elements.providerSummary.textContent = t("availableSummary").replace("{ready}", ready).replace("{total}", list.length);
  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "provider-empty";
    empty.textContent = t("configHelp");
    elements.providerList.append(empty);
    return;
  }
  for (const provider of list) {
    const item = document.createElement("div");
    item.className = `provider-item ${provider.available ? "is-ready" : provider.configured ? "is-paused" : ""}`;
    const logo = document.createElement("span");
    logo.className = "provider-logo";
    logo.textContent = String(provider.name || provider.id || "AI").replace(/[^A-Za-z0-9]/g, "").slice(0, 2);
    const info = document.createElement("div");
    info.className = "provider-copy";
    const name = document.createElement("strong"); name.textContent = provider.name || provider.id || t("unknown");
    const detail = document.createElement("small"); detail.textContent = provider.id || t("unknown");
    info.append(name, detail);
    const status = document.createElement("span");
    status.className = "provider-state";
    const light = document.createElement("i");
    const label = document.createElement("span"); label.textContent = provider.available ? t("configured") : provider.configured ? t("paused") : t("notConfigured");
    status.append(light, label);
    item.append(logo, info, status);
    elements.providerList.append(item);
  }
}

async function refreshStatus() {
  elements.status.className = "status-pill status-checking";
  elements.statusLabel.textContent = t("checking");
  elements.providerCount.textContent = "—";
  elements.refresh.disabled = true;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(apiUrl("/api/status"), { headers: authHeaders(), signal: controller.signal });
    const data = await response.json();
    if (!response.ok && !Array.isArray(data.providers)) throw new Error(`HTTP ${response.status}`);
    state.providers = Array.isArray(data.providers) ? data.providers : [];
    const configured = Number(data.configuredProviders ?? state.providers.filter((provider) => provider.configured).length);
    const available = state.providers.filter((provider) => provider.available).length;
    const total = state.providers.length;
    elements.status.className = `status-pill ${available > 0 ? "status-ready" : configured > 0 ? "status-checking" : "status-error"}`;
    elements.statusLabel.textContent = available > 0 ? t("online") : configured > 0 ? t("degraded") : t("offline");
    elements.providerCount.textContent = `${available}/${total}`;
    renderProviderList(state.providers);
  } catch {
    state.providers = [];
    elements.status.className = "status-pill status-error";
    elements.statusLabel.textContent = t("offline");
    elements.providerCount.textContent = "0";
    renderProviderList([]);
  } finally {
    clearTimeout(timeout);
    elements.refresh.disabled = false;
  }
}

async function readResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return response.json();
  return { error: { message: await response.text() } };
}

function userFacingError(status, data, retryAfter) {
  if (status === 401 || status === 403) return t("authRequired");
  if (status === 429) {
    const retry = retryAfter ? (state.language === "zh" ? `（${retryAfter} 秒后）` : state.language === "en" ? ` in ${retryAfter} seconds` : ` sau ${retryAfter} giây`) : "";
    return t("rateLimited").replace("{retry}", retry);
  }
  if (status === 503) return t("noProviders");
  const detail = data?.error?.message || data?.message || `HTTP ${status}`;
  return `${t("requestFailed")}: ${detail}. ${t("configHelp")}`;
}

async function requestAssistant() {
  if (state.busy) return;
  const chat = activeChat();
  if (!chat.messages.some((message) => message.role === "user")) return;
  setBusy(true);
  const routing = routingNode();
  elements.conversation.append(routing);
  elements.conversation.scrollTop = elements.conversation.scrollHeight;
  const label = routing.querySelector(".routing-label");
  state.routeTimers = [
    setTimeout(() => { if (label.isConnected) label.textContent = t("testingProviders"); }, 700),
    setTimeout(() => { if (label.isConnected) label.textContent = t("waitingProvider"); }, 2300)
  ];
  state.abortController = new AbortController();
  const started = performance.now();

  try {
    const response = await fetch(apiUrl("/v1/chat/completions"), {
      method: "POST",
      signal: state.abortController.signal,
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({
        model: chat.model || "free/auto",
        messages: [{ role: "system", content: t("system") }, ...chat.messages.filter((message) => !message.error).map(({ role, content }) => ({ role, content }))],
        temperature: 0.7,
        max_tokens: 4096
      })
    });
    const data = await readResponse(response);
    if (!response.ok) throw Object.assign(new Error("gateway"), { status: response.status, data, retryAfter: response.headers.get("Retry-After") });
    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) throw Object.assign(new Error("empty"), { status: 502, data: { error: { message: "Empty provider response" } } });
    const latency = Math.max(1, Math.round(performance.now() - started));
    const provider = response.headers.get("X-Base27-Provider") || data.provider || t("unknown");
    const model = response.headers.get("X-Base27-Model") || data.model || t("unknown");
    chat.messages.push({ role: "assistant", content: answer, provider, model, latency, usage: data.usage || null, createdAt: Date.now() });
    chat.lastRoute = { provider, model, latency };
    chat.updatedAt = Date.now();
  } catch (error) {
    if (error.name === "AbortError") {
      showToast(t("stopped"));
    } else {
      chat.messages.push({
        role: "assistant",
        content: userFacingError(error.status || 0, error.data, error.retryAfter),
        provider: "gateway",
        error: true,
        createdAt: Date.now()
      });
      chat.updatedAt = Date.now();
    }
  } finally {
    clearRouteTimers();
    routing.remove();
    state.abortController = null;
    setBusy(false);
    saveChats();
    renderMessages();
    elements.prompt.focus();
    refreshStatus();
  }
}

async function sendMessage(value) {
  const text = value.trim();
  if (!text || state.busy) return;
  const chat = activeChat();
  chat.messages.push({ role: "user", content: text, createdAt: Date.now() });
  if (!chat.title) chat.title = text.replace(/\s+/g, " ").slice(0, 52);
  chat.updatedAt = Date.now();
  chat.model = elements.model.value;
  chat.messages = chat.messages.slice(-MAX_MESSAGES);
  saveChats();
  renderMessages();
  await requestAssistant();
}

async function regenerate(index) {
  if (state.busy) return;
  const chat = activeChat();
  let userIndex = index - 1;
  while (userIndex >= 0 && chat.messages[userIndex].role !== "user") userIndex -= 1;
  if (userIndex < 0) return;
  chat.messages = chat.messages.slice(0, userIndex + 1);
  chat.updatedAt = Date.now();
  saveChats();
  renderMessages();
  await requestAssistant();
}

function exportConversation() {
  const chat = activeChat();
  if (!chat.messages.length) { showToast(t("emptyExport"), true); return; }
  const lines = [`# ${displayTitle(chat)}`, "", `- Model route: ${chat.model}`, `- Gateway: ${state.apiBase}`, `- Exported: ${new Date().toISOString()}`, ""];
  for (const message of chat.messages) {
    lines.push(`## ${message.role === "user" ? t("you") : t("assistant")}`, "", message.content, "");
    if (message.provider) lines.push(`> ${t("routedBy")}: ${message.provider}${message.model ? ` · ${message.model}` : ""}`, "");
  }
  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `base27-chat-${new Date().toISOString().slice(0, 10)}.md`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(t("exported"));
}

function updateCharacterCount() {
  elements.charCount.textContent = `${elements.prompt.value.length.toLocaleString()} / 24k`;
  elements.prompt.style.height = "auto";
  elements.prompt.style.height = `${Math.min(elements.prompt.scrollHeight, 180)}px`;
}

function closeDrawers() {
  elements.sidebar.classList.remove("is-open");
  elements.insights.classList.remove("is-open");
  elements.backdrop.hidden = true;
}

function toggleDrawer(drawer) {
  const shouldOpen = !drawer.classList.contains("is-open");
  closeDrawers();
  if (shouldOpen) {
    drawer.classList.add("is-open");
    elements.backdrop.hidden = false;
  }
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = elements.prompt.value;
  elements.prompt.value = "";
  updateCharacterCount();
  sendMessage(value);
});
elements.prompt.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey && !event.isComposing) { event.preventDefault(); elements.form.requestSubmit(); }
});
elements.prompt.addEventListener("input", updateCharacterCount);
elements.stop.addEventListener("click", () => state.abortController?.abort());
elements.newChat.addEventListener("click", () => createChat());
elements.clear.addEventListener("click", () => deleteChat(state.activeChatId));
elements.exportChat.addEventListener("click", exportConversation);
elements.model.addEventListener("change", () => { const chat = activeChat(); chat.model = elements.model.value; chat.updatedAt = Date.now(); saveChats(); });
elements.language.addEventListener("change", () => {
  state.language = elements.language.value;
  localStorage.setItem("base27-language", state.language);
  applyLanguage();
  refreshStatus();
});
elements.theme.addEventListener("click", () => { state.theme = state.theme === "dark" ? "light" : "dark"; localStorage.setItem("base27-theme", state.theme); applyTheme(); });
elements.refresh.addEventListener("click", refreshStatus);
elements.mobileSidebar.addEventListener("click", () => toggleDrawer(elements.sidebar));
elements.mobileInsights.addEventListener("click", () => toggleDrawer(elements.insights));
elements.backdrop.addEventListener("click", closeDrawers);
elements.settingsButton.addEventListener("click", () => {
  elements.gatewayUrl.value = state.apiBase;
  elements.gatewayToken.value = state.token;
  elements.gatewayToken.type = "password";
  elements.toggleToken.textContent = t("show");
  elements.dialog.showModal();
});
elements.toggleToken.addEventListener("click", () => {
  const visible = elements.gatewayToken.type === "text";
  elements.gatewayToken.type = visible ? "password" : "text";
  elements.toggleToken.textContent = t(visible ? "show" : "hide");
});
elements.saveSettings.addEventListener("click", (event) => {
  event.preventDefault();
  state.apiBase = elements.gatewayUrl.value.trim().replace(/\/+$/, "") || window.location.origin;
  state.token = elements.gatewayToken.value.trim();
  localStorage.setItem("base27-api-base", state.apiBase);
  sessionStorage.setItem("base27-gateway-token", state.token);
  elements.dialog.close();
  refreshStatus();
});
document.querySelectorAll("[data-prompt]").forEach((button) => button.addEventListener("click", () => {
  elements.prompt.value = t("prompts")[button.dataset.prompt];
  updateCharacterCount();
  elements.prompt.focus();
}));
window.addEventListener("resize", () => { if (window.innerWidth > 980) closeDrawers(); });

applyTheme();
applyLanguage();
updateCharacterCount();
refreshStatus();
