import { useEffect, useState } from "react"
import { deleteUserService, getUsersService } from "../../services/users";
import { FaUserPlus } from "react-icons/fa";
import UserTable from "./_components/UserTable";
import { Link } from "react-router";

export default function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const handleGetUsers = async () => {
            try {
                const data = await getUsersService();
                setUsers(data || []);
            } catch (error) {
                console.log(error);            
            }
        };
        
        handleGetUsers();
    }, []);

    useEffect(() => {
        console.log(users);        
    }, [users]);

    const handleDelete = async (id) => {
        const res = await deleteUserService(id)
        if (res.status === 200){
            alert('عملیات با موفقیت انجام شد')
            console.log(res);            
            setUsers(users.filter(user => user.id !== id))
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
                <Link to="/users/add" className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <FaUserPlus/>
                    <span>افزودن کاربر</span>
                </Link>
            </div>

            <UserTable users={users} handleDelete={handleDelete}/>
       </div>
    )
};