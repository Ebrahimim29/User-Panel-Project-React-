import { useState } from "react";
import { createUserService, updateUserService } from "../../../services/users";
import { useLocation, useNavigate } from "react-router";

export default function AddUserPage() {

    const navigate = useNavigate()

    const location = useLocation()
    const userToEdit = location.state?.user

    const [formData, setFormData] = useState({
        name: userToEdit?.name ||'',
        email: userToEdit?.email ||'',
        phone: userToEdit?.phone ||'',
        website: userToEdit?.website ||''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Form Submitted:", formData); 
        const res = userToEdit ? await updateUserService(userToEdit.id, formData) : await createUserService(formData) 
        if (res.status === 201 || res.status === 200){
            // Send data to on API
            console.log(res);            
            alert('عملیات با موفقیت انجام شد:'+ res.data.id);
            // clear form
            setFormData({name:'', email:'', phone:'', website:''});
            navigate(-1)
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 h-full flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">{userToEdit ? 'ویرایش کاربر' : 'افزودن کاربر'}</h1>

            <form onSubmit={handleSubmit} className="bg-sky-300 shadow-lg rounded-lg p-8 flex-1 flex flex-col overflow-y-auto">
                <div className="flex-1 space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">نام</label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="نام خود را وارد کنید"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ایمیل خود را وارد کنید"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">تلفن</label>
                        <input 
                        type="phone"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="تلفن خود را وارد کنید"
                        />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">وب سایت</label>
                        <input 
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="وب سایت خود را وارد کنید"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button type="submit" className="bg-red-400 hover:bg-amber-400 text-black font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
                        {userToEdit ? 'ویرایش' : 'ثبت'}
                    </button>
                </div>

            </form>
        </div>
    );
};