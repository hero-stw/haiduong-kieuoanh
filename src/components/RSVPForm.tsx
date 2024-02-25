import axios from "axios";
import { useState, useRef } from "react";

interface FormData {
  name: string;
  phone: string;
  rsvp: "yes" | "no";
}

const RSVPForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    rsvp: "yes",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const formRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmissionError(null); // Clear any previous errors

    try {
      const response = await axios.post(
          "https://65dad667bcc50200fcdd3c08.mockapi.io/api/rsvp",
          formData
      );

      console.log("Gửi phản hồi thành công:", response.data);
      if (response.status === 201) {
        setIsPopupOpen(true);
        // @ts-ignore
        formRef && formRef.current.reset();
        setTimeout(() => setIsPopupOpen(false), 2500);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra. Vui lòng thử lại nhá!:", error);
      setSubmissionError(
          // @ts-ignore
          error.message || "Có lỗi xảy ra. Vui lòng thử lại nhá!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
        <div className="wr-connector">
          <section className="t8-contact">
            <div className="container">
              <div className="content">
                <div data-block="decoration" data-decoration-id="1">
                  <img src="https://static.namtay.vn/assets/img/theme8/mau1/contact-icon-mau1.svg"
                       className="contact-decor1"/>
                </div>
                <div className="t8-contact-text">
                  <div className="title" >Bạn sẽ đến chứ ?</div>
                  <div className="paragraph" >Chúng mình đã rất chờ đón sự kiện trọng đại này của cuộc đời. Dù biết 1 số anh chị em không đến tham dự được nhưng chúng mình sẽ trọn vẹn hơn khi có thêm lới chúc phúc và sự hiện diện của mọi người đến với vợ chồng mình.<br/><br/> Xin hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất nhé! Trân trọng!
                  </div>
                </div>
                <div className="form">
                  <form action="" className="t8-contact-form" ref={formRef}
                        method='POST' onSubmit={handleSubmit}>
                    <div className="t8-form-group">
                      <label htmlFor={"name"} className="form-title">Tên của bạn<span
                          style={{color: "red"}}>*</span>:</label>
                      <input
                          type="text"
                          className="form-input"
                          placeholder="Khánh Vy - Bạn cấp 3"
                          required
                          id={"name"}
                          name={"name"}
                          onChange={(event) => handleChange(event)}
                      />
                    </div>
                    <div className="t8-form-group">
                      <label htmlFor={"phone"} className="form-title">Số điện thoại<span
                          style={{color: "red"}}>*</span>:</label>
                      <input
                          name={"phone"}
                          id={"phone"}
                          className="form-input"
                          type="tel"
                          placeholder="VD: 0912345678"
                          pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                          required
                          onChange={(event) => handleChange(event)}
                      />
                    </div>
                    <div className="t8-form-group">
                      <p className="form-title">Bạn sẽ tham dự chứ ?<span
                          style={{color: "red"}}>*</span>:</p>
                      <div className="form-btn-row">
                        <input id="yes" type="radio" value="yes" name="rsvp" className="form-radio"
                               required onChange={(event) => handleChange(event)}/>
                        <label htmlFor="yes" className="form-btn">Có</label>
                        <input id="no" type="radio" value="no" name="rsvp" className="form-radio"
                               required onChange={(event) => handleChange(event)}/>
                        <label htmlFor="no" className="form-btn"
                               style={{marginLeft: "10px",}}>Không</label>
                      </div>
                    </div>
                    <div className="t8-form-group">
                      <button disabled={isSubmitting} className="form-btn-submit">{isSubmitting ? "Đang gửi phản hồi..." : "Gửi phản hồi"}</button>
                    </div>
                    {submissionError && (
                        <p className='text-white-500'>{submissionError}</p>
                    )}
                    {isPopupOpen && (
                        <p className='font-main-sans text-xs text-form'>
                          Thank you for your RSVP! See you!
                        </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
  );
};

export default RSVPForm;
