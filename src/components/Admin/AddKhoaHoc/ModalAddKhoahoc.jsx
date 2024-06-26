import React, { useEffect, useState } from 'react';
import { Button, Modal, Popover, Select } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { quanLyKhoaHocThunkAction } from '../../../store/QuanLyKhoaHocAdmin';
import { TableAddKhoaHoc } from './TableAdminKhoaHoc';
import { toast } from 'react-toastify';


export const ModalAddKhoahoc = ({ ds }) => {

    const { handleSubmit, control, setValue } = useForm({
        defaultValues: {
            maKhoaHoc: '',
            taiKhoan: ds.taiKhoan, 
        }
    });

    const { dsKhoaHocChuaGhiDanh, dsKhoaHocChoGhiDanh, dsKhoaHocDaGhiDanh } = useSelector(state => state.quanLyKhoaHocAdmin);
    const dispatch = useDispatch();

    const getDanhSach = (data) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocChuaGhiDanh(data.taiKhoan))
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocChoGhiDanh(data.taiKhoan))
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocDaGhiDanh(data.taiKhoan))
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        getDanhSach({ taiKhoan: ds.taiKhoan });
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const options = dsKhoaHocChuaGhiDanh.length > 0 && dsKhoaHocChuaGhiDanh.map(user => ({
        label: user.tenKhoaHoc,
        value: user.maKhoaHoc,
        key: user.maKhoaHoc
    }));
    const onSubmit = (data) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung({
            maKhoaHoc: data.maKhoaHoc,
            taiKhoan: data.taiKhoan
        }
        ))
            .unwrap()
            .then(() => {
                toast.success("Ghi danh người dùng thành công!");
                dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocChuaGhiDanh(data.taiKhoan))
                dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocChoGhiDanh(data.taiKhoan))
                dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocDaGhiDanh(data.taiKhoan))

            })
            .catch((error) => {
                console.error('Ghi danh người dùng thất bại:', error);
                toast.error("Ghi danh người dùng thất bại");
            });

    };

    return (
        <div>
            <Popover title="Ghi danh">
                <form onSubmit={handleSubmit(getDanhSach)}>
                    <Controller
                        name="taiKhoan"
                        control={control}
                        render={({ field }) => (
                            <input type="hidden" {...field} value={ds.taiKhoan} />
                        )}
                    />
                    <Button type="primary" htmlType='submit' icon={<UsergroupAddOutlined />} onClick={showModal}>
                    </Button>
                </form>
            </Popover>
            <Modal
                title="Ghi danh khoá học"
                style={{ top: 20, }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <div >

                    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between border-b-4 border-black pb-5">
                        <h1 className="text-[20px] font-bold">Chọn khoá học</h1>
                        <Controller
                            name="maKhoaHoc"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    showSearch
                                    placeholder="Tìm kiếm khoá học"
                                    filterOption={(input, option) =>
                                        option?.label.toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={options}
                                    style={{ width: '70%' }}
                                    onChange={(value) => setValue('maKhoaHoc', value)}
                                />
                            )}
                        />
                        <Controller
                            name="taiKhoan"
                            control={control}
                            render={({ field }) => (
                                <input type="hidden" {...field} value={ds.taiKhoan} />
                            )}
                        />
                        <Button htmlType='submit'>Ghi danh</Button>
                    </form>

                </div>
                <div>
                    <TableAddKhoaHoc dsKhoaHocChoGhiDanh={dsKhoaHocChoGhiDanh}
                        taiKhoan={ds.taiKhoan}
                        title='Khoá học chờ xác thực'
                    />


                </div>
                <div>
                    <TableAddKhoaHoc dsKhoaHocChoGhiDanh={dsKhoaHocDaGhiDanh}
                        taiKhoan={ds.taiKhoan}
                        title='Khoá học đã xác thực'
                    />
                </div>
            </Modal>
        </div>
    );
};
