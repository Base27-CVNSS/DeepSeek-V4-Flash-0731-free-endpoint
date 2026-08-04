const copy = {
  vi: {
    checking: "Đang kiểm tra", online: "Sẵn sàng", offline: "Cần cấu hình", language: "Ngôn ngữ",
    settings: "Cài đặt", providerPool: "Nhóm nhà cung cấp", refresh: "Làm mới", routingPolicy: "CHÍNH SÁCH ĐỊNH TUYẾN",
    resilientTitle: "Failover có trách nhiệm", resilientBody: "Tôn trọng quota, Retry-After và điều khoản. Không xoay khóa hoặc IP để né giới hạn.",
    circuitBreaker: "Circuit breaker", sequentialFailover: "Failover tuần tự", keysServerSide: "Khóa chỉ ở máy chủ",
    model: "Mô hình", autoFree: "Tự động · Miễn phí", fast: "Nhanh", reasoning: "Suy luận", coding: "Lập trình",
    noRoute: "Chưa định tuyến", clear: "Xóa hội thoại", welcomeEyebrow: "MỘT API · NHIỀU NHÀ CUNG CẤP",
    welcomeTitle: "Trò chuyện với các mô hình miễn phí", welcomeBody: "Gateway chọn một provider đang khả dụng và chuyển sang provider khác khi gặp lỗi tạm thời hoặc hết quota.",
    promptArchitecture: "Giải thích kiến trúc router", promptCode: "Viết một API Node.js", promptCompare: "So sánh các mô hình",
    placeholder: "Nhập câu hỏi…", send: "Gửi", disclaimer: "API miễn phí có thể chậm hoặc tạm hết quota. Không gửi dữ liệu nhạy cảm.",
    connection: "KẾT NỐI", gatewayUrl: "URL gateway", gatewayToken: "Gateway token (tùy chọn)",
    tokenNote: "Token truy cập được lưu trong sessionStorage của tab này; khóa provider không bao giờ nhập ở giao diện.",
    cancel: "Hủy", save: "Lưu và kiểm tra", you: "Bạn", assistant: "Trợ lý", routedBy: "Định tuyến qua",
    configured: "đã cấu hình", notConfigured: "chưa cấu hình", paused: "tạm nghỉ", thinking: "Đang định tuyến…",
    clearConfirm: "Xóa toàn bộ hội thoại hiện tại?", errorPrefix: "Không thể trả lời", configHelp: "Hãy mở Cài đặt hoặc cấu hình API key trên Worker.",
    prompts: {
      architecture: "Giải thích kiến trúc của một LLM gateway có nhiều provider, circuit breaker và failover.",
      code: "Viết một API Node.js nhỏ tương thích OpenAI Chat Completions và có xử lý lỗi an toàn.",
      compare: "So sánh OpenRouter, Groq, Gemini và Cerebras cho một chatbot miễn phí quy mô nhỏ."
    },
    system: "Luôn trả lời bằng tiếng Việt rõ ràng. Nếu không chắc chắn, hãy nói rõ giới hạn thay vì bịa thông tin."
  },
  en: {
    checking: "Checking", online: "Ready", offline: "Setup required", language: "Language",
    settings: "Settings", providerPool: "Provider pool", refresh: "Refresh", routingPolicy: "ROUTING POLICY",
    resilientTitle: "Responsible failover", resilientBody: "Respect quotas, Retry-After, and provider terms. Never rotate keys or IPs to evade limits.",
    circuitBreaker: "Circuit breaker", sequentialFailover: "Sequential failover", keysServerSide: "Server-side keys only",
    model: "Model", autoFree: "Auto · Free", fast: "Fast", reasoning: "Reasoning", coding: "Coding",
    noRoute: "Not routed yet", clear: "Clear chat", welcomeEyebrow: "ONE API · MULTIPLE PROVIDERS",
    welcomeTitle: "Chat with free-tier models", welcomeBody: "The gateway selects an available provider and fails over when a temporary error or quota limit occurs.",
    promptArchitecture: "Explain router architecture", promptCode: "Build a Node.js API", promptCompare: "Compare the models",
    placeholder: "Type a message…", send: "Send", disclaimer: "Free APIs can be slow or temporarily out of quota. Do not send sensitive data.",
    connection: "CONNECTION", gatewayUrl: "Gateway URL", gatewayToken: "Gateway token (optional)",
    tokenNote: "The access token is kept in this tab's sessionStorage; provider keys are never entered in the UI.",
    cancel: "Cancel", save: "Save and test", you: "You", assistant: "Assistant", routedBy: "Routed by",
    configured: "configured", notConfigured: "not configured", paused: "paused", thinking: "Routing…",
    clearConfirm: "Clear the current conversation?", errorPrefix: "Unable to answer", configHelp: "Open Settings or configure provider API keys on the Worker.",
    prompts: {
      architecture: "Explain the architecture of an LLM gateway with multiple providers, circuit breakers, and failover.",
      code: "Write a small Node.js API compatible with OpenAI Chat Completions and safe error handling.",
      compare: "Compare OpenRouter, Groq, Gemini, and Cerebras for a small free-tier chatbot."
    },
    system: "Always answer clearly in English. State uncertainty and limitations instead of inventing facts."
  },
  zh: {
    checking: "正在检查", online: "可用", offline: "需要配置", language: "语言",
    settings: "设置", providerPool: "服务商池", refresh: "刷新", routingPolicy: "路由策略",
    resilientTitle: "负责任的故障转移", resilientBody: "遵守配额、Retry-After 和服务条款。不得轮换密钥或 IP 来规避限制。",
    circuitBreaker: "熔断器", sequentialFailover: "顺序故障转移", keysServerSide: "密钥仅存服务器",
    model: "模型", autoFree: "自动 · 免费", fast: "快速", reasoning: "推理", coding: "编程",
    noRoute: "尚未路由", clear: "清空对话", welcomeEyebrow: "一个 API · 多个服务商",
    welcomeTitle: "与免费额度模型聊天", welcomeBody: "网关选择可用的服务商，并在临时错误或额度耗尽时切换到其他服务商。",
    promptArchitecture: "解释路由器架构", promptCode: "编写 Node.js API", promptCompare: "比较不同模型",
    placeholder: "输入消息…", send: "发送", disclaimer: "免费 API 可能较慢或暂时没有额度。请勿发送敏感数据。",
    connection: "连接", gatewayUrl: "网关 URL", gatewayToken: "网关令牌（可选）",
    tokenNote: "访问令牌仅保存在当前标签页的 sessionStorage 中；服务商密钥绝不会在界面中输入。",
    cancel: "取消", save: "保存并测试", you: "你", assistant: "助手", routedBy: "路由服务商",
    configured: "已配置", notConfigured: "未配置", paused: "暂停", thinking: "正在路由…",
    clearConfirm: "清空当前对话吗？", errorPrefix: "无法回答", configHelp: "请打开设置，或在 Worker 中配置服务商 API 密钥。",
    prompts: {
      architecture: "解释一个包含多个服务商、熔断器和故障转移机制的 LLM 网关架构。",
      code: "编写一个兼容 OpenAI Chat Completions 并具有安全错误处理的 Node.js 小型 API。",
      compare: "比较 OpenRouter、Groq、Gemini 和 Cerebras 在小型免费聊天机器人中的适用性。"
    },
    system: "始终使用清晰的简体中文回答。不确定时请说明限制，不要编造信息。"
  }
};

