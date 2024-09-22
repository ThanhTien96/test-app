import { ITestData } from "../interface";

const TEST_QUESION: ITestData[] = [
  {
    id: 1,
    question:
      "An electronic device used to store, retrieve and process data is called… \n Một thiết bị điện tử dùng để lưu trữ, truy xuất và xử lý dữ liệu được gọi là gì?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "a switch. \n Bộ chuyển đổi",
        img: null,
      },
      {
        answer_id: 2,
        text: "an amplifier. \n Bộ khuếch đại",
        img: null,
      },
      {
        answer_id: 3,
        text: "a computer.\n Máy tính.",
        img: null,
      },
      {
        answer_id: 4,
        text: "an application.\n Ứng dụng.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 2,
    question:
      "Which one of the following is NOT a computer? \n Đáp án nào dưới đây không phải là một loại máy tính?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "A tablet. Máy tính bảng (a tablet).",
        img: null,
      },
      {
        answer_id: 2,
        text: "A laptop. Máy tính xách tay (a laptop).",
        img: null,
      },
      {
        answer_id: 3,
        text: "A router. Thiết bị định tuyến (a router).",
        img: null,
      },
      {
        answer_id: 4,
        text: "A server. Máy chủ (a server).",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 3,
    question:
      "Which one of the following is the icon that can be found on the computer start button? \n Biểu tượng nào dưới đây có thể được tìm thấy khi nhấp chọn nút 'Start'?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "A",
        img: null,
      },
      {
        answer_id: 2,
        text: "B",
        img: null,
      },
      {
        answer_id: 3,
        text: "C",
        img: null,
      },
      {
        answer_id: 4,
        text: "D",
        img: null,
      },
    ],
    image: "./public/assets/question-3.jpg",
  },
  {
    id: 4,
    question:
      "Where should you click to shut down the computer? \n Nhấp chuột vào vị trí nào để tắt máy tính?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Power button icon",
        img: "./public/assets/question-4/power-icon.jpg",
      },
      {
        answer_id: 2,
        text: "Settings icon",
        img: "./public/assets/question-4/setting-icon.jpg",
      },
      {
        answer_id: 3,
        text: "File Explorer icon",
        img: "./public/assets/question-4/file-icon.jpg",
      },
      {
        answer_id: 4,
        text: "All App icon",
        img: "./public/assets/question-4/app-icon.jpg", 
      },
    ],
    image: null,
  },
  {
    id: 5,
    question:
      "Which one of the following is something that the mouse is used for? \n Chuột máy tính được sử dụng với mục đích gì?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Display video. Hiển thị video.",
        img: null,
      },
      {
        answer_id: 2,
        text: "Open files. Mở tệp tin.",
        img: null,
      },
      {
        answer_id: 3,
        text: "Make sound. Tạo âm thanh.",
        img: null,
      },
      {
        answer_id: 4,
        text: "Store data. Lưu trữ dữ liệu.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 6,
    question:
      "Click the key that moves the cursor to the beginning of the text when you type. \n Nhấp chuột vào một phím (trên bàn phím) giúp di chuyển con trỏ soạn thảo đến đầu dòng văn bản.",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Esc",
        img: null,
      },
      {
        answer_id: 2,
        text: "F1",
        img: null,
      },
      {
        answer_id: 3,
        text: "Home",
        img: null,
      },
      {
        answer_id: 4,
        text: "Ctrl",
        img: null,
      },
    ],
    image: "./public/assets/question-6.jpg",
  },
  {
    id: 7,
    question:
      "Click on the keyboard in the image below. \n Nhấp chuột vào hình bàn phím.",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Keyboard",
        img: "./public/assets/question-8/keyboard.jpg",
      },
      {
        answer_id: 2,
        text: "Headphone",
        img: "./public/assets/question-8/headphones.png",
      },
      {
        answer_id: 3,
        text: "Webcam",
        img: "./public/assets/question-8/camera.jpg",
      },
      {
        answer_id: 4,
        text: "Mouse",
        img: "./public/assets/question-8/mouse.jpg",
      },
    ],
    image: null,
  },
  {
    id: 8,
    question:
      "Which one of the following is something that the mouse is used for? \n Chuột máy tính được sử dụng với mục đích gì?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Display video. \n Hiển thị video.",
        img: null,
      },
      {
        answer_id: 2,
        text: "Open files. \n Mở tệp tin.",
        img: null,
      },
      {
        answer_id: 3,
        text: "Make sound. \n Tạo âm thanh.",
        img: null,
      },
      {
        answer_id: 4,
        text: "Store data. \n Lưu trữ dữ liệu.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 9,
    question:
      "Which type of application are Outlook and Messenger examples of? \n Outlook và Messenger là những ví dụ về loại ứng dụng nào?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Business applications. \n Ứng dụng hiệu suất văn phòng.",
        img: null,
      },
      {
        answer_id: 2,
        text: "Communication applications. \n Ứng dụng giao tiếp.",
        img: null,
      },
      {
        answer_id: 3,
        text: "Education applications. \n Ứng dụng giáo dục.",
        img: null,
      },
      {
        answer_id: 4,
        text: "News applications. \n Ứng dụng đọc tin tức.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 10,
    question:
      "What do Windows and Android have in common? \n Windows và Android có điểm chung là gì?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "They are operating systems. \n Đều là hệ điều hành.",
        img: null,
      },
      {
        answer_id: 2,
        text: "They are applications software. \n Đều là phần mềm ứng dụng.",
        img: null,
      },
      {
        answer_id: 3,
        text: "They are computer hardware devices. \n Đều là các thiết bị phần cứng máy tính.",
        img: null,
      },
      {
        answer_id: 4,
        text: "They are social media companies. \n Đều là các công ty truyền thông xã hội.",
        img: null,
      },
    ],
    description:
      "Windows là hệ điều hành của máy tính. \n Android là hệ điều hành của điện thoại.",
    image: null,
  },
  {
    id: 11,
    question:
      "Which one of the following is an office productivity application? \n Đáp án nào là một ứng dụng hiệu suất văn phòng?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Shared online calendar \n Lịch trực tuyến.",
        img: null,
      },
      {
        answer_id: 2,
        text: "Antivirus program \n Phần mềm diệt virus.",
        img: null,
      },
      {
        answer_id: 3,
        text: "Operating system \n Hệ điều hành.",
        img: null,
      },
      {
        answer_id: 4,
        text: "File compression software \n Phần mềm nén tệp tin.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 12,
    question:
      'Which one of the following is NOT true about an end-user software agreement (EULA)? \n Đáp án nào KHÔNG phải là một nội dung mô tả về "Thỏa thuận cấp phép cho người dùng cuối" (end-user software agreement - EULA)?',
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "It is the contract between the licensor and purchaser. \n Đây là thỏa thuận giữa nhà cung cấp và người sử dụng.",
        img: null,
      },
      {
        answer_id: 2,
        text: "It establishes the purchaser's right to use the software. \n Cho phép người dùng được sử dụng các chức năng của phần mềm.",
        img: null,
      },
      {
        answer_id: 3,
        text: "It contains offers to buy additional products to a reduced price. \n Nó chứa các mã giảm giá để người dùng phần mềm mua các sản phẩm bổ sung khác.",
        img: null,
      },
      {
        answer_id: 4,
        text: "It may define ways under which the product can be used. \n Đưa ra cách thức để sử dụng các bản sao của phần mềm.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 13,
    question:
      "Which one of the following is the main purpose of the Task bar? \n Đáp án nào mô tả chức năng chính của Thanh tác vụ (Task bar)?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "To launch and monitor applications. \n Để quản lý các ứng dụng đang chạy.",
        img: null,
      },
      {
        answer_id: 2,
        text: "To manage network settings. \n Để quản lý thiết lập mạng.",
        img: null,
      },
      {
        answer_id: 3,
        text: "To shut down the computer. \n Để tắt máy tính.",
        img: null,
      },
      {
        answer_id: 4,
        text: "To uninstall or change a program. \n Để gỡ cài đặt hoặc thay đổi một chương trình.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 14,
    question:
      "Click on the icon that is found on the Task bar. \n Nhấp chuột vào biểu tượng được tìm thấy trên thanh Tác vụ (Task bar).",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "User icon",
        img: "./public/assets/question-14/user-icon.jpg",
      },
      {
        answer_id: 2,
        text: "Windows icon",
        img: "./public/assets/question-14/windows-icon.png",
      },
      {
        answer_id: 3,
        text: "Settings icon",
        img: "./public/assets/question-14/setting-icon.jpg",
      },
      {
        answer_id: 4,
        text: "Power icon",
        img: "./public/assets/question-14/power-icon.jpg",
      },
    ],
    image: null,
  },
  {
    id: 15,
    question:
      "Click on the scroll bar. \n Nhấp chuột vào thanh cuộn (scroll bar).",
    click: true,
    answer: null,
    image: "./public/assets/question-15.jpg",
  },
  {
    id: 16,
    question:
      "Where should you click to close the open window? \n Nhấp chuột vào vị trí nào để đóng cửa sổ đang mở?",
    click: true,
    answer: null,
    image: "./public/assets/question-16.jpg",
  },
  {
    id: 17,
    question:
      "Where should you click to create a file in the selected folder? \n Nhấp chuột vào vị trí nào để tạo một tệp tin trong thư mục đang mở?",
    click: true,
    answer: null,
    image: "./public/assets/question-17.jpg",
  },
  {
    id: 18,
    question:
      "Click on a sub-folder to the folder My files. \n Nhấp chuột vào một thư mục con trong thư mục 'My files'.",
    click: true,
    answer: null,
    image: "./public/assets/question-18.jpg",
  },
  {
    id: 19,
    question:
      "Which one of the following best describes an internal hard disk? \n Đáp án nào miêu tả đúng nhất về một ổ cứng gắn trong?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "A device which can store large amounts of data. \n Thiết bị có thể lưu trữ một lượng lớn dữ liệu.",
        img: null,
      },
      {
        answer_id: 2,
        text: "A device which can transmit data wirelessly. \n Thiết bị có thể truyền dữ liệu qua mạng không dây.",
        img: null,
      },
      {
        answer_id: 3,
        text: "A device which can cool down the computer if it becomes overheated. \n Thiết bị có thể giúp hạ nhiệt nếu máy tính quá nóng.",
        img: null,
      },
      {
        answer_id: 4,
        text: "A device which can stop data virus from infecting the computer. \n Thiết bị có thể ngăn chặn virus lây nhiễm vào máy tính.",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 20,
    question:
      "Which one of the following is the largest storage capacity? \n Đáp án nào là dung lượng lưu trữ lớn nhất?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "800 MB",
        img: null,
      },
      {
        answer_id: 2,
        text: "1 TB",
        img: null,
      },
      {
        answer_id: 3,
        text: "500 GB",
        img: null,
      },
      {
        answer_id: 4,
        text: "2000 KB",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 21,
    question:
      "Where should you click to open the folder Pictures? \n Nhấp chuột vào vị trí nào để mở thư mục Pictures?",
    click: true,
    answer: null,
    image: "./public/assets/question-21.jpg",
  },
  {
    id: 22,
    question:
      "Which key should be used in combination with the mouse to select all the files in the window below? \n Sử dụng phím nào kết hợp với chuột để chọn nhiều tệp tin cùng lúc trong cửa sổ bên dưới?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Alt key",
        img: null,
      },
      {
        answer_id: 2,
        text: "Shift key",
        img: null,
      },
      {
        answer_id: 3,
        text: "Enter key",
        img: null,
      },
      {
        answer_id: 4,
        text: "End key",
        img: null,
      },
    ],
    image: "./public/assets/question-22.jpg",
  },
  {
    id: 23,
    question:
      "You want to search for a document which has the word *global* in the name. Which one of the following is the best search expression? \n Khi muốn tìm kiếm một tài liệu có từ *global* trong tên tệp tin, em sử dụng từ khóa tìm kiếm nào sau đây để cho kết quả chính xác nhất?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "$global$",
        img: null,
      },
      {
        answer_id: 2,
        text: "^global^",
        img: null,
      },
      {
        answer_id: 3,
        text: "&global&",
        img: null,
      },
      {
        answer_id: 4,
        text: "\\* global \\*",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 24,
    question:
      "Where should you click to delete the selected folder? \n Nhấp chuột vào vị trí nào để xóa (delete) thư mục đã chọn?",
    click: true,
    answer: null,
    image: "./public/assets/question-24.jpg",
  },
  {
    id: 25,
    question:
      "Where should you click to sort the files and folders by their size? \n Nhấp chuột vào vị trí nào để sắp xếp các tệp tin và thư mục theo dung lượng (size) lưu trữ của chúng?",
    click: true,
    answer: null,
    image: "./public/assets/question-25.jpg",
  },
  {
    id: 26,
    question:
      "Click the icon where you can view information about the computer's processor. \n Nhấp chuột vào vị trí nào để hiển thị thông tin của bộ vi xử lý máy tính?",
    click: true,
    answer: null,
    image: "./public/assets/question-26.jpg",
  },
  {
    id: 27,
    question:
      "Which one of the following describes how to change the desktop background colour? \n Để thay đổi hình nền màn hình Desktop, em thao tác như thế nào?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Right-click the File Explorer icon and choose the Personalize item in the context menu. \n Nhấp chuột phải vào biểu tượng File Explorer và chọn mục Personalize trong menu chuột phải.",
      },
      {
        answer_id: 2,
        text: "Right-click the Edge icon and choose the Personalize item in the context menu. \n Nhấp chuột phải vào biểu tượng Edge và chọn mục Personalize trong menu chuột phải.",
      },
      {
        answer_id: 3,
        text: "Right-click the Desktop and choose the Personalize item in the context menu. \n Nhấp chuột phải vào khoảng trống trên màn hình Desktop và chọn mục Personalize trong menu chuột phải.",
      },
      {
        answer_id: 4,
        text: "Right-click the Task bar and choose the Personalize item in the context menu. \n Nhấp chuột phải vào thanh tác vụ (Task bar) và chọn mục Personalize trong menu chuột phải.",
      },
    ],
    image: null,
  },
  {
    id: 28,
    question:
      "In Windows Task Manager, non-responding applications can be shut down. \n Which one of the following keyboard shortcuts is used to show the screen below? \n Cửa sổ Task Manager giúp chúng ta đóng các ứng dụng không phản hồi (non-responding). Em sử dụng tổ hợp phím nào dưới đây để hiển thị màn hình bên dưới?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Ctrl + Alt + Delete",
        img: null,
      },
      {
        answer_id: 2,
        text: "Ctrl + Shift + Delete",
        img: null,
      },
      {
        answer_id: 3,
        text: "Alt + Shift + Delete",
        img: null,
      },
      {
        answer_id: 4,
        text: "Esc + Shift + Delete",
        img: null,
      },
    ],
    image: "./public/assets/question-28.jpg",
  },
  {
    id: 29,
    question:
      "Where should you click to uninstall an application? \n Nhấp chuột vào vị trí nào để mở cửa sổ mà chúng ta có thể gỡ cài đặt một ứng dụng?",
    click: true,
    answer: null,
    image: "./public/assets/question-29.jpg",
  },
  {
    id: 30,
    question:
      "Where should you click to install a new printer? \n Nhấp chuột vào vị trí nào để cài đặt một máy in mới?",
    click: true,
    answer: null,
    image: "./public/assets/question-30.jpg",
  },
  {
    id: 31,
    question:
      "Which one of the following applications is included with default Windows package? \n Ứng dụng nào dưới đây được cài đặt mặc định trong Windows?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Excel\nỨng dụng soạn thảo văn bản Excel.",
        img: null,
      },
      {
        answer_id: 2,
        text: "Safari\nTrình duyệt Safari.",
        img: null,
      },
      {
        answer_id: 3,
        text: "Chrome\nTrình duyệt Chrome.",
        img: null,
      },
      {
        answer_id: 4,
        text: "WordPad\nỨng dụng WordPad",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 32,
    question:
      "Where should you click to zoom the image? \n Nhấp chuột vào vị trí nào để phóng to hình ảnh?",
    click: true,
    answer: null,
    image: "./public/assets/question-32.jpg",
  },
  {
    id: 33,
    question:
      "Which one of the following applications would you use to write documents with? \n Ứng dụng nào được sử dụng để tạo tài liệu văn bản đơn giản?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Access",
        img: null,
      },
      {
        answer_id: 2,
        text: "Outlook",
        img: null,
      },
      {
        answer_id: 3,
        text: "Notepad",
        img: null,
      },
      {
        answer_id: 4,
        text: "Chrome",
        img: null,
      },
    ],
    image: null,
  },
  {
    id: 34,
    question:
      "Where should you click to make the selected text underlined? \n Nhấp chuột vào vị trí nào để áp dụng kiểu chữ gạch chân cho cụm từ đã chọn?",
    click: true,
    answer: null,
    image: "./public/assets/question-34.jpg",
  },
  {
    id: 35,
    question:
      "Where should you click to save the document with a different name? \n Nhấp chuột vào vị trí nào để có thể lựa chọn lưu tệp tin với một tên khác?",
    click: true,
    answer: null,
    image: "./public/assets/question-35.jpg",
  },
  {
    id: 36,
    question:
      "Which one of the following is NOT a Web browser? \n Đáp án nào dưới đây KHÔNG PHẢI là một trình duyệt Web?",
    click: false,
    answer: [
      {
        answer_id: 1,
        text: "Teams",
        img: null,
      },
      {
        answer_id: 2,
        text: "Chrome",
        img: null,
      },
      {
        answer_id: 3,
        text: "Edge",
        img: null,
      },
      {
        answer_id: 4,
        text: "Firefox",
        img: null,
      },
    ],
    image: null,
  },
];

