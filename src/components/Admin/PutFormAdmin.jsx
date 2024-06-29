import React, { useEffect, useState } from 'react';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Popover, Row, Select, Space } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
const { Option } = Select;

export const PutFormAdmin = ({ danhSachKhoaHoc }) => {
    const [image, setImage] = useState(danhSachKhoaHoc.hinhAnh);
    const [initialData, setInitialData] = useState(null);
    const { maDanhMucKhoaHoc } = useSelector(state => state.quanLyKhoaHocAdmin);
    const { handleSubmit, control, setValue, getValues } = useForm({
        defaultValues: {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: '',
            hinhAnh: {},
            maNhom: '',
            danhGia: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: '',
            ngayTao: moment(danhSachKhoaHoc.ngayTao).format("DD/MM/YYYY")
        }
    });

    const [open, setOpen] = useState(false);
    const showDrawerPut = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (danhSachKhoaHoc) {
            const initialValues = {
                maKhoaHoc: danhSachKhoaHoc.maKhoaHoc,
                biDanh: danhSachKhoaHoc.biDanh,
                tenKhoaHoc: danhSachKhoaHoc.tenKhoaHoc,
                moTa: danhSachKhoaHoc.moTa,
                luotXem: danhSachKhoaHoc.luotXem,
                hinhAnh: danhSachKhoaHoc.hinhAnh,
                maNhom: danhSachKhoaHoc.maNhom,
                danhGia: danhSachKhoaHoc.danhGia,
                maDanhMucKhoaHoc: danhSachKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoaHoc,
                taiKhoanNguoiTao: danhSachKhoaHoc?.nguoiTao?.taiKhoan,
                ngayTao: moment(danhSachKhoaHoc.ngayTao).format("DD/MM/YYYY")
            };
            setInitialData(initialValues);
            Object.keys(initialValues).forEach(key => setValue(key, initialValues[key]));
        }
    }, [danhSachKhoaHoc, setValue]);

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        if (JSON.stringify(data) === JSON.stringify(initialData) && !(data.hinhAnh instanceof File)) {
            toast.warning('Bạn chưa chỉnh sửa gì');
            return;
        }

        const formData = new FormData();
        formData.append("maKhoaHoc", data.maKhoaHoc);
        formData.append("biDanh", data.biDanh);
        formData.append("tenKhoaHoc", data.tenKhoaHoc);
        formData.append("moTa", data.moTa);
        formData.append("luotXem", data.luotXem);
        formData.append("danhGia", data.danhGia);
        formData.append("maNhom", data.maNhom);
        formData.append("maDanhMucKhoaHoc", data.maDanhMucKhoaHoc);
        formData.append("taiKhoanNguoiTao", data.taiKhoanNguoiTao);
        formData.append("ngayTao", data.ngayTao);
        if (data.hinhAnh && data.hinhAnh instanceof File) {
            formData.append("hinhAnh", data.hinhAnh);
        } else if (data.hinhAnh === initialData.hinhAnh) {
            toast.warning('Bạn chưa upload ảnh');
            return;
        }

        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocPut(formData))
            .unwrap()
            .then(() => {
                toast.success('Cập nhật khóa học thành công');
                dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocGet(''));
                setOpen(false);
            })
            .catch((error) => {
                toast.error(error?.response?.data);
            });
    }

    return (
        <>
            <Popover title="Chỉnh sửa khoá học">
                <Button icon={<EditOutlined />} onClick={showDrawerPut}></Button>
            </Popover>

            <Drawer
                maskClosable={false}
                title="Cập nhật khoá học"
                width={720}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label='Mã khoá học'>
                                <Controller
                                    control={control}
                                    name="maKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã Khoá Học" disabled />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Bí danh">
                                <Controller
                                    control={control}
                                    name="biDanh"
                                    render={({ field }) => <Input {...field} type="text" placeholder='Bí Danh' />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Lượt xem">
                                <Controller
                                    control={control}
                                    name="luotXem"
                                    render={({ field }) => <Input {...field} type="number" placeholder="Lượt Xem" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Đánh giá'>
                                <Controller
                                    control={control}
                                    name="danhGia"
                                    render={({ field }) => <Input {...field} type="number" placeholder='Đánh giá' />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Ngày tạo">
                                <Controller
                                    name="ngayTao"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            format="DD/MM/YYYY"
                                            value={field.value ? moment(field.value, "DD/MM/YYYY") : null}
                                            onChange={(date, dateString) => field.onChange(dateString)}
                                        />
                                    )}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Hình ảnh">
                                <Controller
                                    name="hinhAnh"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (
                                                    file.type === "image/jpeg" ||
                                                    file.type === "image/jpg" ||
                                                    file.type === "image/gif" ||
                                                    file.type === "image/png"
                                                ) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = (event) => {
                                                        setImage(event.target.result);
                                                        field.onChange(file);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    )}
                                />
                                <img style={{ width: "40%", height: "40%", marginTop: "20px" }} src={image} alt="" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label='Mã nhóm'>
                                <Controller
                                    control={control}
                                    name="maNhom"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã nhóm" disabled />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Mã danh mục khoá học'>
                                <Controller
                                    control={control}
                                    name="maDanhMucKhoaHoc"
                                    render={({ field }) => (
                                        <Select {...field} placeholder="Chọn mã danh mục">
                                            {maDanhMucKhoaHoc.map((maDanhMuc) => (
                                                <Option key={maDanhMuc.maDanhMuc} value={maDanhMuc.maDanhMuc}>
                                                    {maDanhMuc.tenDanhMuc}
                                                </Option>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Tài khoản người tạo">
                                <Controller
                                    control={control}
                                    name="taiKhoanNguoiTao"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tài khoản người tạo" disabled />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Tên khoá học">
                                <Controller
                                    control={control}
                                    name="tenKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tên khoá học" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Mô tả">
                                <Controller
                                    control={control}
                                    name="moTa"
                                    render={({ field }) => <Input.TextArea rows={4} {...field} type="text" placeholder="Mô tả" />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Cập nhật khoá học
                    </Button>
                </form>
            </Drawer>
        </>
    );
}
