import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup"
function FormMedical() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    cmnd: "",
                    birth: "",
                    gender: "0",
                    country: "",
                    company: "",
                    position: "",
                    checkbox1: "",
                    province: "",
                    district: "",
                    wards: "",
                    address: "",
                    phone: "",
                    email: "",
                    checkbox2: [],
                    checkbox3: []
                }}
                onSubmit={(values) => {
                    console.log(values);
                    toast("oke");
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Not empty"),
                    cmnd: Yup.string()
                        .required("Not empty"),
                    birth: Yup.number()
                        .min(1990),
                    country: Yup.string()
                        .required("Not empty"),
                    province: Yup.string()
                        .required("Not empty"),
                    district: Yup.string()
                        .required("Not empty"),
                    wards: Yup.string()
                        .required("Not empty"),
                    address: Yup.string()
                        .required("Not empty"),
                    phone: Yup.string()
                        .required("Not empty"),
                    email: Yup.string()
                        .required("Email is required")
                        .matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/,"Invalid email address")

                })}
            >
                <div className="container">
                    <h1 className="mb-4">Tờ khai y tế</h1>

                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Họ và tên</label>
                            <Field type="text" name="name" id="name" className="form-control"/>
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cmnd" className="form-label">Số hộ chiếu/CMND</label>
                            <Field type="text" name="cmnd" id="cmnd" className="form-control"/>
                            <ErrorMessage name="cmnd" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birth" className="form-label">Năm sinh</label>
                            <Field type="number" name="birth" id="birth" className="form-control"/>
                            <ErrorMessage name="birth" component="div" className="text-danger" />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Giới tính</label>
                                <Field type="radio" name="gender" id="radio1" value="1" className="form-check-input"/>
                                <label htmlFor="radio1" className="form-check-label">Nam</label>
                                <Field type="radio" name="gender" id="radio2" value="0" className="form-check-input"/>
                                <label htmlFor="radio2" className="form-check-label">Nữ</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Quốc tịch</label>
                            <Field type="text" name="country" id="country" className="form-control"/>
                            <ErrorMessage name="country" component="div" className="text-danger" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="company" className="form-label">Công ty làm việc</label>
                            <Field type="text" name="company" id="company" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Bộ phận làm việc</label>
                            <Field type="text" name="position" id="position" className="form-control"/>
                        </div>
                        <div className="mb-3 form-check">
                            <label htmlFor="checkbox1" className="form-check-label">Có thẻ bảo hiểm y tế</label>

                            <Field type="checkbox" value="Có bảo hiểm y tế" name="checkbox1" id="checkbox1"
                                   />
                        </div>
                        <h2 className="mb-4">Địa chỉ liên lạc tại Việt Nam</h2>
                        <div className="mb-3">
                            <label htmlFor="province" className="form-label">Tỉnh thành</label>
                            <Field type="text" name="province" id="province" className="form-control"/>
                            <ErrorMessage name="province" component="div" className="text-danger" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="district" className="form-label">Quận/Huyện</label>
                            <Field type="text" name="district" id="district" className="form-control"/>
                            <ErrorMessage name="district" component="div" className="text-danger" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="wards" className="form-label">Phường/Xã</label>
                            <Field type="text" name="wards" id="wards" className="form-control"/>
                            <ErrorMessage name="wards" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Số nhà, phố, tổ dân phố/thôn/đội</label>
                            <Field type="text" name="address" id="address" className="form-control"/>
                            <ErrorMessage name="address" component="div" className="text-danger" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Điện thoại</label>
                            <Field type="text" name="phone" id="phone" className="form-control"/>
                            <ErrorMessage name="phone" component="div" className="text-danger" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="text" name="email" id="email" className="form-control"/>
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <h3 className="mb-4">Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào (Có thể
                            đi
                            qua nhiều quốc gia)</h3>
                        <div className="mb-3">
                            <Field as="textarea" name="area" id="area" className="form-control"/>
                        </div>
                        <h3 className="mb-4">Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây
                            không?</h3>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="sot" name="checkbox2" id="sot" className="form-check-input"/>
                            <label htmlFor="sot" className="form-check-label">Sốt</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="ho" name="checkbox2" id="ho" className="form-check-input"/>
                            <label htmlFor="ho" className="form-check-label">Ho</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="khoTho" name="checkbox2" id="khoTho"
                                   className="form-check-input"/>
                            <label htmlFor="khoTho" className="form-check-label">Khó thở</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="viemPhoi" name="checkbox2" id="viemPhoi"
                                   className="form-check-input"/>
                            <label htmlFor="viemPhoi" className="form-check-label">Viêm phổi</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="dauHong" name="checkbox2" id="dauHong"
                                   className="form-check-input"/>
                            <label htmlFor="dauHong" className="form-check-label">Đau họng</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="metMoi" name="checkbox2" id="metMoi"
                                   className="form-check-input"/>
                            <label htmlFor="metMoi" className="form-check-label">Mệt mỏi</label>
                        </div>
                        <h3 className="mb-4">Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h3>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="tiepXuc1" name="checkbox2" id="ok"
                                   className="form-check-input"/>
                            <label htmlFor="ok" className="form-check-label">Người bệnh hoặc nghi ngờ,mắc bệnh
                                COVID-19</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="tiepXuc2" name="checkbox2" id="ok1"
                                   className="form-check-input"/>
                            <label htmlFor="ok1" className="form-check-label">Người từ nước có bệnh COVID-19</label>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" value="tiepXuc3" name="checkbox2" id="ok2"
                                   className="form-check-input"/>
                            <label htmlFor="ok2" className="form-check-label">Người có biểu hiện(Sốt, ho, khó thở,viêm
                                phổi)</label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default FormMedical;