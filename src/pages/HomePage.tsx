import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

  return (
    <div className="body">
      <div className="mainBox w-[90%] p-4 lg:w-[50%]">
        <h3 >NỘI DUNG ÔN TẬP TIN HỌC QUỐC TẾ ICDL</h3>
        <p>CMHS và HS vui lòng không chia sẻ cho người khác. Xin cảm ơn!</p>
        <div className="btnControl">
          <button
            onClick={() => navigate('/result-page')}
          >Ôn Bài</button>
          <button
            onClick={() => {
              navigate('/test-page');
            }}
          >
            Làm Bài
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
