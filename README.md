# HealthApp - Ứng dụng Quản lý Sức khỏe

Ứng dụng web quản lý sức khỏe và theo dõi chế độ ăn uống được xây dựng bằng React, TypeScript và Vite.

## 🚀 Tính năng chính

- **Trang chủ**: Hiển thị tổng quan về sức khỏe với biểu đồ tiến độ và hình ảnh bữa ăn
- **Trang ghi chép**: Theo dõi và ghi chép các hoạt động sức khỏe cá nhân
- **Trang cột**: Hiển thị các bài viết và thông tin về sức khỏe
- **Biểu đồ**: Theo dõi tiến độ sức khỏe với biểu đồ tròn và biểu đồ đường
- **Quản lý bữa ăn**: Ghi chép và theo dõi các bữa ăn trong ngày
- **Menu điều hướng**: Giao diện thân thiện với menu hamburger responsive

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 19.1.1 + TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.8.1
- **Charts**: Recharts 3.1.2
- **Styling**: CSS Modules
- **Linting**: ESLint + TypeScript ESLint
- **Code Formatting**: Prettier

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header/         # Header với navigation
│   ├── Footer/         # Footer
│   ├── MealCard/       # Card hiển thị bữa ăn
│   ├── HexMenuItem/    # Menu item hình lục giác
│   ├── Button/         # Component button
│   └── icons/          # Các icon SVG/PNG
├── pages/              # Các trang chính
│   ├── TopPage/        # Trang chủ
│   ├── MyRecordPage/   # Trang ghi chép
│   └── ColumnPage/     # Trang cột
├── App.tsx             # Component chính
└── main.tsx            # Entry point
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 18 trở lên)
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng ở môi trường development
```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Build ứng dụng cho production
```bash
npm run build
```

### Preview build production
```bash
npm run preview
```

### Kiểm tra code với ESLint
```bash
npm run lint
```

## 🎯 Các trang chính

### 1. Trang chủ (/)
- Biểu đồ tiến độ sức khỏe
- Danh sách bữa ăn gần đây
- Menu điều hướng nhanh
- Hình ảnh chính

### 2. Trang ghi chép (/record)
- Theo dõi hoạt động sức khỏe
- Ghi chép cá nhân
- Biểu đồ và thống kê

### 3. Trang cột (/column)
- Bài viết về sức khỏe
- Thông tin hữu ích
- Cập nhật mới nhất

## 🔧 Cấu hình

### ESLint
Dự án sử dụng ESLint với cấu hình TypeScript nghiêm ngặt. Các rule được cấu hình trong `eslint.config.js`.

### TypeScript
Cấu hình TypeScript được thiết lập với strict mode và các rule tối ưu cho React development.

### Vite
Sử dụng Vite làm build tool với plugin React để hỗ trợ Fast Refresh và HMR.

## 📱 Responsive Design

Ứng dụng được thiết kế responsive với:
- Header navigation thích ứng
- Menu hamburger cho mobile
- Layout linh hoạt
- CSS Modules cho styling
