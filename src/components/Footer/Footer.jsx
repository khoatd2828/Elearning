import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="bg-[url('https://elearning.iigvietnam.com/images/home/Footer.svg')] bg-cover lg:bg-auto 2xl:bg-cover bg-no-repeat w-full flex justify-center">
        <div className="md:pt-[65px] md:mx-20 pt-[120px] mx-[20px] mb-[20px] grid grid-cols-4 gap-x-10 gap-y-6 sm:mx-14 lg:mx-14 xl:mx-0 text-white max-w-7xl md:h-[600px] lg:h-[432px]">
          <div className="self-end">
            <img src="https://elearning.iigvietnam.com/images/logo-footer.png" alt="logo-footer" />
          </div>
          <div className="col-span-2 self-end">
            <p className="font-bold text-xl">ĐỊA CHỈ VĂN PHÒNG</p>
          </div>
          <div className="self-end">
            <p className="font-bold text-xl ">LIÊN KẾT</p>
          </div>
          <div>
            <div className="flex flex-col gap-1 -mb-2">
              <div className="flex flex-row gap-1.5 items-center">
                <div className="flex flex-row justify-center pt-[2px]">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4"
                  >
                    <g clipPath="url(#clip0_431_779)">
                      <path
                        d="M12.4323 9.46033C12.4297 9.45776 12.4273 9.4552 12.4247 9.45264C12.4236 9.45154 12.4223 9.4502 12.4209 9.44897L11.5249 8.55298C11.2731 8.30103 10.9382 8.16235 10.582 8.16235C10.228 8.16235 9.89491 8.29944 9.64357 8.54846C9.64174 8.55017 9.64003 8.552 9.6382 8.55371L9.162 9.03003L6.96901 6.83691L7.44509 6.36072C7.44692 6.35901 7.44863 6.35718 7.45033 6.35547C7.96584 5.83521 7.96449 4.99255 7.44594 4.474L6.55129 3.57922C6.54958 3.57751 6.54799 3.57593 6.5464 3.57434C6.29457 3.323 5.95998 3.18457 5.60427 3.18457C5.24965 3.18457 4.91615 3.32214 4.66469 3.57178C4.66127 3.5752 4.65785 3.57861 4.65456 3.58215L4.24367 3.99292C4.02748 4.20911 3.86159 4.375 3.85512 4.38159C3.2206 5.01599 3.07228 6.02734 3.43752 7.22937C3.77199 8.33032 4.50795 9.4884 5.50966 10.4902C6.9081 11.8887 8.62074 12.7573 9.97902 12.7573C10.6508 12.7573 11.2178 12.5455 11.6165 12.1467C11.6248 12.1385 11.8541 11.9092 12.1265 11.6368L12.4247 11.3386C12.4252 11.3381 12.4257 11.3376 12.4263 11.337C12.9386 10.823 12.9435 9.98938 12.4402 9.46912C12.4376 9.46606 12.4348 9.46301 12.4323 9.46033ZM11.7652 10.6722C11.7623 10.675 11.7595 10.6779 11.7567 10.6808L11.4636 10.9739C11.1959 11.2416 10.9699 11.4677 10.9553 11.4821C10.7312 11.7062 10.4027 11.8198 9.97902 11.8198C8.87709 11.8198 7.38307 11.0377 6.17262 9.82739C5.27773 8.9325 4.62502 7.91309 4.33449 6.95679C4.07839 6.11414 4.14528 5.41711 4.51833 5.04407L4.90651 4.65588L5.32387 4.23853C5.32546 4.23694 5.32692 4.23547 5.32839 4.23389C5.40273 4.16174 5.50038 4.12207 5.60427 4.12207C5.70864 4.12207 5.8069 4.16223 5.88149 4.23523C5.88246 4.23633 5.88356 4.23743 5.88478 4.23853L6.78298 5.13684C6.9374 5.29126 6.9374 5.54248 6.78298 5.6969C6.78273 5.69714 6.78249 5.69751 6.78212 5.69775V5.69788L5.9745 6.50549C5.79152 6.6886 5.79152 6.98535 5.9745 7.16846L8.83058 10.0244C8.91847 10.1124 9.03774 10.1617 9.162 10.1617C9.28639 10.1617 9.40566 10.1123 9.49355 10.0244L10.296 9.22168C10.299 9.21899 10.3018 9.21606 10.3046 9.21326C10.3792 9.14014 10.4776 9.09985 10.582 9.09985C10.6878 9.09985 10.7871 9.14111 10.862 9.21582L11.7578 10.1116L11.7598 10.1136C11.7608 10.1146 11.7617 10.1156 11.7626 10.1166C11.9149 10.2698 11.9157 10.5179 11.7652 10.6722V10.6722Z"
                        fill="white"
                      />
                      <path
                        d="M13.6569 2.34314C12.1459 0.832153 10.137 0 8 0C5.86304 0 3.85413 0.832153 2.34314 2.34314C0.832153 3.85425 0 5.86316 0 8C0 10.1368 0.832153 12.1459 2.34314 13.6569C3.85413 15.1678 5.86316 16 8 16C10.1368 16 12.1458 15.1678 13.6569 13.6569C15.1678 12.1459 16 10.137 16 8C16 5.86316 15.1678 3.85425 13.6569 2.34314V2.34314ZM8 15.0625C4.10571 15.0625 0.9375 11.8942 0.9375 8C0.9375 4.10583 4.10571 0.937622 8 0.9375C11.8943 0.937622 15.0625 4.10583 15.0625 8C15.0624 11.8943 11.8942 15.0625 8 15.0625V15.0625Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_431_779">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white p-0 m-0 font-bold !lg:text-[16px] !md:text-[12px]">
                  1900636929
                </p>
              </div>
              <div className="flex flex-row gap-1.5 items-center">
                <div className="flex flex-row justify-center pt-[2px]">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4"
                  >
                    <path
                      d="M14.5938 2.375H1.40625C0.632438 2.375 0 3.00466 0 3.78125V12.2188C0 12.9956 0.632844 13.625 1.40625 13.625H14.5938C15.3676 13.625 16 12.9953 16 12.2188V3.78125C16 3.00447 15.3673 2.375 14.5938 2.375ZM14.3778 3.3125C13.9232 3.76866 8.58266 9.12656 8.36325 9.34669C8.18 9.5305 7.82009 9.53062 7.63675 9.34669L1.62219 3.3125H14.3778ZM0.9375 12.0464V3.95359L4.97078 8L0.9375 12.0464ZM1.62219 12.6875L5.63263 8.664L6.97278 10.0085C7.52197 10.5595 8.47825 10.5593 9.02725 10.0085L10.3674 8.66403L14.3778 12.6875H1.62219ZM15.0625 12.0464L11.0292 8L15.0625 3.95359V12.0464Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap">
                <a href="https://www.facebook.com/elearningiig" target="_blank">
                  <img
                    src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/bced50fb-21fc-47ec-963b-229a05bd29f4/default_image_bced50fb-21fc-47ec-963b-229a05bd29f4_facebook_1679298790084.png"
                    className="cursor-pointer w-[32px] h-[32px] mr-2 mt-2 object-cover rounded"
                  />
                </a>
                <a href="https://www.youtube.com/@iigvn" target="_blank">
                  <img
                    src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/7cc6c6fe-4abb-47f7-9813-78c9f8f61f73/default_image_7cc6c6fe-4abb-47f7-9813-78c9f8f61f73_youtube_1679298790118.png"
                    className="cursor-pointer w-[32px] h-[32px] mr-2 mt-2 object-cover rounded"
                  />
                </a>
                <a href="https://zalo.me/4051284157521949231" target="_blank">
                  <img
                    src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/8d051b76-a3bb-40f1-bc95-e24ca1737421/default_image_8d051b76-a3bb-40f1-bc95-e24ca1737421_zalo_1678414322877.png"
                    className="cursor-pointer w-[32px] h-[32px] mr-2 mt-2 object-cover rounded"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 sm:gap-x-4 lg:gap-x-8 gap-y-6">
              <div>
                <p className="font-bold text-base mb-1 sm:ms-[20px]">Trụ sở chính</p>
                <div className="flex flex-row gap-1.5">
                  <div className="flex flex-row justify-center pt-[2px]">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4"
                    >
                      <path
                        d="M8 0C4.89838 0 2.375 2.52338 2.375 5.625C2.375 6.67294 2.66528 7.69563 3.21466 8.58288L7.67981 15.7784C7.76534 15.9162 7.91603 16 8.07809 16C8.07934 16 8.08056 16 8.08181 16C8.24528 15.9987 8.39628 15.9124 8.48025 15.7721L12.8316 8.50688C13.3507 7.63838 13.625 6.64184 13.625 5.625C13.625 2.52338 11.1016 0 8 0ZM12.0271 8.02556L8.071 14.6308L4.01147 8.08894C3.55419 7.35044 3.30625 6.49844 3.30625 5.625C3.30625 3.04031 5.41531 0.93125 8 0.93125C10.5847 0.93125 12.6906 3.04031 12.6906 5.625C12.6906 6.47253 12.459 7.30275 12.0271 8.02556Z"
                        fill="white"
                      />
                      <path
                        d="M8 2.8125C6.44919 2.8125 5.1875 4.07419 5.1875 5.625C5.1875 7.16591 6.42866 8.4375 8 8.4375C9.59072 8.4375 10.8125 7.14897 10.8125 5.625C10.8125 4.07419 9.55081 2.8125 8 2.8125ZM8 7.50625C6.96072 7.50625 6.11875 6.66147 6.11875 5.625C6.11875 4.59113 6.96613 3.74375 8 3.74375C9.03387 3.74375 9.87813 4.59113 9.87813 5.625C9.87813 6.64634 9.05575 7.50625 8 7.50625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-white p-0 m-0 font-400 text-sm leading-[19.1px]">
                    75 Giang Văn Minh, Phường Đội Cấn, Quận Ba Đình, Hà Nội
                  </p>
                </div>
              </div>
              <div>
                <p className="font-bold text-base mb-1 sm:ms-[20px]">
                  Địa điểm đăng ký thi tại Hà Nội
                </p>
                <div className="flex flex-row gap-1.5">
                  <div className="flex flex-row justify-center pt-[2px]">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4"
                    >
                      <path
                        d="M8 0C4.89838 0 2.375 2.52338 2.375 5.625C2.375 6.67294 2.66528 7.69563 3.21466 8.58288L7.67981 15.7784C7.76534 15.9162 7.91603 16 8.07809 16C8.07934 16 8.08056 16 8.08181 16C8.24528 15.9987 8.39628 15.9124 8.48025 15.7721L12.8316 8.50688C13.3507 7.63838 13.625 6.64184 13.625 5.625C13.625 2.52338 11.1016 0 8 0ZM12.0271 8.02556L8.071 14.6308L4.01147 8.08894C3.55419 7.35044 3.30625 6.49844 3.30625 5.625C3.30625 3.04031 5.41531 0.93125 8 0.93125C10.5847 0.93125 12.6906 3.04031 12.6906 5.625C12.6906 6.47253 12.459 7.30275 12.0271 8.02556Z"
                        fill="white"
                      />
                      <path
                        d="M8 2.8125C6.44919 2.8125 5.1875 4.07419 5.1875 5.625C5.1875 7.16591 6.42866 8.4375 8 8.4375C9.59072 8.4375 10.8125 7.14897 10.8125 5.625C10.8125 4.07419 9.55081 2.8125 8 2.8125ZM8 7.50625C6.96072 7.50625 6.11875 6.66147 6.11875 5.625C6.11875 4.59113 6.96613 3.74375 8 3.74375C9.03387 3.74375 9.87813 4.59113 9.87813 5.625C9.87813 6.64634 9.05575 7.50625 8 7.50625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-white p-0 m-0 font-400 text-sm leading-[19.1px]">
                    Tầng 3, Trung Yên Plaza, 1 Trung Hòa, Quận Cầu Giấy, Hà Nội
                  </p>
                </div>
              </div>
              <div>
                <p className="font-bold text-base mb-1 sm:ms-[20px]">Chi nhánh TP.Đà Nẵng</p>
                <div className="flex flex-row gap-1.5">
                  <div className="flex flex-row justify-center pt-[2px]">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4"
                    >
                      <path
                        d="M8 0C4.89838 0 2.375 2.52338 2.375 5.625C2.375 6.67294 2.66528 7.69563 3.21466 8.58288L7.67981 15.7784C7.76534 15.9162 7.91603 16 8.07809 16C8.07934 16 8.08056 16 8.08181 16C8.24528 15.9987 8.39628 15.9124 8.48025 15.7721L12.8316 8.50688C13.3507 7.63838 13.625 6.64184 13.625 5.625C13.625 2.52338 11.1016 0 8 0ZM12.0271 8.02556L8.071 14.6308L4.01147 8.08894C3.55419 7.35044 3.30625 6.49844 3.30625 5.625C3.30625 3.04031 5.41531 0.93125 8 0.93125C10.5847 0.93125 12.6906 3.04031 12.6906 5.625C12.6906 6.47253 12.459 7.30275 12.0271 8.02556Z"
                        fill="white"
                      />
                      <path
                        d="M8 2.8125C6.44919 2.8125 5.1875 4.07419 5.1875 5.625C5.1875 7.16591 6.42866 8.4375 8 8.4375C9.59072 8.4375 10.8125 7.14897 10.8125 5.625C10.8125 4.07419 9.55081 2.8125 8 2.8125ZM8 7.50625C6.96072 7.50625 6.11875 6.66147 6.11875 5.625C6.11875 4.59113 6.96613 3.74375 8 3.74375C9.03387 3.74375 9.87813 4.59113 9.87813 5.625C9.87813 6.64634 9.05575 7.50625 8 7.50625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-white p-0 m-0 font-400 text-sm leading-[19.1px]">
                    19 Hoàng Văn Thụ, Quận Hải Châu, Đà Nẵng
                  </p>
                </div>
              </div>
              <div>
                <p className="font-bold text-base mb-1 sm:ms-[20px]">
                  Chi nhánh TP.Hồ Chí Minh
                </p>
                <div className="flex flex-row gap-1.5">
                  <div className="flex flex-row justify-center pt-[2px]">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4"
                    >
                      <path
                        d="M8 0C4.89838 0 2.375 2.52338 2.375 5.625C2.375 6.67294 2.66528 7.69563 3.21466 8.58288L7.67981 15.7784C7.76534 15.9162 7.91603 16 8.07809 16C8.07934 16 8.08056 16 8.08181 16C8.24528 15.9987 8.39628 15.9124 8.48025 15.7721L12.8316 8.50688C13.3507 7.63838 13.625 6.64184 13.625 5.625C13.625 2.52338 11.1016 0 8 0ZM12.0271 8.02556L8.071 14.6308L4.01147 8.08894C3.55419 7.35044 3.30625 6.49844 3.30625 5.625C3.30625 3.04031 5.41531 0.93125 8 0.93125C10.5847 0.93125 12.6906 3.04031 12.6906 5.625C12.6906 6.47253 12.459 7.30275 12.0271 8.02556Z"
                        fill="white"
                      />
                      <path
                        d="M8 2.8125C6.44919 2.8125 5.1875 4.07419 5.1875 5.625C5.1875 7.16591 6.42866 8.4375 8 8.4375C9.59072 8.4375 10.8125 7.14897 10.8125 5.625C10.8125 4.07419 9.55081 2.8125 8 2.8125ZM8 7.50625C6.96072 7.50625 6.11875 6.66147 6.11875 5.625C6.11875 4.59113 6.96613 3.74375 8 3.74375C9.03387 3.74375 9.87813 4.59113 9.87813 5.625C9.87813 6.64634 9.05575 7.50625 8 7.50625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-white p-0 m-0 font-400 text-sm leading-[19.1px]">
                    Tầng 1, Tháp 1, The Sun Avenue, số 28 Mai Chí Thọ, An Phú,
                    TP.Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="grid gap-1">
              <a
                className="cursor-pointer text-base font-bold truncate"
                target="_blank"
                href="https://tuyendung.iigvietnam.com/vi/"
              >
                Tuyển dụng
              </a>
              <a
                className="cursor-pointer text-base font-bold truncate"
                target="_blank"
                href="https://iigvietnam.com/vi/"
              >
                Về chúng tôi
              </a>
              <div className="mt-[19px]">
                <a
                  href="http://online.gov.vn/Home/WebDetails/66931"
                  target="_blank"
                >
                  <img src="https://elearning.iigvietnam.com/images/logo/ministry-of-international-trade-and-industry.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