const state = {
  language: localStorage.getItem("base27-language") || (navigator.language.startsWith("zh") ? "zh" : navigator.language.startsWith("en") ? "en" : "vi"),
  apiBase: localStorage.getItem("base27-api-base") || window.location.origin,
  token: sessionStorage.getItem("base27-gateway-token") || "",
  messages: JSON.parse(localStorage.getItem("base27-chat") || "[]"),
  busy: false,
  abortController: null
};

const elements = {
  language: document.querySelector("#language-select"), model: document.querySelector("#model-select"),
  conversation: document.querySelector("#conversation"), welcome: document.querySelector("#welcome"), form: document.querySelector("#chat-form"),
  prompt: document.querySelector("#prompt"), send: document.querySelector("#send-button"), status: document.querySelector("#global-status"),
  providerList: document.querySelector("#provider-list"), route: document.querySelector("#last-route"), clear: document.querySelector("#clear-chat"),
  refresh: document.querySelector("#refresh-status"), settingsButton: document.querySelector("#settings-button"),
  dialog: document.querySelector("#settings-dialog"), gatewayUrl: document.querySelector("#gateway-url"),
  gatewayToken: document.querySelector("#gateway-token"), saveSettings: document.querySelector("#save-settings")
};

function t(key) { return copy[state.language][key] ?? copy.vi[key] ?? key; }
function apiUrl(path) { return `${state.apiBase.replace(/\/+$/, "")}${path}`; }

function applyLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  elements.language.value = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => { node.title = t(node.dataset.i18nTitle); });
  renderMessages();
}

function messageNode(message, index) {
  const article = document.createElement("article");
  article.className = `message message-${message.role}`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = message.role === "user" ? "U" : "B";

  const content = document.createElement("div");
  content.className = "message-content";
  const meta = document.createElement("div");
  meta.className = "message-meta";
  meta.textContent = message.role === "user" ? t("you") : `${t("assistant")}${message.provider ? ` · ${message.provider}` : ""}`;

  const text = document.createElement("pre");
  text.className = "message-text";
  text.textContent = message.content;
  content.append(meta, text);
  article.append(avatar, content);
  article.dataset.index = String(index);
  return article;
}

function renderMessages() {
  elements.conversation.querySelectorAll(".message").forEach((node) => node.remove());
  elements.welcome.hidden = state.messages.length > 0;
  state.messages.forEach((message, index) => elements.conversation.append(messageNode(message, index)));
  requestAnimationFrame(() => { elements.conversation.scrollTop = elements.conversation.scrollHeight; });
}

function typingNode() {
  const article = messageNode({ role: "assistant", content: "" }, -1);
  article.id = "typing-message";
  const text = article.querySelector(".message-text");
  text.replaceWith(Object.assign(document.createElement("div"), { className: "typing", innerHTML: "<span></span><span></span><span></span>" }));
  article.querySelector(".message-meta").textContent = t("thinking");
  return article;
}

