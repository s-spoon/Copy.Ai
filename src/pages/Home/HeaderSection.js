import React, { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import { KeyboardArrowDown, Menu } from "@material-ui/icons";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

function HeaderSection() {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("");

    const CompanyMenu = () => {
        return (
            <div className="w-full flex items-start justify-between">
                <div className="text-center">
                    <p className="text-xl font-bold">قصص عملائنا</p>
                    <img src="./assets/imgs/customer.png" alt="customer" />
                </div>
                <div className="text-right px-7">
                    <p className="text-xl font-bold">كن أحد شركاء ذكي</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            التسويق بالعمولة
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">الوظائف</p>
                    </div>
                </div>
                <div className="text-right px-7">
                    <p className="text-xl font-bold">ابق على اتصال معنا</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            مراجعات العملاء
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            تواصل معنا
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    const UseCaseMenu = () => {
        return (
            <div className="w-full flex items-start justify-between">
                <div className="text-center">
                    <p className="text-xl font-bold">كيف يعمل ذكي</p>
                    <img src="./assets/imgs/customer.png" alt="customer" />
                </div>
                <div className="text-right px-7">
                    <p className="text-xl font-bold">حالات الاستخدام</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            كتابة المقالات
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            وسائل التواصل الاجتماعي
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            التسويق الإلكتروني
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">الترجمة</p>
                    </div>
                </div>
            </div>
        );
    };

    const LearnMenu = () => {
        return (
            <div className="w-full flex justify-between items-stretch">
                <div className="text-right px-7 w-1/3">
                    <p className="text-xl font-bold">المقالات المميزة</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            عنوان المقالة الاولى
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            عنوان المقالة الثانية
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            عنوان المقالة الثالثة
                        </p>
                    </div>
                </div>
                <div className="text-right px-7 w-1/3 border-x border-gray-300">
                    <p className="text-xl font-bold">خدمة العملاء</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            الدعم الفني
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            مركز المساعدة
                        </p>
                    </div>
                </div>
                <div className="text-right px-7 w-1/3">
                    <p className="text-xl font-bold">التعليم</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">المدونة</p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">الأوامر</p>
                    </div>
                </div>
            </div>
        );
    };

    const ProductMenu = () => {
        return (
            <div className="w-full flex justify-between items-stretch">
                <div className="text-right px-7 w-1/3">
                    <p className="text-xl font-bold">المقالات المميزة</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            عنوان المقالة الاولى
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            عنوان المقالة الثانية
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            عنوان المقالة الثالثة
                        </p>
                    </div>
                </div>
                <div className="text-right px-7 w-1/3 border-x border-gray-300">
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            المشاريع
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            محرر النصوص
                        </p>
                    </div>
                </div>
                <div className="text-right px-7 w-1/3">
                    <p className="text-xl font-bold">المنصة والمميزات</p>
                    <div className="pr-2">
                        <p className="mt-6 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            المحادثة
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">الحماية</p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">
                            صوت العلامة التجارية
                        </p>
                        <p className="mt-5 px-2 py-1 text-base cursor-pointer hover:bg-gray-300 rounded-md">القوالب</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed w-full left-1/2 transform -translate-x-1/2 bg-blur z-20">
            <div
                style={{ backdropFilter: "blur(10px)" }}
                className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-12  "
            >
                <div className="flex items-center justify-between">
                    <div className="md:hidden text-white">
                        <Menu className="!text-4xl cursor-pointer" />
                    </div>
                    <div className="items-center justify-center hidden md:flex">
                        <ActionButton text="إنشاء حساب مجاني" />
                        <LinkButton
                            onClick={() => navigate("/chat")}
                            text="تسجيل الدخول"
                        />
                    </div>
                    <div className="items-center justify-center hidden md:flex">
                        <LinkButton text="الأسعار" />
                        <LinkButton
                            text={
                                <div
                                    onMouseEnter={() =>
                                        setActiveMenu("company")
                                    }
                                >
                                    <KeyboardArrowDown />
                                    <span>الشركة</span>
                                </div>
                            }
                        />
                        <LinkButton
                            text={
                                <div
                                    onMouseEnter={() => setActiveMenu("learn")}
                                >
                                    <KeyboardArrowDown />
                                    <span>تعلم</span>
                                </div>
                            }
                        />
                        <LinkButton
                            text={
                                <div
                                    onMouseEnter={() =>
                                        setActiveMenu("usecase")
                                    }
                                >
                                    <KeyboardArrowDown />
                                    <span>حالات الاستخدام</span>
                                </div>
                            }
                        />
                        <LinkButton
                            text={
                                <div
                                    onMouseEnter={() =>
                                        setActiveMenu("product")
                                    }
                                >
                                    <KeyboardArrowDown />
                                    <span>المنتجات</span>
                                </div>
                            }
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="font-bold text-2xl text-white pr-1">
                            ذكـي
                        </div>
                        <img
                            src="./assets/imgs/logo.png"
                            className="w-10 h-10"
                        />
                    </div>
                </div>
            </div>
            <div
                onMouseLeave={() => setActiveMenu("")}
                className={`bg-white rounded-3xl hidden w-full lg:w-[876px] h-[300px] mx-auto shadow-lg p-9 ${
                    activeMenu === "" ? "" : "md:block"
                }`}
            >
                {activeMenu === "company" && <CompanyMenu />}
                {activeMenu === "learn" && <LearnMenu />}
                {activeMenu === "usecase" && <UseCaseMenu />}
                {activeMenu === "product" && <ProductMenu />}
            </div>
        </div>
    );
}

export default HeaderSection;