export default TEST_QUESION;

export const RESULT_DATA = [
  {
    id: 1,
    answer_id: 3,
  },
  {
    id: 2,
    answer_id: 3,
  },
  {
    id: 3,
    answer_id: 3,
  },
  {
    id: 5,
    answer_id: 2,
  },
  {
    id: 6,
    answer_id: 3,
  },
  {
    id: 7,
    answer_id: 1,
  },
  {
    id: 8,
    answer_id: 2,
  },
  {
    id: 9,
    answer_id: 2,
  },
  {
    id: 10,
    answer_id: 1,
  },
  {
    id: 11,
    answer_id: 1,
  },
  {
    id: 12,
    answer_id: 3,
  },
  {
    id: 13,
    answer_id: 1,
  },
  {
    id: 14,
    answer_id: 2,
  },
  {
    id: 19,
    answer_id: 1,
  },
  {
    id: 20,
    answer_id: 2,
  },
  {
    id: 22,
    answer_id: 2,
  },
  {
    id: 23,
    answer_id: 4,
  },
  {
    id: 27,
    answer_id: 3,
  },
  {
    id: 28,
    answer_id: 2,
  },
  {
    id: 31,
    answer_id: 4,
  },
  {
    id: 33,
    answer_id: 3,
  },
  {
    id: 36,
    answer_id: 1,
  },
];
