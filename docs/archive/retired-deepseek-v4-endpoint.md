# 🗄️ Endpoint DeepSeek‑V4‑Flash‑0731 đã nghỉ

Kho này ban đầu là tài liệu tiếng Việt cho endpoint cộng đồng:

- Space: [victor/DeepSeek-V4-Flash-0731-free-endpoint](https://huggingface.co/spaces/victor/DeepSeek-V4-Flash-0731-free-endpoint)
- Tác giả Space: Victor Mustar (`victor`)
- Model: [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
- Engine khi còn hoạt động: vLLM 0.26.0, DSpark, 4× NVIDIA H200 theo mô tả Space

## Trạng thái

Space đã đăng thông báo **“This Free Endpoint Has Retired”**. URL API công khai trước đây không còn được coi là endpoint hoạt động và không được router mới sử dụng.

## Giá trị lịch sử

Nội dung về kiến trúc MoE, DSpark, context và mô hình DeepSeek vẫn có giá trị tham khảo tại model card/báo cáo gốc. Tuy nhiên, những đoạn `curl`, Python và cấu hình `pi` dùng URL endpoint cũ chỉ mang tính lưu trữ.

## Hướng thay thế

Phiên bản 2.0 chuyển từ một endpoint do người khác tài trợ sang gateway BYOK đa nhà cung cấp. Người vận hành sở hữu Worker và API key của mình, có thể cấu hình nhiều free tier và failover hợp lệ mà không phụ thuộc vào Space đã nghỉ.

Không có mã nguồn, khóa API hoặc tài nguyên GPU nào của Victor Mustar được sao chép sang phiên bản mới.