function authHeaders() {
  return state.token ? { Authorization: `Bearer ${state.token}` } : {};
}

async function refreshStatus() {
  elements.status.className = "status-pill status-checking";
  elements.status.querySelector("span:last-child").textContent = t("checking");
  elements.providerList.replaceChildren();

  try {
    const response = await fetch(apiUrl("/api/status"), { headers: authHeaders() });
    const data = await response.json();
    elements.status.className = `status-pill ${data.configuredProviders > 0 ? "status-ready" : "status-error"}`;
    elements.status.querySelector("span:last-child").textContent = data.configuredProviders > 0 ? t("online") : t("offline");

    for (const provider of data.providers || []) {
      const item = document.createElement("div");
      item.className = `provider-item ${provider.available ? "is-ready" : provider.configured ? "is-paused" : ""}`;
      const light = document.createElement("span"); light.className = "provider-light";
      const copyNode = document.createElement("div");
      const name = document.createElement("strong"); name.textContent = provider.name;
      const detail = document.createElement("small"); detail.textContent = provider.available ? t("configured") : provider.configured ? t("paused") : t("notConfigured");
      copyNode.append(name, detail);
      const badge = document.createElement("span"); badge.className = "provider-badge"; badge.textContent = provider.id;
      item.append(light, copyNode, badge);
      elements.providerList.append(item);
    }
  } catch {
    elements.status.className = "status-pill status-error";
    elements.status.querySelector("span:last-child").textContent = t("offline");
    const note = document.createElement("p"); note.className = "message-text"; note.textContent = t("configHelp");
    elements.providerList.append(note);
  }
}

function persistMessages() { localStorage.setItem("base27-chat", JSON.stringify(state.messages.slice(-80))); }

async function sendMessage(text) {
  if (!text.trim() || state.busy) return;
  state.busy = true;
  state.messages.push({ role: "user", content: text.trim() });
  persistMessages(); renderMessages();
  const typing = typingNode(); elements.conversation.append(typing); elements.conversation.scrollTop = elements.conversation.scrollHeight;
  elements.send.disabled = true; elements.prompt.disabled = true;
  state.abortController = new AbortController();

  try {
    const response = await fetch(apiUrl("/v1/chat/completions"), {
      method: "POST",
      signal: state.abortController.signal,
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({
        model: elements.model.value,
        messages: [{ role: "system", content: t("system") }, ...state.messages.map(({ role, content }) => ({ role, content }))],
        temperature: 0.7,
        max_tokens: 4096
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data?.error?.message || `HTTP ${response.status}`);
    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) throw new Error("The provider returned an empty response.");
    const provider = response.headers.get("X-Base27-Provider") || data.provider || "unknown";
    const model = response.headers.get("X-Base27-Model") || data.model || "unknown";
    state.messages.push({ role: "assistant", content: answer, provider });
    elements.route.textContent = `${t("routedBy")}: ${provider} · ${model}`;
  } catch (error) {
    if (error.name !== "AbortError") {
      state.messages.push({ role: "assistant", content: `${t("errorPrefix")}: ${error.message}\n\n${t("configHelp")}`, provider: "gateway" });
    }
  } finally {
    typing.remove(); state.busy = false; state.abortController = null;
    elements.send.disabled = false; elements.prompt.disabled = false;
    persistMessages(); renderMessages(); elements.prompt.focus();
  }
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault(); const text = elements.prompt.value; elements.prompt.value = ""; elements.prompt.style.height = "auto"; sendMessage(text);
});
elements.prompt.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); elements.form.requestSubmit(); }
});
elements.prompt.addEventListener("input", () => {
  elements.prompt.style.height = "auto"; elements.prompt.style.height = `${Math.min(elements.prompt.scrollHeight, 180)}px`;
});
elements.language.addEventListener("change", () => { state.language = elements.language.value; localStorage.setItem("base27-language", state.language); applyLanguage(); refreshStatus(); });
elements.clear.addEventListener("click", () => { if (confirm(t("clearConfirm"))) { state.messages = []; persistMessages(); renderMessages(); elements.route.textContent = t("noRoute"); } });
elements.refresh.addEventListener("click", refreshStatus);
elements.settingsButton.addEventListener("click", () => { elements.gatewayUrl.value = state.apiBase; elements.gatewayToken.value = state.token; elements.dialog.showModal(); });
elements.saveSettings.addEventListener("click", (event) => {
  event.preventDefault();
  state.apiBase = elements.gatewayUrl.value.trim().replace(/\/+$/, "") || window.location.origin;
  state.token = elements.gatewayToken.value.trim();
  localStorage.setItem("base27-api-base", state.apiBase);
  sessionStorage.setItem("base27-gateway-token", state.token);
  elements.dialog.close(); refreshStatus();
});
document.querySelectorAll("[data-prompt]").forEach((button) => button.addEventListener("click", () => { elements.prompt.value = t("prompts")[button.dataset.prompt]; elements.prompt.focus(); }));

applyLanguage();
refreshStatus();
