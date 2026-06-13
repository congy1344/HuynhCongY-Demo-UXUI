# StudyFlow

StudyFlow là website dashboard quản lý đồ án dành cho sinh viên. Dự án được xây dựng như một sản phẩm demo UX/UI hoàn chỉnh để thể hiện khả năng thiết kế giao diện, tổ chức React component và xử lý dữ liệu phía client.

## Điểm nổi bật

- Dashboard tổng quan với thống kê được tính từ dữ liệu công việc.
- Tìm kiếm và kết hợp bộ lọc theo trạng thái, độ ưu tiên.
- Thêm, sửa, xóa và xem chi tiết công việc bằng modal.
- Form validation hiển thị lỗi trực tiếp tại trường nhập.
- Theo dõi và cập nhật tiến độ từng cột mốc đồ án.
- Chỉnh sửa hồ sơ sinh viên và thông tin đồ án.
- Empty state, success toast và hộp xác nhận xóa.
- Dữ liệu được lưu vào `localStorage` với namespace `studyflow:*`.
- Responsive cho desktop, tablet và mobile.

## Design Direction

Giao diện theo phong cách **editorial productivity dashboard**: thực dụng, có cá tính và hạn chế hiệu ứng trang trí không cần thiết.

- Màu chủ đạo: navy `#18212F`, nền kem `#F5F1E8`.
- Màu nhấn: cam đất `#C86542`, xanh sage `#718B72`.
- Heading dùng Newsreader; nội dung dùng DM Sans.
- Spacing theo hệ 4/8px, card radius 16px, button radius 10px.
- Card có border rõ và bóng đổ nhẹ; trạng thái luôn có cả màu và nhãn chữ.
- Icon nét mảnh từ Lucide React.

## Công nghệ

- ReactJS 18, JavaScript và Vite
- React Router DOM
- CSS thuần
- Lucide React
- Vitest
- localStorage

## Cài đặt và chạy

Yêu cầu Node.js 18 trở lên.

```bash
npm install
npm run dev
```

Các lệnh kiểm tra:

```bash
npm run lint
npm test
npm run build
```

## Cấu trúc chính

```text
src/
├── components/
│   ├── dashboard/     # Card thống kê
│   ├── layout/        # App shell và sidebar responsive
│   ├── tasks/         # Task card và form công việc
│   └── ui/            # Badge, modal, toast, progress bar...
├── context/           # State dùng chung của ứng dụng
├── data/              # Mock data và label
├── hooks/             # Custom hook localStorage
├── pages/             # Dashboard, Tasks, Milestones, Settings
├── styles/            # Design system và responsive CSS
└── utils/             # Logic lọc, thống kê và định dạng
```

## Kiến thức React được thể hiện

- **Component và props:** `TaskCard`, `StatCard`, `Badge`, `ProgressBar`, `Modal` nhận dữ liệu và callback qua props.
- **useState:** quản lý form, modal, bộ lọc, toast và mobile navigation.
- **useEffect:** đóng modal bằng phím Escape và đồng bộ dữ liệu vào localStorage.
- **useMemo:** tính thống kê, deadline gần nhất và danh sách task sau khi lọc.
- **Custom hook:** `useLocalStorage` tái sử dụng logic lưu dữ liệu trình duyệt.
- **Context:** `StudyFlowContext` cung cấp task, milestone và profile cho các route.
- **Event handling:** submit form, search, filter, CRUD task, cập nhật progress và chỉnh sửa cài đặt.

## Kịch bản demo gợi ý

1. Mở Dashboard để giới thiệu hướng thiết kế và các thống kê động.
2. Vào Công việc, kết hợp tìm kiếm với bộ lọc trạng thái.
3. Mở form thêm mới nhưng submit thiếu dữ liệu để trình bày validation.
4. Thêm hoặc sửa một task, sau đó refresh trang để chứng minh localStorage.
5. Cập nhật tiến độ trong Cột mốc và quan sát tiến độ sidebar thay đổi.
6. Sửa tên đồ án trong Cài đặt để cho thấy state dùng chung toàn ứng dụng.

## Lịch sử triển khai

Project được chia thành các commit rõ ràng theo từng giai đoạn:

1. Khởi tạo Vite, React và routing.
2. Xây dựng design system và responsive app shell.
3. Hoàn thiện dashboard tổng quan.
4. Thêm luồng quản lý công việc tương tác.
5. Thêm milestone, settings và localStorage.
6. Thêm kiểm thử và xác minh chất lượng.
7. Hoàn thiện tài liệu dự án.

## Ghi chú

Đây là frontend demo, không sử dụng backend hoặc xác thực thật. Có thể xóa các khóa bắt đầu bằng `studyflow:` trong localStorage để khôi phục dữ liệu mẫu ban đầu.
